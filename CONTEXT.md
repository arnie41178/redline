# Redline — Shared Vocabulary

The words below have fixed meanings across the product, the brief (`PRD.md`), and
the decision log (`docs/adr/`). The point is that a future session — human or
model — uses the same word for the same thing, and doesn't quietly reinvent one.
Definitions only; no implementation detail.

---

## Outputs

**Flag** — an adverse clause that is **present in the document text**, surfaced
with the **exact source sentence** it came from. Every Flag cites its source; a
would-be flag whose source sentence cannot be shown is a bug, not a Flag.
(Pinned by [ADR-0001](docs/adr/0001-every-flag-cites-its-source.md).)

**Gap** — a protection the reader expected that is **absent from the document**.
A Gap has no source sentence to cite, so it is a distinct output from a Flag,
driven by the reader's red lines and reported as *found*, *not found*, or
*ambiguous*. (Pinned by [ADR-0002](docs/adr/0002-gaps-are-a-distinct-output-from-cited-flags.md).)

**Counter-offer** — drafted replacement language for a Flag or a Gap: wording the
reader could paste into a reply to the counterparty.

**Walk-away** — the verdict attached to a **Critical** Flag: a direct "do not sign
this without changing it," issued case by case rather than as a blanket score.

## Severity

A clause's severity is defined by its **worst case**, not by how unusual it looks.

**Critical** — the clause's downside is **uncapped or irreversible**. Critical
Flags carry a Walk-away verdict.

**Caution** — the clause is **adverse but bounded**: a defined, survivable cost.
Flagged at lower priority, with no Walk-away.

Redline does **not** rank a clause on being merely *unusual*: "unusual compared to
what?" asserts a market norm the product has no corpus to stand behind.

## Inputs

**Red line** — a protection the reader requires (e.g. "there must be a
late-payment penalty"). The reader's red lines drive Gap detection: Redline checks
the document against each one.

**Counterparty document** — the contract the reader is reviewing, drafted by the
larger party they are contracting with. Redline reviews *this*; it does not draft
the reader's own template.
