# UNI PROJECT — Homepage expansion plan

## 1. Current homepage weaknesses

| Issue | Impact |
|--------|--------|
| **Compressed narrative** | Enterprise buyers cannot assess fit without visiting 3–4 inner pages. |
| **Repeated proof** | Hero trust row + stats bar + trust section restate similar signals (ISO, 24/7, scale). |
| **Thin services block** | Four cards with short bullets feel like teasers, not “service architecture.” |
| **Trust section mixes goals** | “Industry trust” + sector pills + operational stats + image compete in one band. |
| **3-step process** | Too marketing-generic for B2B facility buyers expecting audit → SLA → reporting language. |
| **Sectors as pills only** | No context for *how* operations differ by environment. |
| **Testimonials** | Credible roles but weak enterprise framing (no facility/sector/service line metadata). |
| **Conversion end** | CTA band is strong but lacks “what happens next” clarity. |

---

## 2. New homepage architecture (information hierarchy)

1. **Hero** — Authority, scope, single framing line; CTAs; **no duplicate numeric proof** (moved to strip).
2. **Proof strip** — **Single** consolidated metrics (years, people, ISO, 24/7).
3. **About the company** — Who UNI PROJECT is, tenure, clients, mindset, coverage, reporting/supervision.
4. **Services (deep)** — Four pillars with positioning, paragraph, 4–6 capabilities, tags, CTA; **not** four identical cards.
5. **Why UNI PROJECT** — Decision criteria aligned to ISO, supervision, digital reporting, training, coverage, clarity.
6. **Sectors** — Eight industries with **contextual** copy (what is at stake / what we run).
7. **How we work** — Five-step **operational** flow (audit → plan → delivery → QC → reporting/optimization).
8. **Standards & operations** — ISO, QC, supervision, reporting, safety/environment as a dedicated band.
9. **Testimonials** — Structured meta: sector, facility type, service context + quote.
10. **Final CTA** — Conversion + process after submit + timing + no-obligation + breadth of facilities.

---

## 3. New sections to add

- **About** (company introduction, split layout with photo).
- **Why UNI PROJECT** (rational grid of reasons).
- **Standards / quality / operations** (dedicated, non-flashy).
- **Expanded final CTA** (bullets + reassurance).

---

## 4. Existing sections to expand

| Section | Change |
|---------|--------|
| Hero | Stronger subhead, clearer B2B framing; trim redundant trust chips. |
| Stats | One **proof strip** only; refined presentation. |
| Services | Replace shallow grid with **service architecture** blocks from `serviceDetails`. |
| Sectors | From pills → **per-sector paragraphs** (8 sectors). |
| Process | 3 steps → **5 enterprise steps** with operational vocabulary. |
| Testimonials | Add **sector / facility / context** lines; tighten Albanian. |

---

## 5. Content hierarchy (scan path)

1. *What is this company and at what scale do they operate?* → Hero + About + Proof.
2. *What do they actually deliver?* → Services deep.
3. *Why them vs alternatives?* → Why + Standards.
4. *Do they understand our environment?* → Sectors.
5. *How does engagement work?* → Process.
6. *Who else trusts them?* → Testimonials.
7. *What is the next step?* → Final CTA.

---

## 6. UI system changes

- **Max width**: Keep `1240px` `.wrap`; add `.home-prose` max-width (~640px) for long copy blocks.
- **Section rhythm**: Use existing `.sec` / `.sec-subtle` / `.sec-navy` with intentional alternation.
- **New primitives**: `.home-service-block`, `.home-why-grid`, `.home-sector-row`, `.home-process-grid`, `.home-standards`, `.test-meta-grid` (extended), `.home-final-cta`.
- **Avoid**: extra gradients, card grids with identical hover, decorative icons without meaning.

---

## 7. Component changes

- **`content/homepage.ts`**: Central copy for about, why, sectors (long), process (5), standards bullets, final CTA bullets; re-export service blocks from `serviceDetails`.
- **`components/home/HomePageView.tsx`**: Composes all homepage sections; keeps `app/page.tsx` thin.
- **`content/testimonials.ts`**: Extend type with `sector`, `facility`, `serviceLine` (optional) for enterprise framing.
- **`CTABand`**: Reuse with richer `text` / `note` from homepage content (no redesign of component API required).

---

## 8. Responsive considerations

- **Hero**: Existing hide visual &lt;1024px; content stacks; maintain readable line lengths.
- **Service blocks**: Stack image/text; border-left accent persists for scanability.
- **Process**: 5 columns → 2 → 1 with consistent numbering.
- **Sectors**: Accordion-style rows or stacked cards; no horizontal scroll gimmicks.
- **Touch targets**: Buttons unchanged (already ≥44px effective).

---

## 9. Copy improvements

- Albanian: premium, precise; fix agreement (**Organizatat** vs **Organizata** where needed).
- Remove repeated “raportim dixhital” stacking in one viewport; vary phrasing (dokumentim, transparencë, gjurmueshmëri).
- Each section **one clear job**; no filler adjectives.

---

## 10. Implementation order

1. Add `content/homepage.ts` + testimonial type extensions.
2. Add `HomePageView.tsx` section markup.
3. Replace `app/page.tsx` body with `HomePageView`.
4. Append **homepage-specific CSS** to `globals.css`.
5. Run `npm run build` and fix a11y / lint.

---

## Success criteria

- Homepage is **meaningfully longer** with **distinct** sections (not repeated cards).
- A procurement reader can explain **services, process, proof, and differentiation** without leaving `/`.
- Visual tone stays **corporate, calm, structured** — market leader, not startup template.
