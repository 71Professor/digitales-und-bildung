# Workshop 2: KI spricht Markdown. Du auch?

**Tagung:** mobile.schule 2026, Hannover  
**Dauer:** 45 Minuten  
**Zielgruppe:** Lehrkräfte aller Fächer mit Interesse an KI-Tools; keine Vorkenntnisse nötig  
**Max. Teilnehmende:** 25  
**Technische Voraussetzungen:** Laptop mit Internetzugang; optional: Texteditor (z.B. VS Code, Obsidian)

---

## Lernziele

Die Teilnehmenden können nach dem Workshop…
- …erklären, warum Markdown die Kommunikation mit KI-Systemen verbessert
- …grundlegende Markdown-Syntax anwenden (Überschriften, Listen, Tabellen, Hervorhebungen, Codeblöcke)
- …eigene Dokumente und Prompts in Markdown verfassen

---

## Zeitplan

| Zeit | Phase | Inhalt |
|------|-------|--------|
| 0–5 min | Einstieg | Warum überhaupt Markdown? Das Problem mit Fließtext |
| 5–15 min | Theorie | Was ist Markdown — Grundidee und Vorteile |
| 15–35 min | Praxis | Die wichtigsten Elemente live einüben |
| 35–42 min | Anwendung | Prompt in Markdown umschreiben |
| 42–45 min | Abschluss | Zusammenfassung & nächste Schritte |

---

## Inhalt & Durchführung

### Einstieg (0–5 min)

**Drei Arten von Dokumentensprachen**

Es gibt Dokumentensprachen, die vor allem **für den Computer** gemacht sind — zum Beispiel JSON: präzise, strukturiert, aber für Menschen mühsam zu lesen.

```json
{"fach": "Deutsch", "klasse": 9, "dauer": 45}
```

Es gibt Dokumentensprachen, die vor allem **für Menschen** gemacht sind — Word-Dokumente, PDFs: schön formatiert, aber für Computer schwer zu verarbeiten.

Und dann gibt es **Markdown** — eine Sprache, die *sowohl für Menschen als auch für Computer* sehr gut lesbar ist.

```markdown
- **Fach:** Deutsch
- **Klasse:** 9
- **Dauer:** 45 Minuten
```

→ Genau deshalb ist Markdown die ideale Sprache für die Kommunikation mit KI-Systemen.

**Frage an die Runde:** Kennt jemand Markdown schon? Wo ist euch das schon begegnet?

---

### Was ist Markdown? (5–15 min)

**Kernidee:**  
Markdown ist eine einfache Auszeichnungssprache. Mit wenigen Sonderzeichen wird aus Klartext ein strukturiertes Dokument — ohne Mausklicks, ohne Word, ohne Formatierungsmenüs.

**Warum KI und Markdown zusammenpassen:**
- Große Sprachmodelle wurden mit Milliarden von Markdown-Dokumenten trainiert (GitHub, Wikipedia, technische Dokumentationen)
- Struktur hilft der KI, Informationen korrekt zuzuordnen
- Überschriften signalisieren Hierarchie
- Listen helfen bei Aufzählungen von Anforderungen
- **Fett** und *kursiv* heben das Wichtigste hervor
- Die KI antwortet ebenfalls in Markdown — und das wird in den meisten Chat-Interfaces automatisch schön dargestellt

**Wo schreibt man Markdown?**
- Direkt in ChatGPT, Claude, Gemini — wird automatisch gerendert
- In Obsidian (Notiz-App, kostenlos) — ideal für Unterrichtsvorbereitung
- In VS Code (mit Preview)
- Auf GitHub, in Notion, in vielen modernen Tools
- Sogar in WhatsApp funktionieren einige Markdown-Formatierungen!

---

### Die wichtigsten Elemente (15–35 min)

Live eintippen — entweder in einen einfachen Texteditor oder direkt in Claude/ChatGPT.

#### Überschriften

```markdown
# Überschrift 1 (Haupttitel)
## Überschrift 2 (Abschnitt)
### Überschrift 3 (Unterabschnitt)
```

→ Überschriften strukturieren ein Dokument wie Kapitel in einem Buch.

---

#### Hervorhebungen

```markdown
**fett** oder __fett__
*kursiv* oder _kursiv_
~~durchgestrichen~~
```

→ Fett für das Wichtigste, Kursiv für Begriffe oder Titel.

---

#### Listen

```markdown
- Ungeordnete Liste
- Zweiter Punkt
  - Eingerückter Unterpunkt

1. Geordnete Liste
2. Zweiter Schritt
3. Dritter Schritt
```

