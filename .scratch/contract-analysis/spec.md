# Spec: Contract Analysis (Redline v1)

Status: ready-for-agent
Feature: contract-analysis
Date: 2026-11-08
Vocabulary: `CONTEXT.md` · Decisions: `docs/adr/0001`–`0004` · Brief: `PRD.md`

---

## Problem Statement

I'm a freelancer — a writer, designer, or developer — and a larger client just
handed me their contract to sign. I can't tell which clauses will hurt me, and I
can't tell what protections I *should* have that aren't in there. A lawyer review
costs $390–$1,200, which is half a week's income, so I usually just sign on trust.
Then I get burned — by a buried clause or a missing one — and I only find out when
my money or my work is already at stake. I also don't want to hand my private
contract to a tool that might store it or train on it.

## Solution

I upload the contract and get back, in plain English and without the file ever
leaving my browser:

- a summary of what the document says;
- a ranked list of the clauses that could hurt me, each quoting the **exact
  sentence** it came from, with the worst ones marked **"don't sign this without
  changing it"**;
- a list of the protections I told it I wanted that **aren't in the document**;
- drafted **counter-offer** language for each problem, so I can push back without a
  lawyer;
- a way to **ask questions** that are answered only from my document.

It tells me what each clause *does to me*, and is upfront that it does not tell me
whether a clause would hold up in court — that's still a lawyer's job.

## User Stories

1. As a freelancer, I want to upload a DOCX contract, so that I can have it reviewed without emailing it to anyone.
2. As a freelancer, I want to upload a text-layer PDF, so that the common contract format works.
3. As a privacy-conscious freelancer, I want my file parsed in the browser and never uploaded, so that the document itself never leaves my machine.
4. As a freelancer who was sent a scanned contract, I want a clear message that scanned/image files aren't supported, so that I'm not given a silent or wrong answer on text that may have been misread.
5. As a freelancer, I want a plain-English summary of the document, so that I understand the overall deal before reading clause by clause.
6. As a freelancer, I want the clauses that could hurt me surfaced as Flags, so that I don't have to spot them myself in a long document.
7. As a freelancer, I want each Flag to quote the exact sentence it came from, so that I can verify the finding against my own document.
8. As a freelancer, I want Flags ranked Critical vs Caution, so that I know which ones actually matter.
9. As a freelancer, I want a Critical Flag to carry a Walk-away verdict, so that I'm told plainly not to sign without changing it.
10. As a freelancer, I want "Critical" to mean the downside is uncapped or irreversible, so that the ranking reflects real exposure, not how unusual a clause looks.
11. As a freelancer, I want a broad IP-assignment clause flagged when it reaches beyond the deliverable, so that I don't sign away my pre-existing tools or portfolio.
12. As a freelancer, I want indemnification that is carved out of the liability cap flagged as Critical, so that I notice unbounded exposure.
13. As a freelancer, I want a non-compete that forecloses my field flagged, so that I understand it could cut off my income.
14. As a freelancer, I want bounded-but-adverse terms (long payment windows, unilateral termination without a kill fee) flagged as Caution, so that I'm aware of them without them crowding out the Critical ones.
15. As a freelancer, I want to enter my own red lines (e.g. "must have a late-payment penalty"), so that the review checks the document against what I care about.
16. As a freelancer, I want red lines reported as found, not found, or ambiguous, so that I know which protections are present, missing, or unclear.
17. As a freelancer, I want a missing late-payment penalty reported as a Gap, so that I catch the single most common freelancer trap.
18. As a freelancer, I want a missing revision/scope cap reported as a Gap, so that I avoid unlimited-revision exploitation.
19. As a freelancer, I want Gaps kept separate from Flags, so that "what's missing" isn't confused with "what's dangerously present."
20. As a freelancer, I want a Gap to *not* be raised when the protection is actually present but worded obliquely, so that I'm not given false alarms.
21. As a freelancer, I want a drafted counter-offer for each Flag, so that I can reply with specific language instead of inventing it.
22. As a freelancer, I want a drafted counter-offer for each Gap, so that I can propose the missing protection.
23. As a freelancer, I want to ask free-text questions about my document, so that I can clarify things the summary didn't cover.
24. As a freelancer, I want questions answered only from my document's text, so that I'm not given generic or made-up legal claims.
25. As a freelancer, I want the tool to refuse to answer when my document doesn't support an answer, so that silence is honest rather than fabricated.
26. As a freelancer, I want the tool to state that it does not judge legal enforceability or jurisdiction, so that I know when I still need a lawyer.
27. As a freelancer, I want no finding to claim a clause is "unenforceable in my state," so that I'm not misled by a judgment the tool can't actually make.
28. As a returning freelancer, I want my past reviewed documents saved to a library, so that I can refer back to them.
29. As a returning freelancer, I want only the extracted text stored in my library, not the original file, so that the privacy promise holds over time.
30. As a freelancer reviewing a long contract, I want Flags ordered by severity, so that I read the most dangerous ones first.
31. As a freelancer with limited negotiating room, I want to know the single most important clause to push on, so that I spend my one ask well.
32. As a freelancer, I want the summary and findings in plain language, not legalese, so that I can act without a translator.

