# Salinieki — tautas tērpa lapas

Two A4 info sheets for Londonas TDK "Salinieki": which costume pieces each dancer needs,
and which are personal (*Personīgi*) or come from the group's inventory (*Kolektīva*).

| File | What it is |
|---|---|
| `viriesi.html` | Men's sheet (Vīriešiem) |
| `sievietes.html` | Women's sheet (Sievietēm) |
| `fonts.css`, `fonts/` | Cormorant Garamond and Great Vibes (SIL Open Font License) plus the Arkhip face |
| `assets/logo.png` | Salinieki tree logo, recoloured to the sheet red `#B82626` and navy `#042347` |
| `assets/Arkhip.ttf` | Arkhip font, used only for "Londonas TDK / Salinieki" under the logo |
| `assets/lielvardes-josta.svg` | Repeating footer tile from the Lielvārde belt (rows 1080–1413) |
| `canvas/` | The original Claude Design canvas sources (`.dc.html` + `canvas.json`) |

Everything works offline — no internet needed to open or print.

## Printing / PDF

Open `viriesi.html` or `sievietes.html` in Chrome or Edge → Print →
Destination "Save as PDF" (or a printer), Paper **A4**, Margins **None**, Scale **100 %**,
and tick **Background graphics**. Each sheet is exactly one A4 page (794 × 1123 CSS px).

The footer band runs to the page edges; most office printers cannot print to the edge,
so a few mm may be cut off unless printed borderless.

## Editing

Each sheet is a single HTML file with inline styles — edit the text directly.

- **Colours:** red `#B82626`, navy `#042347`, paper `#F8F2EA`, dotted rules `#CDB9A4`.
- **Rows:** each item is one `<tr>`; a navy dot in the 2nd cell = Personīgi, a red dot in
  the 3rd cell = Kolektīva, dots in both = either.
- **Lowercase "š":** Cormorant Garamond draws a tall, detached caron on `š`, so every
  lowercase `š` is written as a plain `s` with a small SVG caron on top
  (`<span style="position: relative; display: inline-block">s<svg …></svg></span>`).
  Copy one of the existing ones when you add a word with `š`; the italic version has
  `skewX(-12deg)` and a slightly different `left`. Capital `Š` is fine as is.
- **Ornaments:** *Saule* (navy, beside the title) and *Aka* (red, under the title and
  beside "Tiekamies dejā!") are inline SVGs drawn for these sheets.
- **Layout:** the free space is split 1/3 above and 2/3 below the table
  (`flex: 1` / `flex: 2` spacer divs).

## The `canvas/` folder

These are the source files from the Claude Design canvas. They use `{{accent}}` /
`{{paper}}` colour placeholders and `/_blob/<id>` links to the canvas uploads:

| Canvas link | File here |
|---|---|
| `/_blob/69b5415d2bcb7960ea25291cbd8270d2` | `assets/logo.png` |
| `/_blob/c37d3b80225137abae066e1dcd7ae764` | `assets/Arkhip.ttf` |
| `/_blob/7c64e54c18be300b37e211ce7a83d44d` | `assets/lielvardes-josta.svg` |

To continue in a new canvas, give Claude this folder and ask it to rebuild the canvas
from `canvas/` (re-uploading the three assets).
