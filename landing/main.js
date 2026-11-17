// Redline landing — the worksheet: pick a finding, read the sentence it rests on.
// Sample data is illustrative (a synthetic contract), not a real client document.

const FINDINGS = {
  ip: {
    gap: false, tier: "Critical",
    verdict: "Walk away: don't sign without changing this",
    sci: "The main risk for anyone who makes IP",
    name: "Broad IP assignment",
    quote: "“Contractor hereby assigns all intellectual property, whether created before or during the engagement, to the Client.”",
    effect: "“Before or during” sweeps in work you made before this client existed, including your tools, templates and portfolio. You can't take it back later, which is why it's Critical.",
    counter: "Contractor assigns only the deliverables created specifically for this project. Pre-existing materials, tools, and templates remain Contractor's property, licensed to Client for use of the deliverables."
  },
  indemnity: {
    gap: false, tier: "Critical",
    verdict: "Walk away: don't sign without changing this",
    sci: "Dangerous because it has no ceiling",
    name: "Uncapped indemnity",
    quote: "“Contractor shall indemnify Client against all claims, losses, and expenses, notwithstanding the limitation of liability in Section 9.”",
    effect: "The carve-out from the liability cap means your exposure has no upper limit. One claim could cost more than the whole job paid, which is why it's Critical.",
    counter: "Contractor's indemnity is subject to the limitation of liability in Section 9, and in no event exceeds the total fees paid under this agreement."
  },
  net60: {
    gap: false, tier: "Caution",
    verdict: "Adverse but bounded. Raise it if you can.",
    sci: "A real cost you can see the edge of",
    name: "Net-60 payment terms",
    quote: "“Client shall pay the fees set out in Exhibit B within sixty (60) days of invoice.”",
    effect: "Sixty days is a long time to carry a client's bill, but the cost is defined and survivable. Worth pushing on; not worth walking over.",
    counter: "Client shall pay undisputed invoices within fifteen (15) days of receipt. Amounts unpaid after that accrue interest at 1.5% per month."
  },
  killfee: {
    gap: true, tier: "Gap",
    verdict: "Not found in this document",
    sci: "A protection you expected that isn't here",
    name: "No kill fee",
    quote: "No clause in the document provides compensation for work in progress if the client terminates early.",
    effect: "Termination is “on notice”, with nothing owed for work already underway. You asked for a kill fee and the contract doesn't have one, so Redline reports it as a Gap instead of a Flag.",
    counter: "If Client terminates for convenience, Client shall pay for all work performed through the termination date plus a cancellation fee of 25% of the remaining contract value."
  }
};

const panel = document.getElementById("specimen");
const tabs = Array.from(document.querySelectorAll(".flaglist [role=tab]"));

function render(key){
  const f = FINDINGS[key];
  if(!f) return;
  panel.classList.toggle("is-gap", f.gap);
  panel.classList.toggle("is-caution", f.tier === "Caution");
  const copyLabel = f.gap ? "Copy proposed clause" : "Copy counter-offer";
  const counterK  = f.gap ? "Clause you can propose" : "Counter-offer you can paste";
  const quoteK    = f.gap ? "What's missing" : "The sentence it came from";
  panel.innerHTML = `
    <div class="band"><span class="nm-band">${f.tier}</span><span class="verdict">${f.verdict}</span></div>
    <div class="body">
      <p class="sci">${f.sci}</p>
      <h3 class="name">${f.name}</h3>
      <div class="field">
        <div class="k">${quoteK}</div>
        <p class="quote">${f.quote}</p>
      </div>
      <div class="field">
        <div class="k">What it does to you</div>
        <p class="effect">${f.effect}</p>
      </div>
      <div class="field counter">
        <div class="k">${counterK}</div>
        <p data-counter>${f.counter}</p>
        <button class="copy" type="button">${copyLabel}</button>
      </div>
    </div>`;
  wireCopy();
}

function select(tab){
  tabs.forEach(t => t.setAttribute("aria-selected", String(t === tab)));
  render(tab.dataset.finding);
}

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => select(tab));
  tab.addEventListener("keydown", (e) => {
    const n = tabs.length;
    if(e.key === "ArrowDown" || e.key === "ArrowRight"){ e.preventDefault(); tabs[(i+1)%n].focus(); select(tabs[(i+1)%n]); }
    if(e.key === "ArrowUp"   || e.key === "ArrowLeft"){ e.preventDefault(); tabs[(i-1+n)%n].focus(); select(tabs[(i-1+n)%n]); }
  });
});

function wireCopy(){
  const btn = panel.querySelector(".copy");
  if(!btn) return;
  btn.addEventListener("click", async () => {
    const text = panel.querySelector("[data-counter]").textContent;
    try{
      await navigator.clipboard.writeText(text);
      const was = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(() => { btn.textContent = was; }, 1600);
    }catch(_){
      btn.textContent = "Press ⌘C to copy";
    }
  });
}

// hydrate the default panel so the copy button works before any tab change
wireCopy();

// deep-link a specific finding, e.g. #finding-net60
const want = (location.hash.match(/^#finding-(\w+)/) || [])[1];
if(want && FINDINGS[want]){
  const t = tabs.find(x => x.dataset.finding === want);
  if(t) select(t);
}
