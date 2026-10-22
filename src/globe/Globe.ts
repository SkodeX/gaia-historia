// three.js-Globus: Erdkugel mit Canvas-Textur, Atmosphärensaum, Sternenhimmel und HTML-Markierungen.
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CSS2DObject, CSS2DRenderer } from 'three/examples/jsm/renderers/CSS2DRenderer.js';

const RAD = Math.PI / 180;

/** lon/lat → Punkt auf der Einheitskugel, passend zur UV-Abbildung von THREE.SphereGeometry */
export function lonLatToVec3(lon: number, lat: number, r = 1): THREE.Vector3 {
  const phi = (lon + 180) * RAD;
  const theta = (90 - lat) * RAD;
  return new THREE.Vector3(-Math.cos(phi) * Math.sin(theta) * r, Math.cos(theta) * r, Math.sin(phi) * Math.sin(theta) * r);
}

export interface Marker {
  id: string;
  lon: number;
  lat: number;
  el: HTMLElement;
}

const ATMOS_VERTEX = `
varying vec3 vNormal;
varying vec3 vView;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vView = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}`;

const ATMOS_FRAGMENT = `
uniform vec3 uColor;
uniform float uStrength;
varying vec3 vNormal;
varying vec3 vView;
void main() {
  // Rückseite einer etwas größeren Kugel: hell direkt am Erdrand, nach außen weich auslaufend
  float d = dot(vNormal, vView);
  float glow = pow(clamp(0.72 + d, 0.0, 1.0), 5.0) * uStrength;
  gl_FragColor = vec4(uColor, glow);
}`;

export class Globe {
  readonly canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private labels: CSS2DRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private controls: OrbitControls;
  private earth: THREE.Mesh<THREE.SphereGeometry, THREE.MeshStandardMaterial>;
  private texture: THREE.CanvasTexture;
  private atmosphere: THREE.ShaderMaterial;
  private markers = new Map<string, CSS2DObject>();
  private frame = 0;
  private resizeObserver: ResizeObserver;
  private flight: { from: THREE.Vector3; to: THREE.Vector3; t: number } | null = null;
  private lastInteraction = performance.now();
  private placed = false;

  constructor(private host: HTMLElement) {
    this.canvas = document.createElement('canvas');
    const small = Math.min(window.innerWidth, window.innerHeight) < 700;
    this.canvas.width = small ? 2048 : 4096;
    this.canvas.height = this.canvas.width / 2;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(this.renderer.domElement);

    this.labels = new CSS2DRenderer();
    this.labels.domElement.className = 'globe-labels';
    host.appendChild(this.labels.domElement);

    this.camera = new THREE.PerspectiveCamera(35, 1, 0.1, 200);
    this.camera.position.copy(lonLatToVec3(10, 25, 3.6));

    this.controls = new OrbitControls(this.camera, this.labels.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.08;
    this.controls.enablePan = false;
    this.controls.minDistance = 1.35;
    this.controls.maxDistance = 7;
    this.controls.rotateSpeed = 0.5;
    this.controls.zoomSpeed = 0.7;
    this.controls.autoRotateSpeed = 0.35;
    this.controls.addEventListener('start', () => {
      this.lastInteraction = performance.now();
      this.flight = null;
    });
    this.controls.addEventListener('end', () => {
      this.lastInteraction = performance.now();
    });

    this.texture = new THREE.CanvasTexture(this.canvas);
    this.texture.colorSpace = THREE.SRGBColorSpace;
    this.texture.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    this.earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 160, 80),
      new THREE.MeshStandardMaterial({ map: this.texture, roughness: 0.92, metalness: 0, emissive: new THREE.Color('#ff6a2a'), emissiveMap: this.texture, emissiveIntensity: 0 }),
    );
    this.scene.add(this.earth);

