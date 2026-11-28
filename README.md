# Zunfthaus-Rechner

Bestell-Rechner für den Glühweinstand auf dem Weihnachtsmarkt. Läuft im Browser auf Handy und Tablet, auch offline, und lässt sich zum Homescreen hinzufügen.

- Große Buttons für alle Getränke, Preise inkl. 4,50 € Pfand
- Pfand zurück, Rückgängig, Summenseite mit Rückgeld
- Historie der letzten Bestellungen (nur auf dem Gerät gespeichert, wird nach 48 Stunden automatisch gelöscht)

Preise ändern: in `index.html` die Liste `BIG` bzw. `SMALL` anpassen (Preise in Cent). Nach einer Änderung in `sw.js` die Versionsnummer in `CACHE` erhöhen, damit Handys die neue Version laden.

## Admin-Modus

Oben rechts auf ⚙︎ tippen und die PIN eingeben (Start-PIN **1111**). Die Kasse wechselt in den Bearbeiten-Modus:

- Kachel antippen: Symbol, Name, Preis, Art und Farbe ändern oder löschen
- Am Griff ⠿ ziehen: Kachel verschieben
- ✕ auf der Kachel: löschen (zweimal tippen)
- „+ Kachel hinzufügen“: neues Getränk
- „Pfand zurück“ ist eine normale Kachel (Betrag ändern, verschieben)
- „App & PIN“: Name, Untertitel, Logo, PIN, Export/Import, Zurücksetzen
- „Fertig“: zurück zur Kasse

## Hell / Dunkel

Der Knopf ☾ / ☀︎ oben schaltet zwischen hell und dunkel um. Ohne Auswahl folgt die App der Einstellung des Handys.

Einstellungen, Bestellungen und Historie liegen nur auf dem Gerät (localStorage, Schlüssel `wmr.*`). PIN vergessen: Website-Daten im Browser löschen, dann gilt wieder 1111 mit den Zunfthaus-Getränken.
