# Teqball Mumbai — website

Next.js (App Router, TypeScript) port of `teqball-mumbai-full-site-concept (6).html`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export-ready production build
```

- `src/app/*/page.tsx` — one route per page (was one JS-toggled view each in the concept)
- `src/data/*.json` — athletes, coaching staff, achievement records, league winners (extracted verbatim from the concept)
- `src/components/` — nav, footer, athlete roster/profile, achievements ledger, rules toggle
- `src/app/globals.css` — the concept's stylesheet, ported as-is
- `public/images/` — photos extracted from the base64 blobs in the concept

See `ISSUES.md` for everything that must be closed with the owner before launch.
