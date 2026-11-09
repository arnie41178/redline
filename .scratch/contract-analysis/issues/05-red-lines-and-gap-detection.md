# 05: Editable red lines + Gap detection

**What to build:** The reader keeps an editable list of their own **red lines** —
protections they require, e.g. "there must be a late-payment penalty." Redline
checks the **already-uploaded** document against each red line and reports it as
**found**, **not found**, or **ambiguous**. These Gaps render in their own
section, kept **separate** from Flags, because an absent clause has no sentence
to cite and so is a distinct output (ADR-0002). No second document upload is
involved — red lines are a short list, not a file. A negative claim ("not
found") must account for synonyms, oblique phrasing, and exhibits before it is
raised.

**Blocked by:** 03

**Status:** ready-for-agent

- [ ] The reader can add, edit, and remove their own red lines.
- [ ] Each red line is checked against the uploaded document and reported as
      `found`, `not_found`, or `ambiguous`.
- [ ] Gaps render in their own section, never mixed into the cited Flags.
- [ ] `ambiguous` is surfaced as its own verdict, never silently resolved.
- [ ] Gaps are not held to the citation rule (ADR-0002); they cite nothing.
- [ ] Gap-accuracy eval in both directions over labelled contracts: a Gap is
      raised when the protection is genuinely absent, and **not** raised when it
      is present but worded obliquely (definitions, exhibits).
