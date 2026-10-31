# The Cozy Skillet — Project Architecture & Knowledge Base

This document provides a technical blueprint of the architecture, file topology, component hierarchy, client-side state engines, and deployment pipeline powering **The Cozy Skillet**.

---

## 1. System Architecture Overview

```
                                  GITHUB MAIN
                                       │
                              (Netlify CI/CD Trigger)
                                       │
                                       ▼
                       ASTRO 5 STATIC SITE GENERATOR (SSG)
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        ▼                              ▼                              ▼
CONTENT COLLECTIONS            TAILWIND CSS v4               VITE STATIC BUNDLER
(Zod Schema & Markdown)     (@tailwindcss/vite)             (Immutable /_astro/*)
        │                              │                              │
        └──────────────────────────────┼──────────────────────────────┘
                                       │
                                       ▼
                             DIST/ STATIC DIRECTORY
                            (Zero-JS by Default HTML)
                                       │
                                       ▼
                        NETLIFY HIGH-PERFORMANCE CDN
```

---

## 2. File & Directory Topology

```
the-cozy-skillet/
├── .agents/                        # Machine-readable knowledge base & agent skills
│   ├── skills/
│   │   ├── astro/                  # Astrolicious framework agent skill
│   │   ├── web-quality-audit/      # Lighthouse & Core Web Vitals audit skill
│   │   ├── seo-audit/              # Structured data & technical SEO skill
│   │   └── cozy-recipe-creator/    # Specialized recipe authoring runbook
│   └── PROJECT_KNOWLEDGE_BASE.md   # This document
│
├── src/
│   ├── components/                 # Reusable UI & Kitchen Ergonomics
│   │   ├── Header.astro            # Top navigation & search modal trigger
│   │   ├── Footer.astro            # Global cozy footer & network links
│   │   ├── RecipeCard.astro        # Recipe listing card with badges
│   │   ├── IngredientList.astro    # Interactive checklist & serving scaler
│   │   ├── InstructionList.astro   # Step-by-step instructions & timer triggers
│   │   ├── CookModeModal.astro     # Fullscreen hands-free cooking interface
│   │   ├── CooksNotes.astro        # Client-side notes persisted in localStorage
│   │   └── GroceryExporter.astro   # 1-tap WhatsApp & clipboard shopping exporter
│   │
│   ├── content/                    # Markdown & MDX recipe repository
│   │   └── recipes/                # Single source of truth for all recipe files
│   │
│   ├── data/                       # Static registries & site configurations
│   │   ├── categories.ts           # Categories & Cuisines taxonomy definitions
│   │   └── siteConfig.ts           # Global brand settings & metadata
│   │
│   ├── layouts/                    # Base HTML page wrappers
│   │   ├── Layout.astro            # Global layout (head, SEO, header, footer)
│   │   └── RecipeLayout.astro      # 2-column ergonomic split recipe layout
│   │
│   ├── pages/                      # File-based routing (Astro SSG)
│   │   ├── index.astro             # Home: Hero, category pills, recipe grid
│   │   ├── about.astro             # About: Zero-fluff culinary mission
│   │   ├── 404.astro               # Custom cozy 404 page
│   │   ├── categories.astro        # Master categories & cuisines index
│   │   ├── search.astro            # Real-time client-side ingredient search
│   │   ├── rss.xml.ts              # RSS feed generator
│   │   ├── baking/index.astro      # Dedicated Baking Hub (3 buckets)
│   │   ├── category/[category].astro # Dynamic category routes
│   │   ├── cuisine/[cuisine].astro   # Dynamic cuisine routes
│   │   └── recipes/[...slug].astro   # Dynamic individual recipe views
│   │
│   ├── styles/
│   │   └── global.css              # Tailwind v4 import & .prose typography isolation
│   │
│   └── content.config.ts           # Astro content collection schema with Zod
│
├── docs/                           # Human-readable architectural documentation
├── public/                         # Static assets (images, favicons, robots.txt)
├── AGENTS.md                       # Machine-readable agent guidelines
├── BEST_PRACTICES.md               # Technical & coding standards cheat-sheet
├── CONTENT_STYLE_GUIDE.md          # Recipe authoring & measurement standards
├── astro.config.mjs                # Astro 5 core configuration
├── netlify.toml                    # Netlify headers, redirects & caching
├── package.json                    # Project dependencies & scripts
├── skills.sh                       # Agent skills synchronization script
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## 3. Interactive Kitchen State Engines

The Cozy Skillet adopts a **Zero-JS by Default** philosophy. JavaScript is never loaded for layout rendering, SEO, or basic browsing. Client-side scripts are isolated to progressive enhancement in kitchen tools:

### A. Dynamic Serving Scaler (`src/components/IngredientList.astro`)
* **Mechanism:** Every numerical amount renders with a `data-base="[value]"` attribute in the HTML.
* **Calculation:** Clicking `0.5x`, `1x`, `2x`, or `3x` triggers vanilla DOM math:
  $$\text{Adjusted Amount} = \text{Base Amount} \times \text{Multiplier}$$
* Recalculates both volume and metric weights (`g`/`ml`) synchronously with 0ms latency.

### B. Screen Wake Lock Engine (`src/components/CookModeModal.astro`)
* **Mechanism:** On clicking **"Start Cook Mode"**, requests `navigator.wakeLock.request('screen')`.
* **Kitchen Safety:** Keeps phone/tablet display continuously illuminated while hands are messy.
* **Auto-Release:** Releasing occurs when the modal is closed, on `visibilitychange` (app minimized), or when the user navigates away.

### C. Acoustic Step Timers (`src/components/InstructionList.astro`)
* **Mechanism:** In-browser countdown bar using `setInterval`.
* **Web Audio API:** At `remainingSeconds <= 0`, synthesizes an $880\text{ Hz}$ sine wave chime using an `AudioContext` oscillator, eliminating heavy external MP3 audio asset downloads.
* **Haptic Vibration:** Calls `navigator.vibrate([200, 100, 200])` on supported mobile devices.

### D. Private Local Notes (`src/components/CooksNotes.astro`)
* **Mechanism:** Textarea listens for debounced `input` events ($500\text{ ms}$).
* **Storage:** Writes to `window.localStorage.setItem('cozy-skillet-note-[slug]', text)`.
* **Privacy:** Notes never leave the user's browser; 100% private with no authentication layer required.

### E. Client-Side Ingredient Search (`src/pages/search.astro`)
* **Mechanism:** At build time, all recipe ingredients, titles, categories, and tags are pre-compiled into a lightweight JSON array in the page's `data-index` attribute.
* **Filtering:** Instant multi-field substring evaluation on `input` events with zero network latency.

---

## 4. Content Collection Schema Standard (`src/content.config.ts`)

```ts
const recipes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().default('/images/recipes/default-skillet.jpg'),
    imageAlt: z.string().optional(),
    categories: z.array(z.string()).default(['Skillet Mains & Curries']),
    bakingType: z.enum(['Breads & Flatbreads', 'Cakes & Tea Loaves', 'Cookies, Brownies & Bars']).optional(),
    cuisine: z.array(z.string()).default(['General']),
    tags: z.array(z.string()).default([]),
    dietary: z.array(z.string()).default([]),
    difficulty: z.enum(['Easy', 'Medium', 'Advanced']).default('Easy'),
    prepTimeMinutes: z.number().default(10),
    cookTimeMinutes: z.number().default(20),
    servings: z.number().default(4),
    equipment: z.array(z.string()).default(['Skillet']),
    ingredients: z.array(
      z.object({
        category: z.string().default('Ingredients'),
        items: z.array(
          z.object({
            name: z.string(),
            amount: z.union([z.number(), z.string()]).optional(),
            unit: z.string().optional(),
            metricAmount: z.union([z.number(), z.string()]).optional(),
            metricUnit: z.string().optional(),
            notes: z.string().optional(),
          })
        ),
      })
    ),
    instructions: z.array(
      z.object({
        step: z.number(),
        title: z.string().optional(),
        text: z.string(),
        durationMinutes: z.number().optional(),
      })
    ),
    notes: z.array(z.string()).default([]),
    nutrition: z.object({
      calories: z.number().optional(),
      protein: z.string().optional(),
      carbs: z.string().optional(),
      fat: z.string().optional(),
    }).optional(),
  }),
});
```
