# Notes

Running notes and gotchas captured while studying — drop anything here as you go: a confusing concept the bootcamp glossed over, a "wait, why did that happen" moment in the PDI, exam-style traps worth remembering.

Suggested pattern: one markdown file per topic (e.g. `acls.md`, `update-sets.md`, `flow-designer.md`), or just append to `scratch.md` and split out later.

## Gotchas log (seed)

- **Client vs. server** is the master split. `g_form` / `g_user` = browser; `GlideRecord` / `gs` = server. Most scripting confusion traces back to "where does this run?"
- **`before` Business Rule** saves automatically — no `current.update()`. Calling it in an `after` rule on the same record = recursion.
- **GlideAjax is async** — the answer arrives in the callback, not on the next line.
- **Prefer the lower-code tool**: UI Policy over Client Script; Flow Designer over a script — when it fully does the job.
