# Redline

A web app: someone uploads a contract, lease, freelance agreement, or terms of
service and gets back an analysis they can trust. This version exists to prove
the analysis can be trusted — nothing else earns a place in it.

## Stack — settled, not open for reinterpretation

- Next.js, deployed on Vercel.
- Supabase for auth and database.
- The model is called through OpenRouter.
- Package manager: npm.

## Scope — build exactly these, then stop

- A plain-English summary of the document.
- The clauses that could hurt the reader, ranked by severity, each showing the
  exact source sentence it came from.
- A drafted counter-offer for each flagged clause.
- A question box that answers only from the uploaded document.
- An editable list of the reader's own red lines that drives the analysis.
- A saved library of the reader's past documents.

If something looks like the obvious next step and is not on this list, ask me
before building it.

## Excluded on purpose — do not add

Payments, billing, OCR for scanned documents, and sharing a document between
users. OCR is not just out of scope, it is harmful here: a citation is
worthless when the text it points at was misread. Ask before building anything
in this list.

## Invariants — violating one is a bug

- The uploaded file is parsed in the browser. Only the extracted text is
  stored; the file itself never leaves the browser.
- Every risk flag cites the exact sentence it came from. A flag whose source
  sentence cannot be shown is a bug, not a flag.
- State only what the document says. Where the text does not support a claim,
  the product does not make it.

## Standing rules

- Credentials live in .env.local, which is gitignored. Never commit a secret —
  a key is public the moment it is pushed and then has to be rotated.
- Ask me before adding any dependency.

## Read before you act

- research/summary.md — the user research. Read it before deciding what the
  product should do.
- PRD.md — the brief, once it exists. Read it before building.

## Agent skills

### Issue tracker

Issues and specs live as markdown files under `.scratch/<feature-slug>/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context: `GLOSSARY.md` (lazily created) + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
