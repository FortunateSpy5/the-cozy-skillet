# The Cozy Skillet — Machine-Readable Agent Guidelines (`AGENTS.md`)

Welcome, AI Agent. This repository powers **The Cozy Skillet** (`https://thecozyskillet.com`), a modern, lightning-fast digital cookbook and personal recipe repository. It serves as the sister culinary platform to **The Cozy Cart** (`https://thecozycart.online/`).

---

## 1. Core Mission & Philosophy

### **Functional First, Zero Fluff**
Traditional online recipe blogs are plagued by 2,000-word autobiographical stories, life updates, and endless scroll before the actual recipe. **The Cozy Skillet bans this completely.**

1. **Immediate Value:** Ingredients, measurements, servings, cook times, and step-by-step instructions appear front-and-center immediately.
2. **Indian Palate & Kitchen Usability:**
   - Recipes encompass diverse global cuisines (Mediterranean, Pan-Asian, Italian, Indian, Comfort), but are thoughtfully adapted for the **Indian palate and Indian kitchen realities**.
   - Ingredients should be readily available in Indian supermarkets or local markets (Blinkit, Zepto, local sabzi mandi), with common Indian pantry substitutes documented in notes.
   - Dual measurements: **Weight in grams (g) / milliliters (ml)** AND **Volume (cups, tbsp, tsp)** must both be provided.
   - Temperature instructions must specify **Celsius (°C)** (with Fahrenheit in parentheses).
   - Cooking steps consider gas burner flame control, induction stoves, and cookware like seasoned cast-iron skillets, heavy iron tawas, or stainless steel kadais.
3. **Interactive Kitchen UX & Baking Architecture:**
   - **Interactive Ingredients & Mise-en-Place:** Check off ingredients as you prep with a real-time Mise-en-Place progress counter and visual completion bar.
   - **Mobile Quick-Peek Drawer:** Slide-up ingredients sheet accessible from the mobile floating dock, allowing cooks to check amounts and prep cues without losing their step in the instructions.
   - **Dual-Unit Dynamic Serving Scaler:** Scalable 0.5x, 1x, 2x, 3x ingredient quantities that recalculate both volume and metric weight on the fly.
   - **Whole-Batch Baking Lock:** For `Baking` recipes, serving scaling is locked to whole-batch multipliers (`0.5x`, `1x`, `2x`) with pan crowding warnings on doubling.
   - **Baker's Percentage Engine:** Dynamic 4th unit toggle (`Dual | Grams | Cups | Baker's %`) displaying ingredient weights relative to base flour weight ($100\%$).
   - **Pure OTG Standards:** All baking recipes are calibrated strictly for 100% Oven Toaster Griller (OTG) baking with explicit rack slots, heating rod modes, true 15-minute preheat, and top-rod foil shield cues.
   - **Climate-Aware Proofing Timers:** Seasonal fermentation toggles (`[☀️ Warm Kitchen (>28°C)]` vs `[❄️ Cool/AC Kitchen (<24°C)]`) dynamically updating step timer buttons.
   - **Cook Mode (Hands-Free):** Distraction-free, large-text step-by-step cooking interface utilizing the browser's `Screen Wake Lock API` to prevent the phone/tablet screen from dimming while cooking.
   - **Integrated Timers:** Built-in step timers (e.g. "Simmer for 15 minutes [Start Timer]") with acoustic chime alerts.
   - **Instant Ingredient Search:** Client-side search engine allowing you to search by ingredients currently in your fridge.
   - **Printer-Friendly View:** One-click clean, ink-saving print layout without headers, footers, or navigation.

---

## 2. Design System & Aesthetic (Cozy Cart Synergy)

The Cozy Skillet inherits the warm, tactile, cozy editorial palette of The Cozy Cart:

| Token | Hex Code | Usage |
|---|---|---|
| **Parchment Cream (Bg)** | `#FDFBF7` | Main page background |
| **Warm Card Background** | `#FAF3EE` / `#FFFFFF` | Cards, modals, pill badges, highlights |
| **Terracotta Skillet (Primary)**| `#9C4B25` | Primary buttons, active states, key accents |
| **Warm Pumpkin (Accent)** | `#D87D4A` | Gradient highlights, timers, badges |
| **Deep Burnt Rust (Hover)** | `#7A3617` | Hover states, active links |
| **Espresso Dark (Text)** | `#4A3F35` | Headings, primary text, high-contrast labels |
| **Warm Walnut (Body Text)** | `#5F5045` | Paragraphs, instruction steps, metadata |
| **Linen Sand (Border)** | `#EBE5D9` | Card borders, dividers, subtle outlines |
| **Fresh Sage (Success)** | `#4A7C59` | Checked ingredients, vegetarian badge, completed steps |