→ Ungeordnet für Aufzählungen, geordnet für Schritte oder Reihenfolgen.

---

#### Tabellen

```markdown
| Spalte 1 | Spalte 2 | Spalte 3 |
|----------|----------|----------|
| Wert A   | Wert B   | Wert C   |
| Wert D   | Wert E   | Wert F   |
```

→ Tabellen sind ideal für Vergleiche, Stundenpläne, Kriterienraster.

---

#### Codeblöcke

````markdown
```
Hier steht Text, der exakt so angezeigt wird,
wie er geschrieben ist — ohne Formatierung.
```
````

→ Nützlich, wenn man der KI einen exakten Text oder ein Beispiel geben möchte, ohne dass sie es interpretiert.

---

#### Zitate / Blockquotes

```markdown
> Das hier ist ein Zitat oder ein Beispielsatz,
> den die KI analysieren soll.
```

---

#### Trennlinien

```markdown
---
```

→ Trennt Abschnitte im Dokument — übersichtlich und klar.

---

### Praxisübung: Eigenen Prompt umschreiben (35–42 min)

**Aufgabe für die Teilnehmenden:**

1. Denkt an einen typischen Prompt, den ihr der KI stellen würdet (Unterrichtsplanung, Elternbrief, Feedback, Prüfungsfragen…)
2. Schreibt ihn zunächst als einfachen Fließtext
3. Wandelt ihn dann mit Markdown-Elementen um

**Beispiel-Ergebnis:**

Vorher:
> Schreib mir Fragen für einen Test über die Französische Revolution für eine 10. Klasse, etwa 10 Fragen, verschiedene Schwierigkeitsgrade.

Nachher:
```markdown
# Testfragen: Französische Revolution

## Rahmenbedingungen
- **Klasse:** 10 (Gymnasium)
- **Fach:** Geschichte
- **Anzahl:** 10 Fragen

## Gewünschte Verteilung
1. 3 × Faktenwissen (einfach)
2. 4 × Zusammenhänge erklären (mittel)
3. 3 × Urteilskompetenz / Quellenarbeit (schwer)

## Format
Jede Frage mit Musterlösung und Punktzahl versehen.
```

**Austausch:** Wer möchte, zeigt seinen umgeschriebenen Prompt — und wir probieren ihn live mit einer KI aus.

---

### Abschluss (42–45 min)

**Zusammenfassung in drei Sätzen:**
1. Markdown ist keine Programmiersprache — es ist strukturierter Text.
2. KI versteht Markdown besonders gut, weil sie damit trainiert wurde.
3. Wer Markdown schreibt, denkt automatisch klarer — das verbessert jeden Prompt.

**Empfehlung für den Einstieg:**  
Obsidian als kostenlosen Markdown-Editor herunterladen und die nächste Unterrichtsplanung dort schreiben.

**Cheatsheet:** Alle Teilnehmenden erhalten (oder fotografieren) die folgende Übersicht:

---

## Markdown-Cheatsheet

| Element | Syntax | Ergebnis |
|---------|--------|----------|
| Überschrift 1 | `# Titel` | Großer Titel |
| Überschrift 2 | `## Abschnitt` | Abschnittstitel |
| Fett | `**Text**` | **Text** |
| Kursiv | `*Text*` | *Text* |
| Liste | `- Punkt` | Aufzählung |
| Nummerierte Liste | `1. Punkt` | 1. Punkt |
| Tabelle | `\| A \| B \|` | Tabelle |
| Zitat | `> Text` | Eingerückt |
| Codeblock | ` ``` Text ``` ` | Monospace-Block |
| Trennlinie | `---` | Horizontale Linie |

---

## Materialien & Vorbereitung

### Für den Workshopleiter
- [ ] Zwei Vergleichs-Prompts vorbereiten (Fließtext vs. Markdown)
- [ ] Obsidian oder VS Code als Demo-Umgebung einrichten
- [ ] Claude oder ChatGPT für Live-Demo geöffnet

### Für die Teilnehmenden
- [ ] Laptop mit Internetzugang
- [ ] Optional: Obsidian vorab installieren (obsidian.md — kostenlos)

---

## Weiterführende Links

- [markdownguide.org](https://www.markdownguide.org) — Ausführliche Referenz auf Englisch
- [obsidian.md](https://obsidian.md) — Markdown-Notiz-App (kostenlos)
- [dillinger.io](https://dillinger.io) — Markdown im Browser ausprobieren (kein Install nötig)
