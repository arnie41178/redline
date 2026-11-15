---
name: Redline
description: A proofreader's red pen for the contract you're about to sign.
colors:
  paper: "#e7e0d0"
  paper-2: "#efe9da"
  paper-3: "#f4efe2"
  edge: "#d4cab0"
  rule: "#cabd9f"
  ink: "#1a1a17"
  ink-2: "#574f3d"
  red: "#c01f1f"
  red-deep: "#8a1616"
  blue: "#1f4e79"
  blue-ink: "#193f63"
  amber: "#7a4f0c"
typography:
  display:
    fontFamily: '"Courier Prime", "Courier New", monospace'
    fontSize: "clamp(1.95rem, 3.4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: '"Spectral", Georgia, "Times New Roman", serif'
    fontSize: "clamp(1.8rem, 3vw, 2.8rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  title:
    fontFamily: '"Spectral", Georgia, "Times New Roman", serif'
    fontSize: "clamp(1.5rem, 2.4vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.1
  body:
    fontFamily: '"Spectral", Georgia, "Times New Roman", serif'
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.62
  document:
    fontFamily: '"Courier Prime", "Courier New", monospace'
    fontSize: "14.5px"
    fontWeight: 400
    lineHeight: 1.95
  label:
    fontFamily: '"Spectral SC", "Spectral", serif'
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: "0.26em"
  pen:
    fontFamily: '"Caveat", "Segoe Script", cursive'
    fontSize: "21px"
    fontWeight: 600
spacing:
  mx: "clamp(20px, 5vw, 88px)"
rounded:
  none: "0"
components:
  button-primary:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper-3}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper-3}"
  button-copy:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "9px 16px"
  button-copy-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper-3}"
  chip-tier:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.red}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  card-specimen:
    backgroundColor: "{colors.paper-3}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
---

# Design System: Redline

## Overview

**Creative North Star: "The Marked Galley Proof"**

Redline is a proofreader's red pen taken to the contract a client just handed you. The page is not a product tour or a dashboard; it is a sheet of manila proofing paper with a ruled margin, typewriter ink, and correction marks made by hand in the margin. The manila field (#e7e0d0) owns every surface — it is the page, not a background behind cards. Depth comes from lifting a sheet slightly brighter than the one beneath it, never from a slab of color dropped onto white.

The system refuses two defaults it was built against: the legaltech-SaaS look (navy gradient, floating app screenshot, "AI-powered" badge) and the cream-serif law-firm look. Everything here reads as a physical artifact being corrected. Headlines are set in typewriter mono as if struck on the same machine that typed the contract; margin flags are in a red pen hand; stamps and labels are letterpress small-caps. The one gesture that moves is the red pen itself — a circle drawn and a strike pulled across the line that costs you.

Color is load-bearing, not decorative. A red mark on this page always means a clause that can hurt you; it is never used to brighten a button or draw an idle eye. That restraint is the product's credibility expressed as a palette rule, and it is the single most important thing to preserve.

**Key Characteristics:**
- Manila proofing paper is the field; sheets lift by tone, never by shadow-on-white.
- Hard corners everywhere (0 radius); the artifact is cut and stamped, not rounded.
- Typewriter mono display headlines; serif body; letterpress small-caps labels; a red pen hand for margin marks.
- One authored motion moment: the red pen circling and striking the dangerous line.
- Semantic color is an invariant: red = danger, blue = a missing protection, amber = bounded caution.

## Colors

A warm, aged palette: manila paper and typewriter ink carry the whole page, and three correction colors (red, blue, amber) each mean exactly one thing.

