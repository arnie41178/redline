# 03: Analysis seam + plain-English summary

**What to build:** After ingestion, the reader sees a plain-English summary of
their document. The extracted text is sent to the model through OpenRouter and
returns an `AnalysisResult`; this ticket renders its `summary` and fixes the
`AnalysisResult` shape for every later slice to populate. The standing
limitation — that Redline describes a clause's effect and does **not** judge
legal enforceability or jurisdiction — is stated openly in the UI (ADR-0004).
This is the thin first cut through the `analyze(documentText, redLines) →
AnalysisResult` seam that proves the model wiring.

**Blocked by:** 02

**Status:** ready-for-agent

- [ ] Given extracted text, the app returns an `AnalysisResult` via OpenRouter.
- [ ] The result's plain-English `summary` renders to the reader (no legalese).
- [ ] The `AnalysisResult` shape is established with `summary`, `flags[]`, and
      `gaps[]` fields for later tickets to fill.
- [ ] The UI states that Redline does not judge enforceability or jurisdiction.
- [ ] No text field asserts legal enforceability or a jurisdiction-specific
      claim (ADR-0004) — tested, target zero.
