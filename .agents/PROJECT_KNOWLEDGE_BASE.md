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
│   │   ├── OTGBakeSettings.astro   # Pure OTG heating rod, rack position & preheat card
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
│   ├── utils/                      # Optimization & Helper Utilities
│   │   └── images.ts               # Netlify Edge Image CDN responsive WebP helper
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

### F. Baker's Percentage Engine (`src/components/IngredientList.astro`)
* **Mechanism:** Dynamic 4th unit toggle (`Dual | Grams (g) | Cups | Baker's %`) available for `Baking` recipes.
* **Formula:** $\text{Baker's \%} = \frac{\text{Ingredient Metric Weight (g)}}{\text{Base Flour Weight (g)}} \times 100\%$
* Base flour weight is defined explicitly via `bakerFlourWeight` or aggregated from non-optional flour/maida/atta items.
* **Vessel Safety:** Locks scaling to whole-batch multipliers (`0.5x`, `1x`, `2x`) and renders `#baking-scale-warning` on $\ge 2\times$.

### G. Climate-Aware Proofing Timers (`src/components/InstructionList.astro`)
* **Mechanism:** Interactive seasonal kitchen toggle: `[☀️ Warm Kitchen (>28°C)]` vs `[❄️ Cool/AC Kitchen (<24°C)]`.
* **State:** Modifies `data-minutes` and `.timer-label` on step timer buttons dynamically, feeding the countdown clock with seasonally adjusted fermentation windows.

### H. Pure OTG Baking Architecture (`src/components/OTGBakeSettings.astro`)
* **Standard:** All baking recipes standardize on 100% Oven Toaster Griller tabletop baking.
* **Parameters:** `preheatTempC` (15m true preheat with both rods on), `bakeTempC`, `rodMode`, `rackPosition`, `bakingVessel`, and top-rod `foilTentCue`.

### I. Mobile Quick-Peek Ingredients Drawer (`src/layouts/RecipeLayout.astro`)
* **Mechanism:** Triggered from the fixed mobile floating dock (`#mobile-peek-ingredients-btn`).
* **Ergonomics:** Renders ingredient amounts, units, metric conversions, and prep notes in a slide-up drawer modal sheet (`#mobile-ingredients-drawer`), eliminating vertical "scrolling whiplash" while reading multi-step instructions on small viewports.
* **Dismissal:** Instant one-tap backdrop click, close button, or jump-to-full-interactive-list navigation.

### J. Mise-en-Place Prep Tracker (`src/components/IngredientList.astro`)
* **Mechanism:** Real-time visual progress tracker measuring kitchen readiness before cooking begins.
* **State Engine:** Updates `#prep-progress-text` and `#prep-progress-bar` dynamically as checkboxes are toggled:
  $$\text{Progress} = \frac{\text{Checked Items}}{\text{Total Items}} \times 100\%$$
* Completed ingredients render with strikethrough text and `Fresh Sage (#4A7C59)` accent highlights.

### K. Client-Side Subdirectory Routing (`<ClientRouter />`)
* **Mechanism:** Integrated Astro 5 View Transitions via `<ClientRouter />` in `src/layouts/Layout.astro`.
* **Zero-Flicker Architecture:** Eliminates traditional MPA page unloads. Clicks to subdirectories (`/baking/`, `/categories/`, `/recipes/[slug]/`) swap document bodies via client-side fetch, preserving styles and memory cache.
* **Lifecycle Hooks:** All interactive kitchen components attach listeners to `astro:page-load` and clean up intervals on `astro:before-swap`.

### L. Edge Image CDN Pipeline (`src/utils/images.ts`)
* **Mechanism:** Transforms uncompressed full-resolution assets on Netlify Edge via `/.netlify/images`.
* **Responsive Delivery:** Recipe cards serve responsive WebP with `srcset` (`400w`, `640w`), reducing initial payload from 13.7 MB to ~750 KB. Search thumbnails render at 160×160 (~4.7 KB vs 1 MB raw).
* **Development Fallback:** Gracefully falls back to direct local files (`/images/recipes/...`) when `!import.meta.env.PROD` for offline DX.

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
    prepTimeMinutes: z.number().default(10), // Hands-on active prep time
    cookTimeMinutes: z.number().default(20), // Active cook or bake time
    proofTimeMinutes: z.number().optional(),  // Passive dough rising/fermentation time
    hydration: z.union([z.number(), z.string()]).optional(), // Baker's hydration percentage
    bakerFlourWeight: z.number().optional(), // Base flour weight in grams (100%)
    servings: z.number().default(4),
    equipment: z.array(z.string()).default(['Skillet']),
    otgProfile: z.object({
      preheatTempC: z.number(),
      preheatMins: z.number().default(15),
      bakeTempC: z.number(),
      rodMode: z.string(),
      rackPosition: z.string(),
      bakingVessel: z.string(),
      foilTentCue: z.string().optional(),
    }).optional(),
    ingredients: z.array(
      z.object({
        category: z.string().optional(),
        groupTitle: z.string().optional(),
        items: z.array(
          z.object({
            name: z.string(),
            amount: z.union([z.number(), z.string()]).optional(),
            unit: z.string().optional(),
            metricAmount: z.union([z.number(), z.string()]).optional(),
            metricUnit: z.string().optional(),
            notes: z.string().optional(),
            optional: z.boolean().default(false),
            boosterEffect: z.string().optional(),
            bakersPercentage: z.number().optional(),
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
        summerDurationMinutes: z.number().optional(),
        winterDurationMinutes: z.number().optional(),
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
