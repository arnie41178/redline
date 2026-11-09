# 0004. Jurisdiction-neutral: describe effect, never enforceability

Date: 2026-11-08
Status: Accepted

## Decision

Redline describes a clause by its **effect on the reader** and does **not** judge
whether a clause is legal or enforceable in any jurisdiction. It states this
limitation openly in the product rather than leaving it implied.

## Alternatives

- Assert enforceability by jurisdiction ("void in California"). Rejected — it
  requires a legal corpus across jurisdictions we do not have, and it is the exact
  move that got DoNotPay FTC-sanctioned in January 2025 (`research/agent3-what-exists.md`).
- Infer the governing jurisdiction from the document and tailor the analysis.
  Rejected — brittle, and applying the wrong jurisdiction is a known failure mode
  of ad-hoc ChatGPT review (`research/summary.md` §3).
- Make the judgment silently narrow without saying so. Rejected — silence implies
  the omission is itself a considered judgment. Say the boundary out loud.

## Why

A statement about a clause's **effect** — "this exposes you to uncapped costs" —
is derivable from the text itself and is true regardless of where the reader
lives; the reader can check it against the quoted sentence. An **enforceability**
claim is neither grounded in the document nor checkable by the reader. Saying
plainly that Redline does not judge enforceability tells the reader exactly when
they still need a lawyer, instead of letting a confident tool stand in for one.

## Consequences

- The severity model (ADR-0003) must work from effect alone; it cannot lean on
  "this clause is unenforceable anyway."
- Redline is weaker for renters and tenants, whose signature harm — bearing
  clauses that are legally unenforceable because they didn't know (the 8×
  finding, `research/summary.md` §7) — depends on exactly the enforceability
  judgment this ADR refuses. Consistent with deprioritizing renters in the brief.
- A reader who needs "will this hold up in court?" is directed to a lawyer; the
  product must make that boundary visible rather than bluff past it.
- Keeps Redline clear of the unauthorized-practice-of-law framing that sank
  DoNotPay.
