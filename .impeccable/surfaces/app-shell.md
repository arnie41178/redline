---
version: 1
slug: "app-shell"
primary_target: "app/shell"
related_targets: []
---

Scope: the Redline app shell — the signed-in frame that holds a review. Visitor
mode: Operate. Status: surface brief only; NOT built this round (per the user's
instruction). The world is inherited from the landing's Marked Galley direction;
DESIGN.md (written at the landing's finish) is the source of truth for tokens.

Audience / task: a signed-in freelancer working through one uploaded contract in a
single desktop session, then replying to the client. The frame must hold, as
co-equal regions:

- **Intake** — paste or upload a document (DOCX / text-layer PDF), parsed in the
  browser; a scanned/image file is refused with a clear message, never guessed.
- **Result** — the plain-English summary; the ranked Flags (Critical / Caution)
  each quoting its exact source sentence; the Walk-away verdict on each Critical
  Flag (this is where the verdict lives, not on the landing).
- **Red lines** — the reader's own editable list, driving Gap detection reported
  as found / not found / ambiguous, kept in its own region, never mixed into Flags.
- **Question box** — answers drawn only from the document's text; refuses when the
  text doesn't support an answer.
- **Library** — past reviews, storing only extracted text and the result, never
  the original file.

Important states to design later: empty (no document yet), parsing, unsupported
file, analysis in progress, zero flags found, a Flag whose source sentence can't
be located (suppressed, not shown), an unanswerable question, an ambiguous red
line. Constraints: WCAG 2.1 AA; no enforceability/jurisdiction claims in any field;
counter-offer export is copy-paste only (no send-to-counterparty); only extracted
text is persisted.

## Direction contract

THESIS: The app is the real redline, not a picture of one: the uploaded contract
is the galley, and every Flag is a margin mark keyed to the exact line it came
from. It refuses the generic SaaS dashboard (cards of KPIs, a left nav of
features); the document is the center of the screen, the apparatus lives in the
margin. Operate restraint governs — scanability and native form controls win;
the world shows in precise details, not costume.

OWN-WORLD: Inherited from the landing. Manila proofing ground for the document
surface, a readable workhorse UI face for dense interactive text and controls
(not the typewriter face at body sizes), letterpress small-caps (Spectral SC) for
section labels and stamps. One proof-red reserved strictly for Critical / Walk-away,
one proof-blue for a Gap; red never used for anything but danger. The margin
change-bar and the line-keyed mark are the signature carried from the landing.

STORY: The reader drops in the contract, reads the summary, scans the ranked
margin flags worst-first, checks each against the quoted line, sees which of their
red lines are missing, asks a question or two, and leaves with counter-offer text
to paste — trusting the output because every claim points at a sentence they can
check.

FIRST VIEWPORT (when built): the document galley center-stage with the summary
above it and the ranked Flag margin keyed to the text; red lines and the question
box as adjacent apparatus; the library one step back. Primary task on open: see
the ranked dangers against the source text without scrolling for them.

FORM: Marked galley proof applied to an Operate surface. SEED REFERENCE
seed:9c0aea9144f66ff7 (shared world with the landing).

FINISH: not built this round; this brief records the inherited direction so a
later build starts from it rather than reinventing the world.
