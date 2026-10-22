---
name: windows-shell-fallen
description: Bekannte Fallen der Bash- und PowerShell-Werkzeuge auf diesem Windows-PC (Git Bash, PowerShell 5.1) – Heredocs, cat, Pfade, Arbeitsverzeichnis, Ausgabelänge. Laden, bevor du mehrzeilige Shell-Befehle, node-Einzeiler oder Datei-Erzeugung per Shell schreibst.
---

# Windows-Shell-Fallen

Jeder fehlgeschlagene Befehl kostet eine Runde. Diese Regeln vermeiden die bekannten.

## Bash-Werkzeug (Git Bash)

- **Arbeitsverzeichnis wird nach jedem Aufruf zurückgesetzt.** `cd` gilt nur innerhalb desselben Befehls; besser absolute Pfade.
- **Pfade:** in Bash `/e/Coding/Dinoooo/...`, in Datei-Werkzeugen (`Read`, `Write`, `Edit`) `E:\Coding\Dinoooo\...`. Pfade mit Leerzeichen immer in Anführungszeichen.
- **Nie mit einem nackten `cat > datei` beginnen** – ohne Heredoc wartet es auf stdin und hängt bis zum Timeout. Dateien mit `Write` erzeugen.
- **Mehrzeilige `node -e`/Heredocs mit Backslashes oder gemischten Anführungszeichen brechen.** Stattdessen das Skript mit `Write` in den Scratchpad legen und `node <pfad>` ausführen.
- **Ausgaben kürzen:** `| head -40`, `| tail -30`, `curl -s -o datei` + `head -c 500 datei`. Nie große JSON-Antworten ungefiltert ausgeben.
- `curl` immer mit `-m 30` (Timeout), sonst hängt ein toter Server den Aufruf auf.
- Lange Läufe (Datenaufbereitung, `npm install`) mit `run_in_background` starten, nicht pollen.
- **TypeScript direkt mit Node** (`node datei.ts`, Node 24) geht nur mit „löschbarer“ Syntax: keine Parameter-Properties (`constructor(private x)`), keine Enums/Namespaces. Code, der auch in Node-Testskripten laufen soll, entsprechend schreiben.
- `sed -i` mit `\n` im Ersetzungstext funktioniert (GNU sed), mehrzeilige *Suchmuster* aber nicht – dafür `Edit` nutzen.

## PowerShell-Werkzeug (Windows PowerShell 5.1)

- Kein `&&`/`||` → `A; if ($?) { B }`.
- Kein `2>&1` bei nativen Programmen (macht aus stderr Fehler-Objekte).
- `Set-Content` schreibt ANSI → für Dateien `-Encoding utf8` oder gleich `Write` nutzen.
- Für git, npm und Dateisuche lieber das Bash-Werkzeug; PowerShell nur für Windows-Spezifisches.

## Git

- Zeilenenden über `.gitattributes` (`* text=auto eol=lf`) festlegen, sonst entstehen CRLF-Diffs.
- Commit-Nachrichten mit mehreren Zeilen: `git commit -F <datei im scratchpad>` statt verschachtelter Anführungszeichen.
