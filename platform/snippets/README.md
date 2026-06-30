# Snippets

PDI-pasteable scripts, organized by where they run / which API they exercise. Each file says **where to paste it** at the top.

| File | Runs | Paste into |
|---|---|---|
| [`gliderecord-query.server.js`](gliderecord-query.server.js) | Server | **All → Scripts - Background** |
| [`business-rule-before.server.js`](business-rule-before.server.js) | Server | A Business Rule (When: `before`) |
| [`client-script-onchange.client.js`](client-script-onchange.client.js) | Browser | An onChange Client Script |
| [`glideajax.client-and-server.js`](glideajax.client-and-server.js) | Both | Script Include + Client Script (see file) |

> Naming convention: `*.server.js` runs on the server (GlideRecord, `gs`), `*.client.js` runs in the browser (`g_form`, `g_user`). Knowing which is which is half of the CAD Automation domain.