### Visual Rules:
- **Serif Headings:** Use `font-serif` (`ui-serif, Georgia, Cambria, serif`) for recipe titles and section headers.
- **Clean Sans Body:** Use `font-sans` for ingredients, quantities, temperatures, and instructions.
- **No Tailwind `dark:` classes:** Designed strictly as a warm, tactile, cream-based experience.

---

## 3. Recipe Content Schema & Standards

All recipes live in `src/content/recipes/` as `.mdx` files validated via Astro Content Collections (`src/content.config.ts`).

### Required Frontmatter Fields:
```yaml
title: "One-Pan Garlic Butter Skillet Chicken"
description: "Crispy skin-on chicken thighs seared in a cast iron skillet and basted with foaming garlic butter, lemon, and fresh rosemary."
pubDate: 2026-10-31
image: "/images/recipes/garlic-butter-skillet-chicken.jpg"
imageAlt: "Golden crispy skillet chicken thighs nestled in garlic butter herb sauce"
categories: ["Skillet Mains & Curries"] # Breakfast, Rice & Noodles, Pasta, Snacks & Street Bites, Skillet Mains & Curries, Baking
bakingType: null # Optional (when categorized as Baking): Breads & Flatbreads, Cakes & Tea Loaves, Cookies, Brownies & Bars
cuisine: ["Mediterranean", "Continental"] # Indian, Chinese, Continental, Mexican, Mediterranean, Fusion
tags: ["One-Pan", "Quick (< 30 Mins)"] # Quick (< 30 Mins), One-Pan, One-Pot, Tawa Special, High-Protein
dietary: ["Gluten-Free", "High-Protein", "Low-Carb"] # Vegetarian, Eggless, Vegan, Gluten-Free, High-Protein, Low-Carb
difficulty: "Easy" # Easy, Medium, Advanced
prepTimeMinutes: 10
cookTimeMinutes: 20
servings: 4
equipment:
  - "12-inch Cast Iron Skillet (or heavy kadai)"
  - "Tongs"
  - "Instant-Read Meat Thermometer"
ingredients:
  - category: "Chicken & Seasoning"
    items:
      - name: "bone-in, skin-on chicken thighs"
        amount: 4
        unit: "pieces"
        metricAmount: 750
        metricUnit: "g"
        notes: "patted dry with kitchen paper"
      - name: "salt"
        amount: 1
        unit: "tsp"
        metricAmount: 6
        metricUnit: "g"
  - category: "Garlic Butter Pan Sauce"
    items:
      - name: "butter"
        amount: 3
        unit: "tbsp"
        metricAmount: 45
        metricUnit: "g"
      - name: "garlic cloves"
        amount: 6
        unit: "cloves"
        metricAmount: 25
        metricUnit: "g"
        notes: "smashed and coarsely chopped"
instructions:
  - step: 1
    title: "Prep & Dry the Chicken"
    text: "Thoroughly pat chicken dry with paper towels. Season both sides evenly with salt and pepper."
    durationMinutes: 5
  - step: 2
    title: "Sear Skin-Side Down"
    text: "Heat cast iron skillet over medium flame with 1 tbsp oil. Sear undisturbed until skin is deep golden."
    durationMinutes: 11
notes:
  - "Indian Kitchen Note: If fresh herbs are unavailable, fresh coriander stems plus kasuri methi or dried herbs provide wonderful depth."
  - "Storage: Keeps in an airtight container in the fridge for up to 3 days."
nutrition:
  calories: 395
  protein: "34g"
  carbs: "2g"
  fat: "28g"
```

### Pure OTG Baking Frontmatter Extension:
For recipes in `categories: ["Baking"]`, the following fields and structures are supported:
```yaml
categories: ["Baking"]
bakingType: "Breads & Flatbreads" # Breads & Flatbreads, Cakes & Tea Loaves, Cookies, Brownies & Bars
prepTimeMinutes: 25 # Hands-on active time
proofTimeMinutes: 75 # Passive rise/fermentation time
cookTimeMinutes: 25 # Active OTG bake time
hydration: 68 # Baker's percentage hydration (e.g. 68% or 73%)
bakerFlourWeight: 320 # Total base flour in grams for Baker's % calculation
servings: 9 # Portion yield (e.g. 9 pavs, 12 slices)
otgProfile:
  preheatTempC: 180
  preheatMins: 15
  bakeTempC: 180
  rodMode: "Both Rods On (Top + Bottom) • Fan Off"
  rackPosition: "Lower-Middle Rack (25L–35L OTG) / Middle Rack (40L+ OTG)"
  bakingVessel: "9×4 inch Anodized Aluminium Loaf Tin"
  foilTentCue: "Tent loosely with aluminium foil at 15 mins once the dome is golden."
ingredients:
  - groupTitle: "Tangzhong (Moisture & Softness Paste)"
    items:
      - name: "all-purpose flour (maida)"
        amount: 2.5
        unit: "tbsp"
        metricAmount: 20
        metricUnit: "g"
        bakersPercentage: 6
  - groupTitle: "Optional Boosters"
    items:
      - name: "vital wheat gluten"
        amount: 2
        unit: "tsp"
        metricAmount: 6
        metricUnit: "g"
        optional: true
        boosterEffect: "Transforms 10% Indian maida into 13% high-protein bakery flour"
        bakersPercentage: 2
instructions:
  - step: 4
    title: "First Bulk Rise"
    text: "Proof until doubled in volume."
    durationMinutes: 45
    summerDurationMinutes: 45 # Dynamically active when warm kitchen is selected
    winterDurationMinutes: 75 # Dynamically active when cool kitchen is selected
```

