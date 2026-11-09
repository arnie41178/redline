# 0003. Severity is worst-case magnitude, not unusualness

Date: 2026-11-08
Status: Accepted

## Decision

A clause's severity is defined by its **worst case**. A clause is **Critical**
when its downside is **uncapped or irreversible**, and **Caution** when it is
adverse but **bounded** — a defined, survivable cost. Both tiers are flagged.
A Critical flag carries a **Walk-away** verdict ("do not sign without changing
this"), issued case by case. Redline does **not** flag a clause for being merely
unusual.

## Alternatives

- Flag only uncapped/irreversible clauses and drop Caution. Rejected — it hides
  real but bounded harms (long payment terms, no kill fee) the reader still wants
  surfaced.
- Rank by how unusual or atypical a clause is. Rejected — "unusual compared to
  what?" asserts a market norm we have no corpus to back, and it is a claim about
  the world, not the document (strains `CLAUDE.md` invariant 3).
- Emit a continuous severity score. Rejected — a number doesn't tell a
  low-leverage freelancer what to *do*; two tiers map to two actions.

## Why

Two tiers map to two actions the reader can take. Critical means spend your one
push here or walk away; Caution means know it, and raise it if you can. The
reader can check the ranking because it is derived from the clause's own effect
on them — is the downside capped? — rather than from an opinion about how common
the clause is.

## Consequences

- The Critical tier must stay narrow and high-confidence: a false Walk-away is
  the most damaging error the product can make. It rides on ADR-0001's citation
  guarantee and a zero-fabrication bar.
- An unusual-looking clause with a bounded downside is deliberately ranked
  Caution, never Critical — a novel trap that cannot run away with your money
  will not trigger a Walk-away.
- The analysis must reason about caps and carve-outs: an indemnity carved out of
  a liability cap is uncapped, hence Critical (see `research/summary.md` §2.7).
- Gaps are not on this scale — they are a separate output (ADR-0002) — though a
  missing liability cap can make a clause that *is* present Critical.
