# 01: Project scaffold + deploy

**What to build:** A reader can load the Redline app at a live Vercel URL. The
app is a Next.js project managed with npm, with the Supabase client and the
OpenRouter key wired in through `.env.local` (gitignored), and a bare landing
page that renders in production. This is prefactoring: pure groundwork so every
later slice lands on a running, deployable skeleton.

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [ ] A Next.js app runs locally with npm and renders a landing page.
- [ ] The app deploys to Vercel and the landing page loads at the production URL.
- [ ] A Supabase client is configured from environment variables.
- [ ] The OpenRouter key is read from the environment, not hardcoded.
- [ ] All credentials live in `.env.local`; `.env.local` is gitignored and no
      secret is committed.
- [ ] No new dependency is added without the owner's sign-off (`CLAUDE.md`).
