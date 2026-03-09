# UNI PROJECT — Mobile Fix Plan

This plan addresses layout, UX, and consistency issues on small screens (≤768px and ≤480px) across all pages. Issues were identified from the current CSS and inline styles that don’t respond to breakpoints.

---

## 1. Root cause: inline grids never collapse

**Problem:** Many sections use **inline `style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}`** (or `2fr 3fr`, `repeat(4,1fr)`, etc.). These override or bypass the responsive rules in `globals.css`, so on mobile the layout stays 2-column and content gets cramped or overflows.

**Affected areas:**

| Page / Component | Inline grid | Issue on mobile |
|------------------|-------------|------------------|
| **Home** | Trust section `1fr 1fr` + inner 2×2 grid | Two columns; trust stats stay 2×2 |
| **Home** | Services header row (flex with “Shiko të gjitha”) | May wrap awkwardly |
| **Sherbimet** | Each service block `1fr 1fr` + order swap | Stays 2-col; image/text order may be wrong |
| **Sherbimet/[slug]** (ServiceDetailPage) | Main content `1fr 1fr` | Stays 2-col; process box padding may be large |
| **Sektoret** | Sector 1–2 blocks `1fr 1fr`; sectors 3+4 block `1fr 1fr` | All stay 2-col |
| **Si Operojmë** | ISO section `1fr 1fr`; Digital section `1fr 1fr`; features grid `1fr 1fr`; team grid `repeat(3,1fr)` | Multiple 2-col and 3-col layouts |
| **Projekte** | Stats row `repeat(4,1fr)`; each project card `1fr 1fr` | 4-col stats; 2-col cards; fixed image height 320px |
| **Kontakt** | Main layout `2fr 3fr` | Contact info + form stay side‑by‑side |

**Approach:** Introduce **reusable layout classes** in `globals.css` that are responsive, then replace inline grid styles with those classes (or add a single wrapper class). Avoid one-off inline grids for main structure.

---

## 2. Global CSS fixes (`app/globals.css`)

### 2.1 Navbar (768px)

- **Hide `.nav-right`** on mobile so only logo + hamburger show. Right now only `.nav-links` and `.nav-phone` are hidden; the “Kërko ofertë” button remains and can squeeze or wrap.
- Optional: slightly reduce `.nav-inner` height (e.g. 64px) and logo size on very small screens.

### 2.2 Container and spacing

- **Small screens (e.g. ≤480px):** Reduce `.wrap` padding from 24px to **16px** so content doesn’t touch edges.
- **Hero:** Reduce `.hero-content` padding (e.g. 88px → 48px vertical) and possibly `.hero-actions` / `.hero-trust` spacing so the hero doesn’t feel oversized on mobile.

### 2.3 Stats bar

- At 768px the bar is 2×2. Consider **single column** at ≤480px so each stat is full-width and easier to scan.

### 2.4 Footer

- `.footer-main` already goes to 1 column at 768px. Ensure `.ft-legal` and `.ft-legal-links` wrap nicely (e.g. stack or wrap with gap) and text doesn’t overflow on very narrow widths.

### 2.5 Mobile menu

- Reduce horizontal padding (e.g. 40px → 24px) on small screens so links don’t feel cramped and the menu doesn’t look off-balance.
- Ensure there is a clear **close control** (e.g. X button or “Mbyll” next to the hamburger when open) so users don’t rely only on tapping a link to close.

### 2.6 New responsive layout classes

Add utility classes that are used by pages instead of inline grids, so one place controls breakpoints:

- **`.layout-2col`** — 2 columns desktop, 1 column from e.g. 768px (and optionally stack image-above or text-above via modifier).
- **`.layout-contact`** — 2fr 3fr desktop, 1 column on mobile (contact info first, then form).
- **`.layout-stats-4`** — 4 columns → 2 → 1 at smaller breakpoints.
- **`.layout-grid-2x2`** — 2×2 grid that becomes 2 columns then 1 column on mobile (for trust stats, feature blocks, etc.).

Use these in JSX by applying the class to the container; remove or replace the inline `gridTemplateColumns` / `display: grid` for that container.

---

## 3. Page-by-page changes

### 3.1 Home (`app/page.tsx`)

- **Services section header:** The row with title + “Shiko të gjitha shërbimet” — ensure it stacks cleanly (e.g. title block full-width, button below) and doesn’t overflow; use flex-wrap and possibly a mobile-specific order or margin.
- **Trust section:** Replace inline `gridTemplateColumns: "1fr 1fr"` (outer and inner) with `.layout-2col` and `.layout-grid-2x2` (or equivalent). Ensure the floating “ISO” badge doesn’t overlap or clip on small viewports (e.g. position more conservatively or hide on very small screens).
- **Hero:** Rely on existing `.hero-inner` and `.hero-visual` rules; confirm hero trust row (ISO / 24/7 / Pa kontratë) wraps to multiple lines and doesn’t overflow.

### 3.2 Sherbimet (`app/sherbimet/page.tsx`)

