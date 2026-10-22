# Claude-Einstellungen für Gaia Historia

Alles, was Claude Code für dieses Projekt braucht, liegt hier im Repo und lässt sich einfach mitnehmen.

| Pfad | Zweck |
| --- | --- |
| `../CLAUDE.md` | Wird in jeder Sitzung geladen – bewusst kurz, verweist nur auf die Skills |
| `skills/gaia-steckbrief/` | Umfang, Stack, Aufbau, Befehle, Lizenzen, Phasenstand (projektspezifisch) |
| `skills/daten-pipeline/` | Geprüfte Datenquellen und Aufbereitung (projektspezifisch) |
| `skills/sparsam-testen/` | Token-sparend im Browser prüfen (allgemein, für jedes Web-Projekt) |
| `skills/windows-shell-fallen/` | Shell-Fallen auf diesem PC (allgemein) |
| `launch.json` | Dev- und Vorschau-Server für den Browser-Pane (kommt mit Phase 1) |

## Warum das Token spart

Skills werden nur mit ihrer einzeiligen Beschreibung geladen; den Inhalt liest Claude erst, wenn er gebraucht wird. So muss nicht jede Sitzung das Repo neu erkunden, und bekannte Fehler werden nicht wiederholt.

## Exportieren

- **In ein anderes Projekt:** den gewünschten Ordner unter `skills/` nach `<projekt>/.claude/skills/` kopieren.
- **Für alle Projekte:** die allgemeinen Skills (`sparsam-testen`, `windows-shell-fallen`) nach `%USERPROFILE%\.claude\skills\` kopieren.
