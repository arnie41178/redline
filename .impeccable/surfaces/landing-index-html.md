---
version: 1
slug: "landing-index-html"
primary_target: "landing/index.html"
related_targets: []
---

Scope: the Redline landing page (public, no sign-in). Visitor mode: Persuade.

Audience / job / action: a freelance knowledge worker handed a larger client's
contract, with room to push back, trying to tell which clauses will hurt them
before they sign. The one action is "try it on a document" — the in-browser
parse demo, no sign-in. Proof/content: a real contract turning into ranked,
cited flags. Constraints: real product name "Redline"; no invented prices,
customers, or quotes; no verdict-on-whether-to-sign *claim* on the landing (the
Walk-away verdict lives in the app); no legal-advice or enforceability claims; no
scanned/photographed documents; nothing outside the document types PRD.md serves.
WCAG 2.1 AA.

Memorable moment: the red pen marking up the contract — the dangerous line struck
and flagged in front of the visitor, the exact source sentence revealed in the
margin.

Unresolved: this landing is built as a self-contained static page (no new
dependencies, per CLAUDE.md); porting it into the Next.js app is a later step.
PRD.md gates the automated product on a concierge test — the landing serves that
validation, it does not jump the gate.

## Direction contract

THESIS: Redline is a proofreader's red pen for the contract you're about to sign —
it marks up *their* paper and shows you the exact line that costs you. It refuses
the legaltech-SaaS default (navy gradient, floating dashboard screenshot, "AI-
powered contract review") and the cream-serif law-firm look; this is a marked
galley proof, not a product tour.

OWN-WORLD: A galley-proof surface — manila proofing paper (#e7e0d0) as the field
that owns the page, heavy typewriter ink (#1a1a17, Courier Prime). One proof-red
(#c01f1f) reserved strictly for danger (Critical / Walk-away); one proof-blue
(#1f4e79) for a missing protection (Gap). Margin correction marks and circled
flags set in a red pen hand (Caveat); stamps and labels in letterpress small-caps
(Spectral SC). Red never decorates — a red mark always means a clause that can
hurt you. Recognizable with all content removed: manila column, ruled margin,
red marks keyed to lines.

STORY: The visitor understands in one line that Redline marks up the contract and
names the dangerous clause; believes it because the exact source sentence is shown
and the tool states plainly what it won't do (no legal/enforceability claims);
and acts by dropping in their own document, parsed in the browser.

FIRST VIEWPORT: Masthead — "Redline" wordmark left, a single primary action
("Mark up my contract") top-right with the privacy line beneath it. Left column:
the hook in typewriter display with a red strike + blue insert on the key line.
Right column: a galley-proof of a real contract, proof marks in the ruled margin,
the worst line circled in proof-red with a CRITICAL flag naming it. A two-item
legend (red = a clause that can hurt you; blue = a protection that's missing)
anchors the fold. Primary action sits top-right and repeats at the close.

FORM: Proofreader's marked galley proof — candidate 1 of the grounded list (the
IMPECCABLE'S PICK card the user locked over the assigned field-guide). SEED
REFERENCE seed:9c0aea9144f66ff7.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
