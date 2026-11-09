# 04: Cited, ranked Flags with Walk-away

**What to build:** The reader sees the clauses that could hurt them surfaced as
Flags, most-dangerous first. Each Flag quotes the **exact source sentence** it
came from (a verbatim substring of the document), describes the clause's
**effect on the reader**, and is ranked **Critical** or **Caution** by the
worst-case rule — Critical when the downside is uncapped or irreversible,
Caution when adverse but bounded. Every Critical Flag carries a **Walk-away**
verdict ("don't sign this without changing it"). A would-be flag whose source
sentence can't be shown is suppressed, not emitted (ADR-0001). Severity is never
assigned for mere unusualness (ADR-0003).

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] Adverse clauses present in the text surface as Flags, ordered by severity.
- [ ] Each Flag shows its verbatim source sentence, found in the document.
- [ ] Each Flag describes the clause's effect on the reader, not its legality.
- [ ] Each Flag is ranked `critical` or `caution` by the worst-case rule.
- [ ] Every `critical` Flag carries a Walk-away verdict; `caution` Flags do not.
- [ ] A flag with no locatable source sentence is suppressed, not shown.
- [ ] Analysis-seam eval over labelled contracts: `flags[].sourceSentence`
      appears verbatim in the document (pass bar 100%); **zero** fabricated
      clauses in the `critical` tier; `severity` matches the labelled
      worst-case.
