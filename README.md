# Zunfthaus-Rechner

Bestell-Rechner für den Glühweinstand auf dem Weihnachtsmarkt. Läuft im Browser auf Handy und Tablet, auch offline, und lässt sich zum Homescreen hinzufügen.

- Große Buttons für alle Getränke, Preise inkl. 4,50 € Pfand
- Pfand zurück, Rückgängig, Summenseite mit Rückgeld
- Historie der letzten Bestellungen (nur auf dem Gerät gespeichert)

Preise ändern: in `index.html` die Liste `BIG` bzw. `SMALL` anpassen (Preise in Cent). Nach einer Änderung in `sw.js` die Versionsnummer in `CACHE` erhöhen, damit Handys die neue Version laden.
