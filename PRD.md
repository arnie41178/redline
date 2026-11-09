# Redline — Product Brief (v1)

**Date:** 2026-11-08
**Status:** Pre-build. The decisions here are settled; the business bet is not yet validated (see "The call that gates everything").
**Grounding:** `research/summary.md` and the four research agents. Decisions recorded in `docs/adr/`. Terms defined in `CONTEXT.md`.

---

## Who this is for, specifically

A **freelancer who sells knowledge work** — a writer, designer, or developer — who has just been handed a contract by a **larger client** and has **some room to negotiate** a point or two before signing.

Three qualifiers, each load-bearing:

- **Knowledge worker**, because the flagship harm (signing away intellectual property) only bites people who produce IP.
- **Handed the client's paper**, because a freelancer rarely gets to impose their own template on a bigger counterparty. The job is to read *their* document, not draft a better one.
- **Some leverage**, because the product's output is advice on what to push back on. A freelancer facing pure take-it-or-leave-it terms can only sign or walk, and for them this is worth little.

### What they do today instead

- **Sign on trust and hope.** The most common path, and the one the research shows ending badly: *"Payment issues crept in some months after, and because there was no legal agreement in place, things didn't go well."* (Zoho Sign freelancer interviews, https://blog.zoho.com/index.php/sign/blog/why-you-need-to-have-a-freelance-contract-agreement.html)
- **Pay a lawyer — if they can.** A flat-fee review runs **$390–$1,200**; at the $28/hr median freelance rate a $490 review is ~17 billable hours, nearly half a week's income. BeforeYouSign states it plainly: *"The traditional contract review model is priced out of their reach."* (https://beforeyou-sign.com/blog/true-cost-not-reviewing-contract)
- **Paste it into ChatGPT.** Which fabricates legal authority, applies the wrong jurisdiction, and on consumer plans may train on the uploaded document (`research/agent3-what-exists.md`).

Redline exists for the gap between "sign blind" and "pay $500."

---

## The problem

A freelancer's contract harm is usually **one sentence they didn't weigh**, or **one protection that isn't there** — discovered only after the work is done and the money is at stake. They sign anyway because the document is long and the client seems fine.

The sharpest version is an **absence**, not a hidden trap:

> "I had a client who was severely late on payment multiple times. I didn't have a clause on late payment in my contract and I wish I did so I could enforce some type of late fee."
> — Zoho Sign freelancer interviews, https://blog.zoho.com/index.php/sign/blog/why-you-need-to-have-a-freelance-contract-agreement.html

The money behind this is real but blunt: **over 50% of freelancers have been stiffed, average unpaid invoice $6,380** (Freelancers Union survey, via https://beforeyou-sign.com/blog/true-cost-not-reviewing-contract). One caveat the brief must carry honestly: that $6,380 is *unpaid-invoice* loss. A better contract gives leverage; it does not collect the money. **Reviewing a contract is not the same as recovering a debt**, and nothing in the research shows how much of that loss a review would have prevented.

---

## What the first version does

Exactly these, and nothing past them:

1. **Accept a machine-readable document** — DOCX or text-layer PDF — parsed in the browser so the file never leaves the reader's machine; only the extracted text is stored. **Refuse scanned or photographed files** with a clear message rather than attempt them.
2. **Produce a plain-English summary** of the document.
3. **Flag adverse clauses that are present in the text**, each ranked **Critical** or **Caution**, and each showing the **exact source sentence** it came from.
4. **Issue a Walk-away verdict on each Critical flag** — a direct "don't sign this without changing it," case by case.
5. **Check the document against the reader's editable red lines** and report **Gaps** — protections that are missing — as *found*, *not found*, or *ambiguous*.
6. **Draft a counter-offer** for each Flag and each Gap: language the reader could paste into a reply.
7. **Answer questions using only the uploaded document's text**, and refuse to answer where the text does not support an answer.
8. **Save the reader's past documents** to a personal library.

Across all of it, Redline describes a clause by **what it does to the reader**, and states openly that it does **not** judge whether a clause is legal or enforceable where the reader lives — that is a lawyer's job.

---

## What good looks like

How someone could check, later, whether the analysis is any good. Where a number is a target rather than a research-derived figure, it says so.

- **Every flag is traceable.** For any Flag, the quoted source sentence appears **verbatim** in the uploaded document. This is testable by sampling flags and string-matching the quote against the text; the pass bar is **100%**, because a flag whose source cannot be shown is defined as a bug, not a flag (ADR-0001).
- **It never invents a clause.** On a labelled set of real contracts, Redline does not state that a clause is present when it is not. Target for the **Critical/Walk-away** tier specifically: **zero** fabricated clauses — a false "don't sign this" is the most expensive error the product can make and the fastest way to lose trust.
- **Absence claims are held to a higher bar.** For a document where a protection is genuinely missing, the Gap is reported; for one where the protection *is* present — even phrased obliquely, in a definitions section or an exhibit — the Gap is **not** falsely raised. Test both directions on a labelled set. (Proposed targets to be set after the first labelled batch; the research gives no baseline.)
- **It stays in its lane on law.** No output asserts enforceability by jurisdiction ("void in California," etc.). Testable by scanning outputs for enforceability claims; target **zero**.
- **The advice is actionable.** For each Flag, a freelancer can act on the counter-offer without a lawyer — judged qualitatively in the concierge stage by whether testers actually sent the suggested language.
- **The business signal (the real "good").** Before any automated build: of ~15 freelancers offered a **manual** review at the target per-contract price, a pre-committed share **pay real money** for it. The exact threshold is a decision to make before the test; the point is that it is set *in advance* and can fail.

---

## My red lines: which clauses I flag, how severely, and why

Severity is defined by the **worst case**, not by how unusual the clause looks: a clause is **Critical** when its downside is **uncapped or irreversible**, and **Caution** when it is adverse but **bounded** — a defined, survivable cost. An odd-but-bounded clause is noise; a normal-looking clause with an unbounded tail is the threat. Redline deliberately does **not** flag clauses merely for being unusual, because "unusual compared to what?" asserts a market norm the product has no corpus to back.

### Critical — carries a Walk-away verdict

- **Broad IP assignment reaching beyond the deliverable.** Transfers ownership of the reader's intellectual property so widely it sweeps in pre-existing tools, templates, or portfolio — work made before this client existed. Critical because it is **irreversible**: you cannot un-assign it. One practitioner case cost **$15K** in legal fees (`research/summary.md` §2.5). This is the flagship.
- **Indemnification carved out of the liability cap.** Dangerous precisely *because* it is uncapped — the reader's exposure has no ceiling (`research/summary.md` §2.7).
- **No liability cap / unlimited liability.** Same reason: an unbounded tail.
- **Broad non-compete that forecloses the reader's field.** When it blocks the freelancer from working in their trade, it removes income, not just one client. FTC enforcement is active here even after the blocked 2024 blanket ban (`research/summary.md` §2.6). Judged by effect, not by whether it would hold up in a given state.
- **Personal guarantee.** Pierces to personal assets — uncapped personal exposure.

### Caution — flagged, lower priority, no Walk-away

- **Unilateral termination without a kill fee.** The client can end the engagement and owe nothing for work in progress. Adverse, but the loss is bounded to the unpaid work.
- **Payment terms that shift risk but are bounded** — long net terms, late payment with no enforcement hook.
- **Unilateral amendment.** The client can change terms, but the reader can exit.

### Gaps — absent protections, driven by the reader's red lines

Reported separately from Flags, because there is no sentence to cite (ADR-0002):

- **No late-payment penalty** — the single most-surveyed freelancer pain (quoted above).
- **No kill fee / termination compensation.**
- **No revision or scope cap** — the hole behind *"six rounds of edits over two weeks on a single 1,000 word article"* (Zoho Sign interviews, same source as above).
- **No carve-out protecting pre-existing IP** — the defensive mirror of the flagship Critical flag.

---

## The calls I made and what I gave up

Each: the choice, what it was chosen *against*, and who is worse off for it.

1. **Freelancers, not renters or small businesses.** Chosen against renters (universal, high-stakes, but once-a-year) and SMBs (higher willingness to pay, ~$50–200/mo). *Worse off:* renters — a real, widespread pain served by no one — and the business, which walks past the higher-paying SMB budget.
2. **Negotiable documents only.** Chosen against the consumer clicking "agree" on Adobe or Amazon terms — the **single strongest-evidenced pain in the entire corpus** (auto-renewal, §1A/§2.1). *Worse off:* that consumer, who gets nothing, because you cannot counter-offer Amazon and the counter-offer is the point.
3. **Freelancers with some leverage.** Chosen against the take-it-or-leave-it freelancer. *Worse off:* the more numerous bottom of the market, for whom "don't sign clause 7" is useless advice when they can't change clause 7.
4. **Danger means unbounded, not unusual; two tiers.** Chosen against "flag everything odd." *Worse off:* a reader harmed by a genuinely novel trap whose downside happens to be bounded — Redline shows it as Caution, not Critical, and they may skim past it.
5. **IP assignment is the flagship; both Flag and Gap still ship.** Chosen against leading with the payment Gap — the most *common* pain. *Worse off:* nobody on scope (gaps still ship), but the most-mentioned pain gets the quieter treatment, not the hero moment, which is a bet on demo legibility over frequency.
6. **Redline makes the Walk-away call itself.** Chosen against staying a neutral summarizer. *Worse off:* anyone misled by a **false** Walk-away — which is why the Critical tier must stay narrow and is held to a zero-fabrication bar.
7. **Per-contract pricing.** Chosen against a subscription. *Worse off:* the business, which gives up recurring revenue and the SaaS multiple; and the heavy user who'd prefer a flat monthly rate.
8. **Jurisdiction-neutral.** Chosen against telling people what's enforceable. *Worse off:* renters again (their "8× more likely to eat an *unenforceable* clause" value depends on exactly the claim Redline refuses to make), and any freelancer who wanted "will this hold up in court?" and gets "ask a lawyer."
9. **Machine-readable documents only.** Chosen against handling scans and phone photos. *Worse off:* every freelancer whose contract arrives as an image — turned away at the door — in exchange for never citing a sentence that was misread.

### The call that gates everything

**Validate before building.** Chosen against building first and testing in market. The research's most sobering page: there is **no** direct willingness-to-pay data for any segment, and two funded incumbents (LawGeex, Robin AI) could not sustain standalone businesses even selling to lawyers with far bigger budgets (`research/summary.md` §5.4). So the automated build is gated on a concierge test — real freelancers paying real money for a manual review at the target price. *Worse off:* the timeline, and us, if a small sample misreads the market in either direction.

---

## What we are not building, and why

- **No OCR; no scanned or image documents.** A citation drawn from misread text is worse than no citation — it is confident and wrong. Excluding OCR protects the one guarantee the product rests on (ADR-0001).
- **No enforceability or jurisdiction judgments.** We lack the legal corpus to do it honestly, and claiming otherwise is the exact move that got DoNotPay FTC-sanctioned in January 2025 (`research/agent3-what-exists.md`).
- **No counter-offers for non-negotiable terms.** A counter-offer against a consumer ToS is worthless; those documents are out of scope.
- **No subscription, and no built billing system, in v1.** Pricing is per-contract, but collection during the concierge stage is manual or a hosted checkout — v1 does not build billing infrastructure, consistent with the exclusion in `CLAUDE.md`. *(One alignment note: `CLAUDE.md` lists "payments, billing" as excluded; the per-contract model needs collection but not a billing* system*. Keep these two consistent as the product grows.)*
- **No document sharing between users.** Out of scope per `CLAUDE.md`; nothing in the research asks for it.

---

## What the research could not tell us

- **No direct willingness-to-pay figure for anyone.** The $3–20/mo band is *observed market pricing*, not stated willingness; no source asked a freelancer "would you pay $X" (`research/summary.md` §5.4). The concierge test exists to produce exactly this missing number.
- **Per-contract vs subscription preference is unknown.** We chose per-contract on the logic that the pain is episodic; the research does not confirm it. The test must check it.
- **Reddit — likely the richest complaint source — was inaccessible** (403 across all four agents). The pain evidence leans on Teamblind, Adobe forums, and a Zoho freelancer-interview post that carries a mild pro-contract-product slant.
- **Clause ranks below the top three are practitioner-sourced**, not complaint-volume data — qualitatively, not statistically, ranked (`research/summary.md` §2).
- **Two originally-hypothesised clauses — fee escalators and standalone liability caps — did not appear in the complaint data.** Treated as unvalidated; not in the red lines above.
- **No creator or founder-specific data**, and no evidence on how much of the $6,380 average loss a review would actually prevent.
