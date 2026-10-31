# The Cozy Skillet 🍳

> **Functional First, Zero Fluff.** A personal digital cookbook and recipe repository built for real home kitchens.

The Cozy Skillet is the sister culinary project to [The Cozy Cart](https://thecozycart.online/). Designed with a shared warm, rustic-editorial palette (terracotta, warm pumpkin, cream, espresso, and linen sand), it is engineered from the ground up to solve the biggest frustration in modern online recipe browsing: **no 2,000-word essays before the ingredients.**

---

## ✨ Features

- **No-Fluff Layout:** Ingredients, timings, measurements, and step-by-step instructions immediately accessible.
- **Interactive Ingredient Checklists:** Check off ingredients as you prep at your cutting board.
- **Dynamic Serving Scaler:** Real-time calculation for `0.5x`, `1x`, `2x`, and `3x` serving portions without page reloads.
- **Cook Mode (Kitchen Mode):** Fullscreen, high-contrast, distraction-free cooking view with keyboard navigation and the `Screen Wake Lock API` to prevent your phone/tablet display from sleeping while cooking.
- **Integrated Step Timers:** In-browser countdown timers with acoustic chimes for simmering, resting, and searing.
- **Instant Ingredient Search:** Client-side search engine allowing you to search by ingredients currently in your fridge.
- **Recipe Schema.org JSON-LD:** Structured data formatted to Google Recipe Rich Snippet standards.
- **Print Friendly:** Dedicated print stylesheet for ink-saving, ad-free paper recipe cards.

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