- Replace each service block’s inline grid with a class like `.layout-2col` and ensure **order** is consistent on mobile: e.g. text first, image second (or use a modifier like `.layout-2col--text-first` / `--image-first` so the alternating order is handled in CSS).
- Add responsive spacing (e.g. reduce gap and margin between blocks on mobile).

### 3.3 Service detail (`components/ServiceDetailPage.tsx`)

- Replace the main content grid with `.layout-2col` (text + image). On mobile, image below text.
- Process block: reduce `padding: 56` on small screens (e.g. via class or inline media — prefer class in globals like `.process-box { padding: 56px }` with `@media (max-width: 768px) { .process-box { padding: 32px } }`).

### 3.4 Sektoret (`app/sektoret/page.tsx`)

- Sector 1 and 2 blocks: use `.layout-2col` (and order modifier for the one with image first).
- Sectors 3+4 block: use a 2-col layout that becomes 1-col on mobile (e.g. `.layout-2col` or a small grid class).
- Sectors 5–8: already use `.grid-4`; ensure at 768px it’s 2-col and at 480px consider 1-col (add a breakpoint in globals if needed).

### 3.5 Si Operojmë (`app/si-operojme/page.tsx`)

- ISO section: replace inline `1fr 1fr` with `.layout-2col`.
- Digital section: same.
- Inner “features” grid (Raporte dixhitale, etc.): replace `gridTemplateColumns: "1fr 1fr"` with a class that goes to 1 column on mobile.
- Team grid: replace `repeat(3,1fr)` with a class that is 3-col → 2-col → 1-col (e.g. `.grid-3` already exists; verify it’s applied and that the container uses it instead of inline style).

### 3.6 Projekte (`app/projekte/page.tsx`)

- Stats row: replace `repeat(4,1fr)` with `.layout-stats-4` (or a 4→2→1 class) so it doesn’t stay 4 columns on mobile.
- Each project card: replace inline `1fr 1fr` with `.layout-2col`. Set image container to **min-height** or **aspect-ratio** instead of fixed `height: 320` so it scales on small screens (e.g. aspect-ratio 16/10 or min-height 200px).

### 3.7 Kontakt (`app/kontakt/page.tsx`)

- Main wrapper: replace `gridTemplateColumns: "2fr 3fr"` with `.layout-contact` so contact info stacks above the form on mobile.
- Contact info cards and form container: ensure padding and font sizes are comfortable (form already uses `.form-row` which collapses in globals).

---

## 4. Component-level fixes

### 4.1 Navbar (`components/Navbar.tsx`)

- No structural change if CSS hides `.nav-right`; confirm hamburger is the only visible control besides logo on mobile.
- Optional: add an explicit “Close” button or icon inside the mobile menu that calls `closeMenu()` for better discoverability.

### 4.2 PageHeader

- Already has responsive padding in globals. Verify breadcrumb doesn’t overflow on narrow screens (e.g. single line with ellipsis or wrap).

### 4.3 CTABand

- Already uses `.cta-inner` (grid → 1 col at 1024px). Verify CTA text and button stack and remain readable; ensure button is full-width or centered on mobile if that matches design.

### 4.4 Footer

- Confirm `.ft-bottom` stacks and legal links wrap; no horizontal scroll.

---

## 5. Execution order (recommended)

1. **globals.css**
   - Add/hide `.nav-right` in 768px media query.
   - Add small-screen `.wrap` padding and hero/content spacing.
   - Add new layout classes: `.layout-2col`, `.layout-contact`, `.layout-stats-4`, `.layout-grid-2x2` (and any modifiers for order).
   - Optional: 480px breakpoint for stats single-col, footer/menu polish.
   - Mobile menu: padding and close button if desired.

2. **Replace inline grids**
   - Home: trust section and any other 2-col sections.
   - Sherbimet: each service block.
   - ServiceDetailPage: main grid + process padding class.
   - Sektoret: sector blocks.
   - Si Operojmë: ISO, Digital, features, team.
   - Projekte: stats + project cards; fix image height.
   - Kontakt: main layout.

3. **Smoke test**
   - Resize to 768px and 375px (or 390px) and click through every route.
   - Check: no horizontal scroll, readable text, tap targets ≥44px, menu opens/closes, forms and CTAs usable.

4. **Optional**
   - Add a 480px (or 576px) breakpoint for extra spacing/grid tweaks.
   - Test landscape on phone if important.

---

## 6. Quick reference — layout class mapping

| Current inline style | New class | Notes |
|----------------------|-----------|--------|
| `gridTemplateColumns: "1fr 1fr"` (content + image) | `.layout-2col` | Add `--order: image-first` or similar if needed |
| `gridTemplateColumns: "2fr 3fr"` (contact) | `.layout-contact` | Info + form stack |
| `repeat(4,1fr)` (stats) | `.layout-stats-4` | 4→2→1 |
| Inner `1fr 1fr` (trust stats, features) | `.layout-grid-2x2` | 2×2 → 2 → 1 |
| `repeat(3,1fr)` (team) | `.grid-3` (existing) | Verify responsive behavior |

Once these are in place, mobile should be consistent and free of layout “errors” from screen to screen.
