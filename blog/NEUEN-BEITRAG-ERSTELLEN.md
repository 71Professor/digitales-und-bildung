# Neuen Blogbeitrag erstellen

## Schritt 1: Template kopieren

`blog/post-template.html` kopieren und umbenennen:

```
blog/post-template.html  →  blog/[slug].html
```

**Slug-Konvention:** Kurz, lowercase, Bindestriche statt Leerzeichen, keine Umlaute.

Beispiele:
- `ki-im-unterricht.html`
- `kompetenzorientierung-neu-denken.html`
- `lernraum-digital.html`

---

## Schritt 2: Platzhalter in der neuen Datei befüllen

| Platzhalter | Ersetzen durch |
|---|---|
| `[KURZBESCHREIBUNG DES BEITRAGS – ...]` | 1–2 Sätze für Suchmaschinen (ca. 150 Zeichen) |
| `[TITEL]` im `<title>`-Tag | Titel des Beitrags |
| `[TITEL DES BEITRAGS]` im Breadcrumb | Kurzer Titel (kann abgekürzt werden) |
| `[TITEL DES BEITRAGS]` im `<h1>` | Vollständiger Titel |
| `[UNTERTITEL ODER EIN SATZ BESCHREIBUNG]` | Kurze Beschreibung unter dem Titel |
| `[KATEGORIE]` | z.B. `Bildung & Digitalisierung`, `KI`, `Lernräume` |
| `[TT. Monat JJJJ]` | z.B. `15. Mai 2026` |
| `[Einleitungsabsatz ...]` | Erster Absatz des Beitrags |
| `[Zwischenüberschrift]` | Abschnittstitel |
| `[Text ...]` | Fließtext |

---

## Schritt 3: Inhalt schreiben

### Verfügbare HTML-Elemente

**Absatz:**
```html
<p>Text...</p>
```

**Zwischenüberschrift (groß):**
```html
<h2>Überschrift</h2>
```

**Zwischenüberschrift (klein):**
```html
<h3>Unterüberschrift</h3>
```

**Hervorgehobenes Zitat:**
```html
<blockquote>
  Zitat oder hervorgehobener Gedanke.
</blockquote>
```

**Aufzählung:**
```html
<ul>
  <li>Punkt eins</li>
  <li>Punkt zwei</li>
</ul>
```

**Nummerierte Liste:**
```html
<ol>
  <li>Erster Schritt</li>
  <li>Zweiter Schritt</li>
</ol>
```

---

## Schritt 4: Karte in blog.html eintragen

`blog.html` öffnen und innerhalb von `<div class="blog-list">` eine neue Karte **oben** einfügen (neuester Beitrag zuerst):

```html
<article class="blog-card">
  <div class="blog-card-top">
    <span class="blog-meta">[KATEGORIE]</span>
    <span class="blog-date">[TT. Monat JJJJ]</span>
  </div>
  <h2><a href="blog/[slug].html">[TITEL]</a></h2>
  <p>[TEASER – 2–3 Sätze aus dem Beitrag oder eigene Zusammenfassung]</p>
  <a href="blog/[slug].html" class="blog-readmore">Weiterlesen →</a>
</article>
```

---

## Schritt 5: Prüfen und committen

1. `blog.html` im Browser öffnen → neue Karte sichtbar, Link funktioniert
2. Beitragsseite öffnen → Breadcrumb, Inhalt und "← Zurück zum Blog" prüfen

```bash
git add blog/[slug].html blog.html
git commit -m "feat: add blog post '[Titel]'"
git push
```
