# 08: Auth

**What to build:** A reader can sign in to Redline through Supabase auth, and
sign out. This is the gate the document library sits behind; it hangs off the
scaffold and runs alongside the analysis path without blocking it.

**Blocked by:** 01

**Status:** ready-for-agent

- [ ] A reader can sign in via Supabase auth and reach an authenticated state.
- [ ] A reader can sign out.
- [ ] Authenticated vs anonymous state is distinguishable to the app, so later
      slices can gate the library on it.
