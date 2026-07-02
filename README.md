# exist.im

Official website of **exist.** — an identity governance system for generative processes. Developed by Refusal SRL. Built by Marian Dorobanțu.

## Stack

- Next.js 15 · App Router · TypeScript
- Tailwind CSS 3
- Fonts: Fraunces (variable serif), Inter Tight (sans), JetBrains Mono
- No client-side state library, no CMS. Pure static.

## Structure

```
app/
├─ page.tsx           # Landing (gate + hero + navigation cards)
├─ thesis/page.tsx    # 01 · Problem + Why refusal + Governance
├─ system/page.tsx    # 02 · How exist. works + Constitutional + Validation
├─ agents/page.tsx    # 03 · Ten agents in three layers
├─ essay/page.tsx     # 04 · The Right to Kill Ideas (full text)
├─ founder/page.tsx   # 05 · Marian Dorobanțu bio + selected work
└─ contact/page.tsx   # 06 · Email + speaking

components/
├─ Gate.tsx           # Human-verification entry gate (landing only)
├─ Logo.tsx           # `exist.` wordmark; collapses to `e.` on scroll
├─ Nav.tsx            # Sticky nav with scroll-collapse logo + mobile menu
├─ Footer.tsx         # Shared footer with logo, links, entity line
├─ PageShell.tsx      # Shared shell for sub-pages (header + prev/next)
└─ RevealInit.tsx     # Intersection-observer scroll-in initializer
```

## Design tokens

- **Palette:** white (#ffffff) · warm off-white (#faf9f7) · ink (#141413) · red accent (#c1121f — only on the logo dot, essay "Ideas", and CTA underlines)
- **Type:** Fraunces (display) · Inter Tight (body) · JetBrains Mono (labels)
- **Container:** max-width 1280px, padding clamp(24px, 4.5vw, 56px)

## Local dev

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

Any Next.js host (Vercel, Netlify, Cloudflare Pages). No environment variables needed.

## Notes

- The entry gate appears only on the landing page and only once per session (`sessionStorage`).
- `usePathname()` is used in Nav for the active-link state — this is a client component.
- All page transitions use standard Next.js `<Link>` — no custom router logic.
