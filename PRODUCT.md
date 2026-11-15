# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Settled in `CLAUDE.md`, not open for reinterpretation: Next.js deployed on
Vercel, Supabase for auth and database, the model called through OpenRouter,
npm as the package manager. No code exists yet; the build is gated on a
concierge test (see Operating Context).

## Users

A freelancer who sells knowledge work — a writer, designer, or developer — who
has just been handed a contract by a larger client and has some room to
negotiate a point or two before signing. Three qualifiers are load-bearing:

- They produce intellectual property, because the flagship harm (signing away
  IP) only bites people who make it.
- They are reading the client's paper, not drafting their own, because a
  freelancer rarely gets to impose a template on a bigger counterparty.
- They have some leverage, because the product's output is advice on what to
  push back on; a take-it-or-leave-it signer can only sign or walk.

Renters, small businesses, and take-it-or-leave-it freelancers are deliberately
out of the audience (`PRD.md`). The reviewer sits at a laptop or desktop, where
the DOCX or PDF already lives: the product is designed desktop-first.

## Product Purpose

Someone uploads a contract, lease, freelance agreement, or terms of service and
gets back an analysis they can trust. This version exists to prove the analysis
can be trusted — nothing else earns a place in it. It replaces the two bad
options a freelancer has today: sign on trust and hope, or pay $390–$1,200 for a
lawyer review that costs half a week's income. Success is measured first by
trust-grade analysis quality (see `PRD.md`, "What good looks like") and gated by
a business signal: real freelancers paying real money for a manual review at the
target price before any automated build.

## Positioning

The claim a neighboring tool cannot truthfully copy: every risk flag cites the
exact sentence it came from, so the reader can falsify any finding against the
source instead of trusting the tool. Three more commitments back it:

- The uploaded file is parsed in the browser; only the extracted text is stored,
  and the file itself never leaves the machine.
- The product is jurisdiction-neutral. It describes what a clause does to the
  reader and refuses to judge whether a clause is legal or enforceable — the
  move that got DoNotPay FTC-sanctioned.
- Severity is defined by worst-case magnitude (uncapped or irreversible), not by
  how unusual a clause looks.

## Operating Context

- The reviewer uploads one document — the counterparty's contract — and works
  through the analysis in a single desktop session before replying to the
  client.
- The build is gated. `PRD.md` makes the automated build contingent on a
  concierge test: real freelancers paying for a manual review at the target
  price. The concierge stage and the automated product share one
  `AnalysisResult` contract, so the same tests grade a human review and a later
  automated one.
- Implementation is tracked as vertical-slice tickets under
  `.scratch/contract-analysis/`.

## Capabilities and Constraints

What the first version does, and nothing past it (`CLAUDE.md`, `PRD.md`):

- Accept a machine-readable document (DOCX or text-layer PDF), parsed in the
  browser. Scanned or photographed files are refused with a clear message, never
  attempted.
- Produce a plain-English summary of the document.
- Flag adverse clauses present in the text, each ranked Critical or Caution, each
  showing its exact source sentence. Critical flags carry a Walk-away verdict.
- Check the document against the reader's editable red lines and report Gaps —
  missing protections — as found, not found, or ambiguous.
- Draft a counter-offer for each Flag and each Gap. Export is copy-paste only;
  the product never sends or shares anything with the counterparty.
- Answer questions using only the uploaded document's text, refusing where the
  text does not support an answer.
- Save the reader's past documents to a personal library, storing only extracted
  text and the result.

Invariants (violating one is a bug): the file is parsed in-browser and never
leaves it; every risk flag cites its exact source sentence; the product states
only what the document says.

Excluded on purpose: OCR and scanned documents (a citation on misread text is
worse than none), enforceability or jurisdiction judgments, counter-offers for
non-negotiable documents, payments and a built billing system, and document
sharing between users.

Shared vocabulary is fixed in `CONTEXT.md` (Flag, Gap, Counter-offer, Walk-away,
Critical, Caution, Red line, Counterparty document); decisions are recorded in
`docs/adr/0001`–`0004`.

## Brand Commitments

- The product's name is **Redline**, used across every reader-facing surface.
- All copy a reader sees — landing page, UI labels, error messages, empty states
  — must be run through the humanizer skill before it is committed. Copy that
  reads as though a model wrote it is a defect, not a matter of taste
  (`CLAUDE.md`).
- Voice is plain language, not legalese. The product states only what the
  document supports and is openly honest about its limits, including that it does
  not judge enforceability and that a lawyer's job starts where its own ends.

## Evidence on Hand

- User research lives in `research/`: `summary.md` plus four agent reports
  (`agent1`–`agent4`) covering who has the pain, what goes wrong, what already
  exists, and who would pay. Real freelancer quotes and figures (over 50% of
  freelancers stiffed, average unpaid invoice $6,380; review costs $390–$1,200)
  are sourced there and in `PRD.md`.
- No direct willingness-to-pay figure exists for any segment; the concierge test
  is designed to produce that missing number. Future work must not fabricate
  pricing, testimonials, benchmarks, or customer counts.
- Reddit, likely the richest complaint source, was inaccessible during research
  (403); the evidence leans on Teamblind, Adobe forums, and a Zoho
  freelancer-interview post carrying a mild pro-contract-product slant.

## Product Principles

- Trust is the only feature. Everything ships to prove the analysis can be
  trusted; anything that doesn't earn that is out.
- Every claim is falsifiable against the source. A flag with no citable sentence
  is suppressed, not shown.
- Stay in the product's lane. Describe effect, never enforceability; state only
  what the document says.
- A false alarm costs more than a miss. Precision over recall — especially the
  Critical/Walk-away tier and negative "not found" Gap claims, both held to a
  higher bar.
- Validate before building. The automated product is earned by the concierge
  test, not assumed.

## Accessibility & Inclusion

WCAG 2.1 AA is a binding requirement for all reader-facing UI.
