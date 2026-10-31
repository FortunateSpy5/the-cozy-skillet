---
name: cozy-recipe-creator
description: Guides the agent through crafting validated, zero-fluff, dual-measurement recipes for The Cozy Skillet when explicitly requested by the user.
---

# Cozy Recipe Creator Skill (`cozy-recipe-creator`)

Use this skill **ONLY when the user explicitly commands you to create, draft, or add a new recipe** to The Cozy Skillet.

> [!IMPORTANT]
> **Operational Boundary:** NEVER create, generate, or add new recipes unless the user explicitly commands you to do so.

---

## 1. Pre-Authoring Checklist

Before generating any recipe file:
1. **Target File Name:** Save as `src/content/recipes/[kebab-case-slug].mdx`.
2. **Consult Style Guides:**
   * Reference [`CONTENT_STYLE_GUIDE.md`](../../CONTENT_STYLE_GUIDE.md) for density conversions and writing tone.
   * Reference [`src/content.config.ts`](../../src/content.config.ts) for schema validation rules.

---

## 2. Recipe Drafting Workflow

### Step 1: Frontmatter Setup
Ensure all required fields are present:
* `title`: Concise, evocative recipe name.
* `description`: 1–2 crisp sentences highlighting flavor, texture, and pan technique.
* `pubDate`: Current date (`YYYY-MM-DD`).
* `categories`: Array of matching categories (`Skillet Mains & Curries`, `Pasta`, `Rice & Noodles`, `Snacks & Street Bites`, `Breakfast`, `Baking`, `Drinks & Beverages`).
* `bakingType`: If categorized as Baking, define one of: `Breads & Flatbreads`, `Cakes & Tea Loaves`, `Cookies, Brownies & Bars`.
* `cuisine`: Array of cuisines (`Indian`, `Chinese`, `Continental`, `Mediterranean`, `Mexican`, `Fusion`).
* `tags`: Array of practical tags (`One-Pan`, `Quick (< 30 Mins)`, `Tawa Special`, `One-Pot`, `High-Protein`).
* `dietary`: Array of dietary tags (`Vegetarian`, `Eggless`, `Gluten-Free`, `High-Protein`, `Low-Carb`).
* `difficulty`: `Easy`, `Medium`, or `Advanced`.
* `prepTimeMinutes` & `cookTimeMinutes`: Realistic kitchen timings.
* `servings`: Number of portions (default 2, 3, or 4).
* `equipment`: Essential cookware (e.g. `12-inch Cast Iron Skillet`, `Heavy Dosa Tawa`, `Stainless Steel Kadai`).

### Step 2: Dual Measurements
Every ingredient must include:
* `name`: Clean ingredient name.
* `amount`: Volume amount (`0.5`, `1`, `2`).
* `unit`: Volume unit (`cups`, `tbsp`, `tsp`, `pieces`, `cloves`).
* `metricAmount`: Exact metric weight/volume (`120`, `250`, `15`).
* `metricUnit`: Metric unit (`g` or `ml`).
* `notes`: Optional prep note (`finely minced`, `room temperature`, `patted dry`).

### Step 3: Instructions with Timers
* Every instruction begins with an **imperative action verb** (`Sear`, `Whisk`, `Flip`, `Sauté`, `Temper`).
* Include concrete visual anchors (e.g. *"until edges turn deep golden and release naturally from the pan"*).
* Flame guidance: Specify flame level (`Medium flame`, `Low simmer`, `High heat`).
* Timers: If the step requires unattended cooking, simmering, or resting, define `durationMinutes: [number]`.

### Step 4: Indian Kitchen Notes & Storage
Always provide:
1. **Indian Kitchen Note:** Practical substitutes for exotic items (e.g. *Fresh coriander stems for rosemary*, *Dahi for buttermilk*, *Amul cheese for cheddar*).
2. **Storage Tip:** Reheating and refrigeration guidance.

---

## 3. Post-Creation Verification

Immediately run diagnostics:
```bash
npm run check    # Verify TypeScript frontmatter schema (0 errors)
npm run build    # Verify static generation of the new recipe page
```
Report the new recipe slug and live preview URL (`http://localhost:4321/recipes/[slug]/`) to the user.
