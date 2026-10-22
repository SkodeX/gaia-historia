---
name: sparsam-testen
description: Token-sparend prüfen, ob eine Web-App-Änderung funktioniert – Reihenfolge Typprüfung → Build → Vorschau, Browser-Pane über DOM/JS statt Screenshots, bekannte Fallen (Service Worker, gedrosseltes requestAnimationFrame). Laden, bevor du eine Vite/React-App im Browser-Pane testest.
---

# Sparsam testen

Ziel: dieselbe Gewissheit mit möglichst wenig Kontext. Screenshots sind teuer, Text ist billig.

## Reihenfolge

1. `npm run typecheck` – fängt die meisten Fehler, ohne Browser. Ausgabe mit `| tail -30` kürzen.
2. Nur wenn die Änderung sichtbar ist: Dev-Server über `preview_start` (Name aus `.claude/launch.json`), nie per Bash starten.
3. Vor dem Abschluss einer Phase einmal `npm run build` + die Vorschau-Konfiguration aus `.claude/launch.json` – der Dev-Server kann veraltete Module liefern.
4. Zustand, der nur beim Laden gelesen wird (z. B. Zeit aus der URL): `navigate` auf die neue Adresse **plus** `location.reload()` per JS – ein reiner Hash-Wechsel lädt nicht neu.

## Im Browser-Pane

- **Zuerst Text:** `get_page_text` oder `find` für gezielte Elemente. `read_page` nur mit `ref_id`/`depth`, nie den ganzen Baum.
- **Zustand per JS abfragen** statt hinzusehen, z. B. `document.querySelectorAll('.marker').length`, aktueller Reglerwert, Fehler in `window.__lastError`. Ergebnisse knapp zurückgeben (Zahlen, kurze Arrays), nie ganze Objekte.
- **Konsole:** `read_console_messages` mit `onlyErrors: true`.
- **Netz:** `read_network_requests` mit `urlPattern`, Antworttexte nur bei Bedarf.
- **Screenshots** nur für Optik (Globus, Layout) und dann mit `scale: 0.5`. Für Details lieber `zoom` auf einen Bereich. Mehrere Schritte in einem `browser_batch` bündeln.
- Handy-Ansicht: `resize_window` mit `preset: "mobile"`, danach wieder `"desktop"`.

## Fallen

- **Versteckter Pane drosselt `requestAnimationFrame`** → Canvas/WebGL-Screenshots hinken hinterher, auch DOM-Änderungen sind im Screenshot oft noch alt. Zustand per JS prüfen (z. B. Kamera-Position, Anzahl gerenderter Objekte über eine Debug-Variable am `window`).
- **Service Worker** liefert alte Builds: vor dem Neuladen der Vorschau `navigator.serviceWorker.getRegistrations().then(r => r.forEach(x => x.unregister()))` und `caches.keys().then(k => k.forEach(c => caches.delete(c)))`.
- WebGL-Fehler erscheinen oft nur als Warnung – Konsole ohne `onlyErrors` kurz mit `pattern: "WebGL"` prüfen.

## Was du NICHT tun musst

- Dateien nach `Edit`/`Write` nicht zur Kontrolle neu lesen – das Werkzeug meldet Fehler selbst.
- Nicht jede Kleinigkeit im Browser prüfen; bei reiner Logik reicht die Typprüfung oder ein kurzes `node`-Skript.
