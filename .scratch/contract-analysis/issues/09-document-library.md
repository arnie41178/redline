# 09: Document library

**What to build:** A signed-in reader's past reviews are saved to a personal
library and can be reopened later. The library stores only the **extracted text**
and the `AnalysisResult` — **never the original file** — so the privacy promise
holds over time (`CLAUDE.md` invariant). The persisted result uses the fixed
`AnalysisResult` shape, so whatever fields are populated at the time (flags, and
later gaps and counter-offers) round-trip without a schema change.

**Blocked by:** 04, 08

**Status:** ready-for-agent

- [ ] A signed-in reader's completed review is saved to their library.
- [ ] The reader can list past reviews and reopen one, seeing its stored result.
- [ ] Only extracted text and the `AnalysisResult` are persisted; the original
      file is never stored.
- [ ] The library is scoped to the signed-in reader; no cross-user access.
- [ ] Library-seam test: a stored review round-trips, and the test asserts the
      original file is never persisted.