---

## 4. Monetization & Personal Usage Policy

- **Current Status:** 100% Personal & Ad-Free. No advertising pixels, trackers, or intrusive popups.
- **Future Readiness:** When monetization is activated in later phases, it will center around curated cookware and pantry recommendations (cast-iron skillets, chef knives, spice blends), maintaining the site's speed, privacy, and minimalist aesthetic.

---

## 5. Repository Tech Stack & Commands

- **Framework:** Astro 5 / 7 (Static Site Generation / SSG)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Language:** TypeScript (Strict checking)
- **Deployment:** Netlify (triggered automatically on push to GitHub `main`)
- **Agent Skill Manager:** `skills.sh` (`npx skills`)

### Key Commands:
```bash
npm run dev      # Start local development server (http://localhost:4321)
npm run build    # Production static build to dist/ (Must pass with 0 errors)
npm run preview  # Preview production build locally
npm run check    # Run Astro TypeScript type check (0 errors, 0 warnings)
./skills.sh      # Synchronize agent skills from skills.sh
```

---

## 6. Installed Agent Skills & Workflows

### Skills.sh Packages:
- `astro` (`astrolicious/agent-skills@astro`) — Astro best practices, components, routing, and content collections.
- `web-quality-audit` (`addyosmani/web-quality-skills@web-quality-audit`) — Lighthouse, Core Web Vitals, and accessibility checks.
- `seo-audit` (`coreyhaines31/marketingskills@seo-audit`) — Technical SEO audit, canonical checks, and structured data validation.

### Workspace Skills (`.agents/skills/`):
- `cozy-recipe-creator` (`.agents/skills/cozy-recipe-creator/SKILL.md`) — Activated ONLY when the user explicitly requests to create or add a new recipe.

---

## 7. Progressive Disclosure & Documentation Suite

For deeper architectural context, technical standards, and writing guidelines, consult:
- **Consolidated Best Practices:** [`BEST_PRACTICES.md`](./BEST_PRACTICES.md) — Technical standards, styling, accessibility, and Core Web Vitals.
- **Recipe Content & Style Guide:** [`CONTENT_STYLE_GUIDE.md`](./CONTENT_STYLE_GUIDE.md) — Dual-measurement density conversions, action verbs, and Indian kitchen substitutions.
- **System Architecture Blueprint:** [`.agents/PROJECT_KNOWLEDGE_BASE.md`](./.agents/PROJECT_KNOWLEDGE_BASE.md) — File topology, component hierarchy, client state engines, and schema definitions.
- **Research & Product Roadmap:** [`docs/RESEARCH_PAIN_POINTS_AND_FEATURE_ROADMAP.md`](./docs/RESEARCH_PAIN_POINTS_AND_FEATURE_ROADMAP.md) — Universal recipe site pain points and future feature specs.

---

## 8. Operational Guardrails

### ALWAYS:
- **Ideate & Confirm First:** ALWAYS brainstorm, outline options, and get user confirmation BEFORE executing any code changes, creating new components, or adding batches of recipes.
- Verify builds with `npm run build` and `npm run check` before concluding any task.
- Ensure all recipe additions include both volume (cups/tbsp) and metric weight (g/ml).
- Provide temperatures in Celsius (°C).
- Mention Indian kitchen availability notes / substitutes where appropriate.
- Test interactive features (scaler, checkboxes, timers, cook mode) across mobile viewports.

### ASK FIRST:
- Always propose and confirm architectural changes, new recipe categories, or content plans before implementation.
- Deleting or renaming existing recipe slugs.
- Modifying core layouts (Header, Footer, RecipeLayout).

### NEVER:
- **NEVER create, generate, or add new recipes unless the user explicitly requests them.**
- NEVER add rambling autobiographical stories before recipes.
- NEVER add third-party ad networks or tracking scripts.
- NEVER push unverified builds or invalid frontmatter.
