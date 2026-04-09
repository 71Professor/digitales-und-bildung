# Digitales & Bildung – Website

## Dateistruktur

```
/
├── index.html               → Startseite
├── blog.html                → Blog
├── leistungen.html          → Leistungen
├── der-bildungsingenieur.html → Die Bildungsingenieure
├── impressum.html           → Impressum
├── datenschutz.html         → Datenschutzerklärung
├── css/
│   └── style.css            → Hauptstylesheet
├── js/
│   └── nav.js               → Navigation (Mobile-Toggle, aktiver Link)
└── images/                  → Bilder (manuell befüllen, siehe unten)
```

## FTP-Upload

Alle Dateien einfach in das Wurzelverzeichnis (`public_html` oder `httpdocs`) deines all-inkl.com Hostings laden.

## Bilder einbinden

Die folgenden Bilder müssen manuell in den `images/`-Ordner gelegt werden
(entweder von der alten Website heruntergeladen oder neu erstellt):

| Dateiname                  | Verwendung                        |
|----------------------------|-----------------------------------|
| `logo.jpeg`                | Logo in Header                    |
| `blog-header.png`          | Karten-Bild auf Startseite (Blog) |
| `leistungen-header.png`    | Karten-Bild (Leistungen)          |
| `bildungsingenieur-header.png` | Karten-Bild (Bildungsingenieur) |
| `portrait.jpg`             | Portrait auf Bildungsingenieur-Seite |

Die originalen Bild-URLs von der alten Website (all-inkl Baukasten):
- Logo: https://digitales-und-bildung.de/file/i/cbab3020366137612.jpeg
- Blog-Bild: https://digitales-und-bildung.de/file/i/6c9224e4d46028612.png
- Leistungen-Bild: https://digitales-und-bildung.de/file/i/dc882c29966028612.png
- Bildungsingenieur-Bild: https://digitales-und-bildung.de/file/i/d92b2d61e69868612.png

Hinweis: Falls ein Bild nicht vorhanden ist, wird automatisch ein farbiger Platzhalter angezeigt.

## Anpassen

- **Impressum/Datenschutz**: Bitte in `impressum.html` und `datenschutz.html` die
  Platzhalterdaten (Name, Adresse) durch deine echten Daten ersetzen.
- **Blog-Beiträge**: Neue Beiträge in `blog.html` als `<article class="blog-card">` ergänzen.
- **Farbschema**: In `css/style.css` unter `:root` anpassbar (Variablen `--color-primary`, `--color-accent` etc.)
