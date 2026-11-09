# 07: Grounded QA question box

**What to build:** The reader can ask free-text questions about their uploaded
document and get answers drawn **only** from the document's text. When the text
does not support an answer, Redline refuses rather than fabricating a generic or
made-up legal claim — silence is honest. This is the `answer(question,
documentText) → Answer | Unsupported` seam, independent of the analysis path; it
needs only the extracted text from ingestion.

**Blocked by:** 02

**Status:** ready-for-agent

- [ ] The reader can type a free-text question about their document.
- [ ] An answerable question returns an answer grounded in the document's text.
- [ ] A question the text does not support returns a refusal, not a fabricated
      answer.
- [ ] Grounded-QA-seam tests: an answerable question yields a grounded answer;
      an unsupported question yields a refusal.
