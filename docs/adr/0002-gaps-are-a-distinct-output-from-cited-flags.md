# 0002. Gap findings are a distinct output from cited risk flags

Date: 2026-11-08
Status: Accepted

## Decision

A "gap" — a protective clause the reader expected but the document lacks (e.g. no
late-payment penalty, no revision cap) — is a distinct output type from a risk
flag. Gaps are driven by the reader's editable red lines: Redline checks each red
line against the document and reports it as **found**, **not found**, or
**ambiguous**. Gap findings are *not* subject to ADR-0001's rule that every flag
cite an exact source sentence, because an absent clause has no sentence to cite.

## Alternatives

- Force gaps through ADR-0001's citation rule. Impossible — nothing to cite — so
  it would mean no gap detection at all, dropping half the freelancer pain.
- Emit a gap as a risk flag with an empty citation. Violates ADR-0001: a flag
  whose source cannot be shown is a bug.
- Have Redline assert a universal standard of what a "good" contract must contain
  and flag deviations. Opinionated, drifts toward legal advice, hard to defend.
  Rejected in favor of expectations the reader supplies.

## Why

The reader can still verify us. Because the expectation comes from the reader's
own red line, not from us, a gap finding is a check against something they
defined — "I required a late-payment penalty; is one present?" They confirm the
answer by searching the document themselves. The claim is falsifiable even though
it is negative, because it is scoped to a specific, reader-stated expectation.

## Consequences

- Gaps render in their own section (e.g. "unmet red lines"), never mixed into
  cited risk flags — so ADR-0001's citation guarantee stays intact for the thing
  it governs.
- Negative claims carry a higher confidence bar. Before reporting "not found,"
  the analysis must account for synonyms, oblique phrasing, and exhibits; a false
  "missing" is more harmful than a missed risk — the same reasoning that excluded
  OCR.
- "Ambiguous" must be surfaced as its own verdict, never silently resolved to
  found or not-found.
- Depends on the editable-red-lines feature: gap detection is meaningless without
  a red-line list to check against.
