# ServiceNow Learn

My working repository for the whole **ServiceNow learning & certification journey** — starting at **CAD** and building up the ladder (CSA → CAD → CIS/CAS specialists → architect tracks).

**Platform fundamentals** (reused by every cert) live separately from each **certification**'s exam-specific material, so nothing is tied to a single exam.

> Read the guides, build everything in a free [Personal Developer Instance (PDI)](https://developer.servicenow.com/dev.do).

## Start here

Open **[`index.html`](index.html)** in a browser — the hub that links the fundamentals, each cert, and how to verify the material. (GitHub won't render the interactive HTML; clone or download and open locally.)

New? Read **[Platform Fundamentals](platform/fundamentals/index.html)** first (applies to every cert), then open the cert you're studying.

## Layout

```
servicenow-learn/
├── index.html            # browser hub — open this first
├── platform/             # CROSS-CERT, reused by every certification
│   ├── fundamentals/     #   doc map, lab-vs-PDI, mental models, scripting model
│   ├── snippets/         #   PDI-pasteable scripts (*.server.js / *.client.js)
│   └── notes/            #   running gotchas
├── certs/                # exam-specific material, one folder per cert
│   └── cad/              #   CAD blueprint, domain weightings, progress tracker
└── assets/               # shared style.css + quiz.js (self-contained)
```

## Status

| Area | What | Status |
|---|---|---|
| Platform | [Fundamentals](platform/fundamentals/index.html) — doc map, lab/PDI, 5 mental models, full scripting model | ✅ Ready |
| Platform | [Snippets](platform/snippets/) — GlideRecord, Business Rule, Client Script, GlideAjax | ✅ Ready |
| Cert | [CAD](certs/cad/index.html) — blueprint, 6 domains, interactive tracker | ✅ Ready |
| Cert | CSA — admin foundation CAD assumes | 📝 Planned |
| Cert | CIS / CAS specialist tracks | 🔭 Later |

## How to trust & verify

Study material — use it, but verify the load-bearing facts. Kept lightweight:

- **"Verify against…" box** at the end of each guide links the *official* ServiceNow source (blueprint, API) for that page's facts. Click to confirm weightings and method names.
- **Runnable snippets** are the strongest check — paste into your PDI and the platform confirms the code. If it runs, it's right.
- **Quizzes** restate the key facts with explanations as a fast self-check.
- **Teaching vs. fact:** tables, API names, and weightings are verifiable claims; framing ("start here", "prefer the lower-code tool") is teaching judgment.

Material is added one guide at a time (see commit history) — no need to read it all at once.

## Key links

- [Developer Portal & PDI request](https://developer.servicenow.com/dev.do)
- [ServiceNow University](https://learning.servicenow.com/) (courses, learning paths, exam registration)
- [CAD Exam Blueprint](https://learning.servicenow.com/lxp/en/credentials/certified-application-developer-mainline-exam-blueprint?id=kb_article_view&sysparm_article=KB0011498)
- [Product documentation](https://www.servicenow.com/docs/) (read the current release — Zurich)
- [Community](https://www.servicenow.com/community/)