## Implementation Decisions

**Modules / seams** (greenfield — these are the first seams; keep them few and high):

- **Analysis engine** — the primary seam: `analyze(documentText, redLines) → AnalysisResult`. All clause reasoning lives behind this one boundary.
- **Ingestion** — `extractText(file) → { text } | Unsupported`. Parses DOCX / text-layer PDF in the browser; returns an `Unsupported` result for scanned/image files rather than attempting them.
- **Grounded QA** — `answer(question, documentText) → Answer | Unsupported`. Answers strictly from supplied text; returns `Unsupported` when the text doesn't support an answer.
- **Document library** — persists and retrieves prior reviews; stores extracted text and the `AnalysisResult`, never the original file.

**`AnalysisResult` contract** (shape, not code):

- `summary`: plain-English overview.
- `flags[]`: each with the quoted **source sentence** (verbatim substring of `documentText`), a short description of the clause's **effect on the reader**, a `severity` of `critical | caution`, a `walkAway` boolean (true only when `critical`), and a `counterOffer` (drafted replacement language).
- `gaps[]`: each tied to a red line, with a `status` of `found | not_found | ambiguous` and, when `not_found`, a `counterOffer` proposing the protection.
- No field asserts legal enforceability or jurisdiction.

**Constraints inherited from decisions:**

- Every Flag cites a verbatim source sentence; a would-be flag without one is suppressed, not emitted (ADR-0001).
- Gaps are a distinct output from Flags and are not held to the citation rule, because an absent clause has no sentence to cite (ADR-0002).
- Severity is worst-case: uncapped/irreversible → `critical` + Walk-away; adverse-but-bounded → `caution`. Unusualness alone never earns a Flag (ADR-0003).
- Findings describe effect, never enforceability; the limitation is stated in the UI (ADR-0004).
- Only extracted text is persisted; the file never leaves the browser (`CLAUDE.md` invariant).

**Stack** (from `CLAUDE.md`, settled): Next.js on Vercel; Supabase for auth and for storing extracted text + results; the model called through OpenRouter; npm.

## Testing Decisions

- **Test external behavior only**, at the seams — never the analyzer's internals. A test asserts properties of an `AnalysisResult` given an input, not how it was produced, so the same tests grade a concierge (human) review and a later automated one.
- **Analysis seam** (the bulk of the tests), over a set of labelled real contracts with known clauses and known missing protections:
  - every `flags[].sourceSentence` appears **verbatim** in `documentText` (ADR-0001) — pass bar 100%;
  - **zero fabricated clauses** in the `critical` tier (no Flag whose clause isn't in the text);
  - `severity` matches the worst-case rule on labelled clauses (ADR-0003);
  - **Gap accuracy both directions**: raised when the protection is absent, *not* raised when it's present-but-oblique (ADR-0002);
  - **no enforceability/jurisdiction claims** in any text field (ADR-0004) — target zero.
- **Ingestion seam**: a text-layer PDF/DOCX yields text; a scanned/image file yields `Unsupported` (never a best-effort guess).
- **Grounded-QA seam**: an answerable question yields an answer grounded in the text; an unsupported question yields a refusal, not a fabricated answer.
- **Library seam**: a stored review round-trips; assert the **original file is never persisted** — only extracted text and the result.
- **Prior art**: none — this is greenfield. This spec establishes the fixture-driven, behavior-at-the-seam pattern. The eval suite described in `PRD.md` ("what good looks like") is the concrete realization of the analysis-seam tests above.

## Out of Scope

- OCR and scanned/image documents — refused, not attempted (a citation on misread text is worthless).
- Any judgment of legal enforceability or jurisdiction-specific validity (ADR-0004).
- Counter-offers for, or review of, non-negotiable documents (consumer ToS, auto-renewal subscriptions) — the counter-offer has no target there.
- Subscription pricing and a built billing system; collection during the concierge stage is manual or a hosted checkout (`PRD.md`).
- Document sharing between users (`CLAUDE.md`).
- Renter/tenant-specific features — deprioritized in `PRD.md`.

## Further Notes

- **Build is gated.** `PRD.md` makes the automated build contingent on a concierge test (real freelancers paying for a manual review at the target price). This spec is what to build **once that gate passes**; it is not a license to start before it.
- The concierge stage and the automated product share the `AnalysisResult` contract, which is why the tests above are written against that seam rather than against any implementation.
- Pricing is per-contract — a go-to-market decision, not a build seam; it does not appear in the contract above.
