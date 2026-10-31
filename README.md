# The Cozy Skillet 🍳

> **Functional First, Zero Fluff.** A personal digital cookbook and recipe repository built for real home kitchens.

The Cozy Skillet is the sister culinary project to [The Cozy Cart](https://thecozycart.online/). Designed with a shared warm, rustic-editorial palette (terracotta, warm pumpkin, cream, espresso, and linen sand), it is engineered from the ground up to solve the biggest frustration in modern online recipe browsing: **no 2,000-word essays before the ingredients.**

---

## ✨ Features

- **No-Fluff Layout:** Ingredients, timings, measurements, and step-by-step instructions immediately accessible without 2,000-word autobiographical essays.
- **Pure OTG Baking Hub:** Bread & baking recipes calibrated strictly for tabletop Oven Toaster Grillers (25L–60L) with explicit heating rod modes, rack positions, 15-minute preheat, and top-rod foil shield cues.
- **Air Fryer Baking & Bain-Marie Protocols:** Small-batch baking calibrated for 3.5L–5.5L air fryers (160°C / 4-mould spacing rule) plus OTG water bath specs for silky steamed puddings.
- **Artisanal Sips & Refreshments:** Stovetop European-style thick hot chocolate and cafe/street sodas with exact metric/volume dual measurements, flame cues, and Indian street variations.
- **Dynamic Baker's Percentage Engine:** Dynamic 4th unit toggle (`Dual | Grams | Cups | Baker's %`) displaying ingredient weights relative to base flour weight ($100\%$).
- **Whole-Batch Scaling & Vessel Protection:** Scalable serving multiplier (`0.5x`, `1x`, `2x`) with automatic pan-crowding warnings when doubling baking doughs.
- **Climate-Aware Proofing Timers:** Seasonal fermentation toggles (`[☀️ Warm Kitchen (>28°C)]` vs `[❄️ Cool/AC Kitchen (<24°C)]`) dynamically updating step timer durations with acoustic Web Audio API chimes.
- **Mobile Quick-Peek Drawer:** Slide-up ingredients sheet accessible from the mobile floating dock, allowing cooks on step 4 or 5 to check amounts without losing their place in the instructions.
- **Interactive Ingredients & Mise-en-Place Tracker:** Check off ingredients with a real-time Mise-en-Place progress counter and animated visual completion bar.
- **Cook Mode (Hands-Free):** Fullscreen, high-contrast cooking view with keyboard navigation and the `Screen Wake Lock API` (with automatic re-acquisition on visibility change) to prevent screens from dimming.
- **Instant Ingredient Search:** Client-side search engine allowing you to search by ingredients currently in your fridge.
- **Recipe Schema.org JSON-LD:** Structured data formatted to Google Recipe Rich Snippet standards.
- **Print Friendly:** Dedicated ink-saving print stylesheet without headers, footers, or navigation.

---

## 🛠️ Tech Stack & Design

- **Framework:** [Astro](https://astro.build/) (Static Site Generation / SSG)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- **Typography:** Warm Serif headers (`ui-serif, Georgia`) paired with clean Sans-serif instructions
- **Palette (from The Cozy Cart):**
  - **Cream Parchment:** `#FDFBF7`
  - **Soft Cream Card:** `#FAF3EE`
  - **Terracotta Primary:** `#9C4B25`
  - **Warm Pumpkin Accent:** `#D87D4A`
  - **Espresso Dark:** `#4A3F35`
  - **Linen Sand Border:** `#EBE5D9`
  - **Sage Herb Green:** `#4A7C59`
- **Deployment:** Netlify (automated via GitHub `main` branch)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:4321)
npm run dev

# Run static production build
npm run build

# Run TypeScript & Astro diagnostics
npm run check
```

---

## 📚 Documentation & Architecture

- **Machine-Readable Agent Guidelines:** [`AGENTS.md`](./AGENTS.md)
- **Consolidated Best Practices:** [`BEST_PRACTICES.md`](./BEST_PRACTICES.md)
- **Recipe Content & Style Guide:** [`CONTENT_STYLE_GUIDE.md`](./CONTENT_STYLE_GUIDE.md)
- **System Architecture Blueprint:** [`.agents/PROJECT_KNOWLEDGE_BASE.md`](./.agents/PROJECT_KNOWLEDGE_BASE.md)
- **Kitchen Research & Roadmap:** [`docs/RESEARCH_PAIN_POINTS_AND_FEATURE_ROADMAP.md`](./docs/RESEARCH_PAIN_POINTS_AND_FEATURE_ROADMAP.md)

---

## 🤖 Agent Skills (`skills.sh`)

To synchronize or update agent skills via [`skills.sh`](https://skills.sh):
```bash
./skills.sh
# Or manually:
npx skills add astrolicious/agent-skills@astro -y
npx skills add addyosmani/web-quality-skills@web-quality-audit -y
npx skills add coreyhaines31/marketingskills@seo-audit -y
```
