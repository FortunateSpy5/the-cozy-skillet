# The Cozy Skillet — Consolidated Best Practices & Standards

This document is the single-source engineering and technical reference for **The Cozy Skillet** (`https://thecozyskillet.com`). It consolidates all architectural, styling, accessibility, performance, and agent operational standards into one easily accessible place.

---

## 1. Operational & Git Protocol

| Rule | Requirement | Detail |
| :--- | :--- | :--- |
| **Ideate & Confirm First** | **Brainstorm before coding** | ALWAYS propose and confirm architectural changes, component additions, or content changes with the user before touching code. |
| **Recipe Creation Guardrail** | **Never create unprompted** | NEVER create, generate, or add new recipes unless the user explicitly requests them. |
| **Git Push / Deployment** | **NEVER push automatically** | Only execute `git push` or Netlify deploys when explicitly commanded by the user with words like "push", "deploy", or "upload". |
| **Build & Type Verification** | **Zero errors required** | Always execute `npm run check` and `npm run build` locally and verify 0 errors and 0 warnings before concluding any task. |
| **Trailing Slashes** | **Internal trailing slashes** | Every internal URL, canonical tag, and navigation link must end with a slash (e.g., `/baking/`, `/category/pasta/`, `/about/`). `astro.config.mjs` uses `trailingSlash: 'ignore'` with `build: { format: 'directory' }`. |

---

## 2. Design System & Styling (The Cozy Cart Synergy)

### The Cozy Color Palette
The Cozy Skillet strictly uses the warm, tactile, editorial palette shared with sister project The Cozy Cart:

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Parchment Cream** | `#FDFBF7` | Main page background |
| **Warm Card Background** | `#FAF3EE` / `#FFFFFF` | Cards, modals, pill badges, highlights |
| **Terracotta Skillet (Primary)** | `#9C4B25` | Primary buttons, active states, key accents |
| **Warm Pumpkin (Accent)** | `#D87D4A` | Gradient highlights, timers, badges |
| **Deep Burnt Rust (Hover)** | `#7A3617` | Hover states, active links |
| **Espresso Dark (Text)** | `#4A3F35` | Headings, primary text, high-contrast labels |
| **Warm Walnut (Body Text)** | `#5F5045` | Paragraphs, instruction steps, metadata |
| **Linen Sand (Border)** | `#EBE5D9` | Card borders, dividers, subtle outlines |
| **Fresh Sage (Success)** | `#4A7C59` | Checked ingredients, vegetarian badge, completed steps |

### Styling Directives
- **NO Tailwind `dark:` classes:** Designed strictly as a warm, tactile, cream-based experience. Arbitrary `dark:` classes break contrast and cause unreadable text when the user's OS has dark mode enabled.
- **Typography Standards:**
  - **Serif Headings (`font-serif`):** `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif` for recipe titles, section headers, and editorial warmth.
  - **Clean Sans Body (`font-sans`):** `ui-sans-serif, system-ui, sans-serif` for ingredients, quantities, temperatures, and instructions to ensure rapid readability in busy kitchens.
- **CSS Isolation with Direct Child Combinators:** Global typography styles in `src/styles/global.css` MUST strictly use direct child combinators (`.prose > h2`, `.prose > p`) so that markdown resets never leak into nested custom components (`IngredientList`, `InstructionList`, `CooksNotes`).

---

## 3. Kitchen Ergonomics & Web APIs

1. **Screen Wake Lock API:**
   * Handled in `src/components/CookModeModal.astro` via `navigator.wakeLock.request('screen')`.
   * Automatically requested when opening Cook Mode and gracefully released on modal close or page hide.
2. **Audio Feedback via Web Audio API:**
   * Step timers use synthesized sine wave oscillators (`880Hz A5 chime`) for zero-dependency acoustic alerts when a countdown concludes.
   * Vibration API fallback for mobile devices (`navigator.vibrate([200, 100, 200])`).
3. **Private Client-Side Persistence (`localStorage`):**
   * Handled in `src/components/CooksNotes.astro`.
   * User notes are saved locally to `localStorage` under `cozy-skillet-note-[slug]`. No account, cookies, or database required.
4. **Zero-Fluff Print Stylesheet:**
   * Defined in `src/styles/global.css` under `@media print`.
   * Completely suppresses headers, footers, interactive buttons, and floating docks, producing an ink-friendly, single-page recipe printout.
5. **Pure OTG Bake Settings Card (`src/components/OTGBakeSettings.astro`):**
   * High-contrast technical banner rendered on all `Baking` recipes detailing exact preheat standards, rod modes, rack slots by OTG size, and top-rod foil shields.
6. **Baking Ergonomics & Whole-Batch Scaling (`src/components/IngredientList.astro`):**
   * Dynamic Baker's % mode ($100\%$ flour baseline). Serving scaling locked to whole batches (`0.5x`, `1x`, `2x`) with an automatic pan-crowding warning for double batches.
   * Climate-aware proofing timer toggles in `src/components/InstructionList.astro` adjusting fermentation durations based on ambient kitchen temperature.
7. **Mobile Quick-Peek Ingredients Drawer (`src/layouts/RecipeLayout.astro`):**
   * High-contrast slide-up drawer modal (`#mobile-ingredients-drawer`) accessible directly from the mobile floating dock (`mobile-peek-ingredients-btn`). Eliminates vertical scrolling whiplash on mobile viewports so cooks can check amounts without losing their step in the instructions.
8. **Mise-en-Place Preparation Tracker (`src/components/IngredientList.astro`):**
   * Interactive prep checklist with real-time progress text (`#prep-progress-text`) and a smooth progress bar (`#prep-progress-bar`) measuring readiness before cooking begins.

---

## 4. Technical SEO & Structured Data

1. **Schema.org `Recipe` JSON-LD:**
   * Every recipe page automatically renders clean, validated `Recipe` JSON-LD in `RecipeLayout.astro`.
   * `prepTime`, `cookTime`, and `totalTime` formatted as ISO 8601 (`PT10M`, `PT25M`).
   * Rich snippet fields: `recipeYield`, `recipeIngredient`, `recipeInstructions` (`HowToStep`), `nutrition` (`NutritionInformation`), and `author`.
2. **Performance & Core Web Vitals (100/100):**
   * Zero heavy client-side JavaScript libraries. Pure vanilla TS for the scaler, timers, and search.
   * Static Site Generation (SSG) with pre-rendered HTML routes.
   * Asset caching configured in `netlify.toml` with immutable 1-year caches for `/_astro/*` bundles.

---

## 5. Pre-Push Checklist

Before completing any task or committing changes:
```bash
npm run check    # Verify Astro TypeScript diagnostics (0 errors, 0 warnings)
npm run build    # Verify full static build to dist/ (0 errors)
```