### Primary
- **Proof Red** (#c01f1f): Reserved strictly for danger — Critical findings, the Walk-away verdict, and every proof mark (circle, strike, delete, stamp). Appears as the primary CTA stamp, the focus ring, the text caret, and the tint on selected text. On this page a red mark always names a clause that can hurt you.
- **Proof Red Deep** (#8a1616): The border and shadow tone under the red stamp, and the accent color on a selected Critical finding's name. The darker register of the same danger voice.

### Secondary
- **Gap Blue** (#1f4e79): A missing protection. Used for the "Gap" tier — a protection the contract leaves out (e.g. no kill fee) — on margin flags, the delete/insert mark, and the specimen band when the finding is a gap.
- **Gap Blue Ink** (#193f63): The darker blue register, used on the counter-offer label and a selected gap finding's name.

### Tertiary
- **Caution Amber** (#7a4f0c): Caution — an adverse term that is bounded, not dangerous (e.g. Net-60 payment). Used on the "Caution" tier chip and the specimen band when the finding is a caution. Warm brown-gold, deliberately not red.

### Neutral
- **Manila Paper** (#e7e0d0): The field that owns the page — body background and base surface.
- **Lifted Sheet** (#efe9da): A sheet raised one step above the field — the galley proof panel, a selected finding row.
- **Brightest Card** (#f4efe2): The top sheet — the specimen card and stamp tabs; the brightest tone in the stack.
- **Edge** (#d4cab0): Hairline borders on panels, cards, and section dividers.
- **Rule** (#cabd9f): Ruled lines — the line-number margin, dashed counter borders, dividers inside lists.
- **Typewriter Ink** (#1a1a17): Primary text, the strongest voice; also the ink-black tab and the copy-button fill on hover.
- **Warm Secondary Ink** (#574f3d): Secondary text — subheads, captions, line numbers, labels. A warm brown, never a cool gray.

### Named Rules
**The Red-Means-Danger Rule.** Red (#c01f1f / #8a1616) is reserved for danger only — Critical findings, the Walk-away verdict, and proof marks. It never decorates a surface, a hover, or a non-danger CTA's background for decoration's sake. If a red element does not mean "this can hurt you," it is wrong. Audit test: every red pixel on a screen must trace to a Critical/Walk-away finding or a proof mark.

**The Three-Signal Rule.** The three correction colors are a fixed semantic triad: red = danger, blue = a missing protection (Gap), amber = bounded caution. A finding's color is decided by its meaning, never by visual balance. Never recolor a tier to even out a layout.

**The Warm-Neutral Rule.** Secondary text is warm ink (#574f3d), never a cool gray. The page is aged paper; a gray would read as screen chrome and break the artifact.

## Typography

**Display Font:** Courier Prime (with Courier New, monospace)
**Body Font:** Spectral (with Georgia, Times New Roman, serif)
**Label Font:** Spectral SC — letterpress small-caps (with Spectral, serif)
**Margin-Mark Font:** Caveat — a red pen hand (with Segoe Script, cursive)

**Character:** Typewriter mono for anything that reads as the document or its headline; a warm literary serif for prose the reader absorbs; letterpress small-caps for the stamps and labels pressed onto the page; and a hand script reserved for the pen's margin corrections. The pairing reads as a typed document being marked up by a human hand.

### Hierarchy
- **Display** (Courier Prime 700, clamp 1.95–3.25rem, line-height 1.1, letter-spacing -0.02em): The hero hook and closing headline — typewriter ink struck large. The one word that costs you is set in Proof Red.
- **Headline** (Spectral 800, clamp 1.8–2.8rem, line-height 1.1): Section headings in the worksheet and errata — serif, heavy, tightly set.
- **Title** (Spectral 800, clamp 1.5–2rem, line-height 1.1): The specimen finding name — the clause being examined.
- **Body** (Spectral 400, 18px, line-height 1.62): Running prose; subheads drop to the warm secondary ink. Sub-copy caps at ~46ch, section copy at ~52ch.
- **Document** (Courier Prime 400, 14.5px, line-height 1.95): The galley-proof contract text, the quoted source sentence, and the paste-ready counter-offer — anything that is literally the document's words.
- **Label** (Spectral SC 500, 13px, letter-spacing 0.26em, uppercase): Stamps, tabs, tier chips, nav links, CTAs, and field keys. The letterpress voice.
- **Pen** (Caveat 600, 21px): Margin flags only — the handwritten correction note beside a flagged line, rotated a few degrees.

### Named Rules
**The Document-Voice Rule.** Courier Prime is reserved for two jobs: typewriter display headlines, and anything that is literally the document's own words (the galley text, the cited sentence, the counter-offer). Never set running prose in mono — that is Spectral's job.

**The Pen-Hand Rule.** Caveat (the red pen hand) appears only as a margin correction mark. It is never used for a heading, a label, or body copy; it is the human hand writing in the margin, and overusing it dissolves that meaning.

## Layout

A centered page with a max width of 1240px and a fluid gutter (`--mx`, clamp 20–88px). The signature structure is the ruled galley: a two-column grid of a 52px right-aligned line-number margin (counter rendered `decimal-leading-zero`, with a ruled right border) beside the document text.

The page is desktop-first and built on asymmetric two-column grids: the hero pairs the pitch against the galley proof (roughly 1.02fr / 1.08fr), the worksheet pairs a ~320px finding list against the specimen panel, and the errata pairs a lead against the list. Section rhythm is generous — sections pad 78–92px vertically and separate with a 1px edge rule. Vertical spacing is set in direct px (headline-to-sub ~26px, field gaps ~22px); there is no numeric spacing scale beyond the gutter token.

Responsive: at ≤900px every two-column grid collapses to a single column and the nav text links hide, leaving the CTA. At ≤560px body type drops to 17px, the masthead CTA hides (the hero CTA sits just below), the galley line-number column narrows to 40px, and the handwritten pen-flags hide entirely — the circle and the legend carry the meaning at phone width.

## Elevation & Depth

Hybrid, but tonal first. Depth is primarily a stack of paper tones: manila field (#e7e0d0) → lifted sheet (#efe9da) → brightest card (#f4efe2). A sheet reads as raised because it is a shade brighter than the one beneath it, not because it floats on white.

Soft, far-cast shadows then do the lifting on the two hero objects — the galley proof and the specimen card. They are warm-ink, large-blur, heavily negative-spread shadows: diffuse and low, as if a sheet rests just above the desk. There are no hard zero-blur offset shadows; this is not a neobrutalist world, so the drop shadows stay soft even though the corners are hard. Two ambient radial gradients wash warm light across the top of the page and up from the close.

### Shadow Vocabulary
- **Lifted sheet** (`box-shadow: 0 30px 60px -28px rgba(26,22,15,.55), 0 2px 0 rgba(255,255,255,.4) inset`): The galley proof panel — far, soft cast plus a faint top highlight for a sheet edge.
- **Specimen lift** (`box-shadow: 0 26px 54px -30px rgba(26,22,15,.5)`): The specimen card — the same soft, warm cast, slightly lighter.
- **Stamp press** (`box-shadow: 0 10px 24px -12px rgba(138,22,22,.75)` at rest, `0 16px 30px -12px rgba(138,22,22,.8)` on hover): The red CTA stamp — a tinted red shadow that deepens as the stamp lifts on hover.

### Named Rules
**The Tonal-Lift Rule.** Surfaces separate by paper tone first; shadow is only for the two hero objects (the galley and the specimen). Do not reach for a shadow where a brighter sheet tone will read the layer.

**The Soft-Shadow Rule.** Shadows are soft, warm, and far-cast (large blur, negative spread). No hard zero-blur offset shadows — the hard edges live in the corners and borders, not the shadows.

## Shapes

Everything is cut square — 0 radius on cards, panels, chips, buttons, stamps, and the scrollbar thumb. The form language is cut-and-stamped paper, not rounded UI. Hairline borders (1px edge, or 1.3–1.5px on chips and stamps) and dashed rules (the counter-offer box, the legend divider) define containers. The one intentional tilt is the stamp: the small-caps "proof stamp" rotates -2deg and the margin pen-flags rotate a few degrees, so the pressed and handwritten marks sit slightly off the grid like real marks on paper. Proof marks are authored SVG sharing a single pen stroke-weight (2.4), round line caps and joins — so every red mark looks drawn by one pen.

## Components

### Buttons
- **Shape:** Square cut (0 radius).
- **Primary (the proof stamp):** Proof-red fill (#c01f1f), paper-3 text, letterpress small-caps (letter-spacing 0.14em, uppercase), bordered in red-deep (1.5px), padding 13px 22px, with a tinted red lift shadow and an inline arrow SVG. This is the one place red fills a surface — because the CTA is itself a danger stamp, consistent with the Red-Means-Danger Rule.
- **Hover / Focus:** Lifts `translateY(-2px)` and the red shadow deepens; returns on `:active`. Focus-visible draws a 2.5px red outline at 3px offset.
- **Copy button (secondary):** Transparent with a 1.5px ink border and ink small-caps text; on hover it inverts to ink fill with paper-3 text. Used to copy a counter-offer.

### Chips
- **Style:** Tier chips are outline-only — transparent background, a 1.3px border in the tier's own color (`currentColor`), small-caps text, padding 4px 8px, square. The color is the signal.
- **State:** Critical = red, Caution = amber, Gap = blue. A chip's color is fixed by the finding's meaning, never chosen for balance.

### Cards / Containers
- **Corner Style:** Square (0 radius).
- **Background:** Brightest card tone (#f4efe2) for the specimen; lifted sheet (#efe9da) for the galley.
- **Shadow Strategy:** See Elevation — the "specimen lift" and "lifted sheet" soft casts.
- **Border:** 1px edge hairline (#d4cab0).
- **Internal Padding:** Roughly 22–30px; the specimen band is 14px 22px, its body 26–30px.

### Navigation (masthead)
- **Style:** Flex row, wordmark left, nav right. Links are letterpress small-caps in warm ink with a transparent bottom border; on hover the text goes to full ink and the border turns proof-red. The primary CTA stamp sits at the far right. At ≤900px the text links hide; at ≤560px the masthead CTA hides.

### Finding List (worksheet tablist)
An ARIA tablist: each finding is a full-width button in a 36px-number / name / tier-chip grid, rows divided by rule hairlines, topped with a 2px ink bar. A hover adds a faint ink wash. The selected row lifts to the lifted-sheet tone, grows a 4px left bar (red, or blue when the finding is a Gap), and recolors its name to red-deep (or blue-ink for a Gap). Selecting a finding drives the specimen panel and is deep-linkable as `#finding-<key>`.

### The Specimen Card (signature)
The product's working surface. A colored band at the top carries the tier and verdict (red for Critical, blue for Gap, amber for Caution). The body states the finding name (serif title), then three document-voice fields: the exact cited sentence (mono, in a color-keyed left-border quote block tinted to the tier), what it does to you (serif effect text), and a paste-ready counter-offer in a dashed-rule box with a copy button. This is where "every flag cites its source sentence" becomes visible.

### The Galley Proof (signature)
A lifted manila sheet with a ruled line-number margin (decimal-leading-zero counter) holding sample contract text in document mono, two letterpress tabs pinned to its top edge ("Galley proof" / "Sample contract"), authored SVG proof marks in the margin (circle, strike, delete) and handwritten pen-flags, closed by a two-item legend under a dashed divider. The dangerous line is circled in proof-red and struck; a missing protection is flagged in blue.

## Do's and Don'ts

### Do:
- **Do** keep red (#c01f1f) for danger only — Critical findings, the Walk-away verdict, and proof marks. The primary CTA is the sole red-filled surface, and only because it is itself a danger stamp.
- **Do** separate layers by paper tone first (#e7e0d0 → #efe9da → #f4efe2), reaching for a soft warm shadow only on the galley and specimen hero objects.
- **Do** set the document's own words — galley text, cited sentences, counter-offers — in Courier Prime, and running prose in Spectral.
- **Do** draw proof marks as authored SVG sharing one pen weight (stroke-width 2.4, round caps/joins), so every red mark looks made by one pen.
- **Do** cut corners square (0 radius) and define containers with hairline or dashed rules.
- **Do** honor `prefers-reduced-motion`: the circle and strike settle to their finished state with no animation.

### Don't:
- **Don't** use red to brighten a button background, a hover, a divider, or any element that does not mean "this can hurt you."
- **Don't** recolor a finding's tier (red/amber/blue) to balance a layout — the color is fixed by meaning.
- **Don't** use a cool gray for secondary text or borders; the neutrals are warm paper tones (warm secondary ink #574f3d).
- **Don't** add hard zero-blur offset shadows; shadows stay soft and far-cast even though corners are hard. This is not a neobrutalist world.
- **Don't** set running prose in Courier Prime, or use the Caveat pen hand for anything but a margin correction mark.
- **Don't** round corners or drop a colored card onto a white field — the manila paper is the page.
