# 02: In-browser ingestion

**What to build:** A reader uploads a DOCX or text-layer PDF and sees the
extracted text on screen. The file is parsed entirely in the browser and never
leaves the machine — only the extracted text exists in the app. A scanned or
image-only file is refused with a clear message, never a best-effort guess,
because a citation drawn from misread text is worse than none (`CLAUDE.md`,
ADR-0001). This is the `extractText(file) → { text } | Unsupported` seam.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] Uploading a DOCX yields its text, displayed to the reader.
- [ ] Uploading a text-layer PDF yields its text, displayed to the reader.
- [ ] Parsing happens in the browser; the original file is never uploaded to a
      server or persisted anywhere.
- [ ] A scanned/image-only file (no usable text layer) returns an `Unsupported`
      result with a clear message, not a partial or guessed extraction.
- [ ] Ingestion-seam tests: a text-layer DOCX/PDF yields text; a scanned/image
      file yields `Unsupported`.