    this.atmosphere = new THREE.ShaderMaterial({
      vertexShader: ATMOS_VERTEX,
      fragmentShader: ATMOS_FRAGMENT,
      uniforms: { uColor: { value: new THREE.Color('#6fb4ff') }, uStrength: { value: 1.2 } },
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      depthWrite: false,
    });
    this.scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.12, 96, 48), this.atmosphere));

    this.scene.add(new THREE.AmbientLight('#ffffff', 0.55));
    const sun = new THREE.DirectionalLight('#fff4e6', 2.1);
    sun.position.set(-3, 2, 4);
    this.camera.add(sun);
    this.scene.add(this.camera);

    this.scene.add(this.makeStars());

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(host);
    this.resize();
    this.loop();
  }

  private makeStars(): THREE.Points {
    const n = 2500;
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(60 + Math.random() * 30);
      pos.set([v.x, v.y, v.z], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    return new THREE.Points(g, new THREE.PointsMaterial({ color: '#cfd8ff', size: 0.12, sizeAttenuation: true, transparent: true, opacity: 0.8 }));
  }

  private resize() {
    const w = this.host.clientWidth || 1;
    const h = this.host.clientHeight || 1;
    this.renderer.setSize(w, h);
    this.labels.setSize(w, h);
    this.camera.aspect = w / h;
    // Auf schmalen Bildschirmen weiter weg, damit die Kugel ganz hineinpasst
    this.camera.fov = w < h ? 48 : 35;
    this.camera.updateProjectionMatrix();
    if (!this.placed) {
      // Abstand so wählen, dass die Kugel gut 60 % der kürzeren Seite füllt
      const vHalf = (this.camera.fov * RAD) / 2;
      const half = w < h ? Math.atan(Math.tan(vHalf) * this.camera.aspect) : vHalf;
      const dist = 1 / Math.sin(half * (w < h ? 0.8 : 0.62));
      this.camera.position.setLength(Math.min(this.controls.maxDistance, dist));
      this.placed = true;
    }
  }

  /** Nach dem Malen in this.canvas aufrufen */
  textureUpdated() {
    this.texture.needsUpdate = true;
  }

  setAtmosphere(rgb: [number, number, number], strength = 1.2) {
    this.atmosphere.uniforms.uColor.value.setRGB(rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, THREE.SRGBColorSpace);
    this.atmosphere.uniforms.uStrength.value = strength;
  }

  /** Glühen des Magma-Ozeans (0…1) */
  setGlow(v: number) {
    this.earth.material.emissiveIntensity = v * 1.4;
  }

  setMarkers(list: Marker[]) {
    const keep = new Set(list.map((m) => m.id));
    for (const [id, obj] of this.markers) {
      if (!keep.has(id)) {
        this.earth.remove(obj);
        obj.element.remove();
        this.markers.delete(id);
      }
    }
    for (const m of list) {
      let obj = this.markers.get(m.id);
      if (!obj || obj.element !== m.el) {
        if (obj) {
          this.earth.remove(obj);
          obj.element.remove();
        }
        obj = new CSS2DObject(m.el);
        this.markers.set(m.id, obj);
        this.earth.add(obj);
      }
      obj.position.copy(lonLatToVec3(m.lon, m.lat, 1.005));
    }
  }

  /** Kamera sanft über einen Ort fliegen */
  flyTo(lon: number, lat: number) {
    const dist = Math.max(2.4, Math.min(3.4, this.camera.position.length()));
    this.flight = { from: this.camera.position.clone(), to: lonLatToVec3(lon, lat, dist), t: 0 };
    this.lastInteraction = performance.now();
  }

  private loop = () => {
    this.frame = requestAnimationFrame(this.loop);
    if (this.flight) {
      this.flight.t = Math.min(1, this.flight.t + 0.025);
      const k = 1 - Math.pow(1 - this.flight.t, 3);
      const len = this.flight.from.length() + (this.flight.to.length() - this.flight.from.length()) * k;
      this.camera.position.copy(this.flight.from.clone().normalize().lerp(this.flight.to.clone().normalize(), k).normalize().multiplyScalar(len));
      if (this.flight.t >= 1) this.flight = null;
    }
    // Nach 8 Sekunden ohne Bedienung dreht sich die Erde langsam
    this.controls.autoRotate = !this.flight && performance.now() - this.lastInteraction > 8000;
    this.controls.update();
    // Markierungen auf der Rückseite ausblenden
    const camDir = this.camera.position.clone().normalize();
    for (const obj of this.markers.values()) {
      const facing = obj.position.clone().normalize().dot(camDir);
      obj.element.style.opacity = facing > 0.15 ? '1' : facing > 0 ? String(facing / 0.15) : '0';
      obj.element.style.pointerEvents = facing > 0.15 ? 'auto' : 'none';
    }
    this.renderer.render(this.scene, this.camera);
    this.labels.render(this.scene, this.camera);
  };

  dispose() {
    cancelAnimationFrame(this.frame);
    this.resizeObserver.disconnect();
    this.controls.dispose();
    this.renderer.dispose();
    this.texture.dispose();
    this.renderer.domElement.remove();
    this.labels.domElement.remove();
  }
}
