# 0001. Every flag cites its source

Date: 2026-11-07
Status: Accepted

## Decision

Every risk flag Redline produces must cite the exact sentence from the
uploaded document it came from. A flag whose source sentence cannot be shown
is treated as a bug, not a formatting preference — it does not ship.

## Alternatives

- Let the model describe risks in its own words without quoting anything.
  Fluent, but unverifiable and prone to inventing clauses that aren't there.
- Cite by section or page number instead of the exact sentence. Cheaper to
  build, but it still asks the reader to go hunting and trust us on the way.
- Quote only when the model is "confident enough." Makes the guarantee
  optional, which means it isn't a guarantee.

## Why

The reader can check us. For any flag, they see the sentence it rests on and
decide for themselves whether the risk is real — without re-reading the whole
contract or taking our word for it. The citation is the trust: it turns the
analysis from an opinion into a claim anyone can falsify against the source.

## Consequences

- A flag with no locatable source sentence must be suppressed, not shown. We
  surface "nothing found" rather than an uncited risk.
- Extraction fidelity becomes load-bearing: if the parsed text drifts from the
  original, citations point at the wrong place. This must be tested directly.
- Rules out purely generative summaries of risk; every claim is anchored to
  retrievable text. Prioritizes precision over recall — a missed risk is
  cheaper than a confident one the reader cannot verify.
- Every flag needs a test that asserts its cited sentence exists verbatim in
  the uploaded document.
