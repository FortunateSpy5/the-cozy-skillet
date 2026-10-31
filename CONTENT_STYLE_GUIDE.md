# The Cozy Skillet — Recipe Content & Style Guide

This document is the canonical editorial guide for writing, formatting, and structuring recipes for **The Cozy Skillet**. It ensures every dish adheres to our **"Functional First, Zero Fluff"** philosophy while being completely accessible to real Indian kitchens.

---

## 1. The Core Philosophy: "Zero Fluff"

### 🚫 The Banned Elements:
* **Autobiographical Essays:** Never write childhood recollections, nostalgic travelogues, or personal diary entries before the recipe.
* **SEO Keyword Stuffing:** Avoid repeated promotional paragraphs intended solely for search engine crawlers.
* **Deceptive Jump Buttons:** Do not insert ads or lead-magnets between quick links and actual ingredients.

### ✅ What Every Recipe Must Deliver:
1. **Immediate Frontmatter Access:** Ingredients, exact measurements, equipment, timings, and steps appear instantly.
2. **Short, Appetizing Description:** A crisp, 1–2 sentence summary highlighting the core texture, flavor, and technique.
3. **Safety & Heat Standards:** Accurate internal temperatures in Celsius (°C) and realistic stove flame controls.

---

## 2. Recipe Frontmatter Standard

All recipes live in `src/content/recipes/` as `.mdx` files validated via Astro Content Collections (`src/content.config.ts`).

```yaml
---
title: "One-Pan Garlic Butter Skillet Chicken"
description: "Crispy skin-on chicken thighs seared in a cast iron skillet and basted with foaming garlic butter, lemon, and fresh rosemary."
pubDate: 2026-10-31
image: "/images/recipes/garlic-butter-skillet-chicken.jpg"
imageAlt: "Golden crispy skillet chicken thighs nestled in garlic butter herb sauce"
categories: ["Skillet Mains & Curries"] # Breakfast, Rice & Noodles, Pasta, Snacks & Street Bites, Skillet Mains & Curries, Baking
bakingType: null # (Only when categorized as Baking): Breads & Flatbreads, Cakes & Tea Loaves, Cookies, Brownies & Bars
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
        notes: "patted thoroughly dry with kitchen paper"
      - name: "kosher salt"
        amount: 1
        unit: "tsp"
        metricAmount: 6
        metricUnit: "g"
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
  - "Indian Kitchen Note: If fresh rosemary is unavailable, fresh coriander stems plus kasuri methi or dried herbs provide wonderful depth."
  - "Storage: Keeps in an airtight container in the fridge for up to 3 days."
nutrition:
  calories: 395
  protein: "34g"
  carbs: "2g"
  fat: "28g"
---
A fast, reliable weeknight dinner using one skillet. Crisp skin, tender meat, and an irresistible pan jus.
```

---

## 3. Dual-Measurement Standards (Volume & Metric Weight)

To guarantee precision for both weeknight cooks and bakers, **every ingredient must define both volume and metric weight**.

### Standard Unit Mapping
* **Volume:** `cups`, `tbsp`, `tsp`, `pieces`, `cloves`, `sprigs`.
* **Metric Weight:** `g` (grams) or `kg` (kilograms).
* **Metric Liquid:** `ml` (milliliters) or `L` (liters).

### Indian Pantry Density Reference Table:

| Ingredient | 1 Cup Volume | 1 Tbsp | 1 Tsp |
| :--- | :--- | :--- | :--- |
| **All-Purpose Flour (Maida)** | 120g | 8g | 2.5g |
| **Whole Wheat Flour (Atta)** | 130g | 8.5g | 2.8g |
| **Granulated Sugar** | 200g | 12.5g | 4g |
| **Brown Sugar (Packed)** | 220g | 14g | 4.5g |
| **Butter / Ghee** | 225g | 15g | 5g |
| **Whole Milk / Water** | 240ml | 15ml | 5ml |
| **Curd / Dahi (Whisked)** | 240g | 15g | 5g |
| **Paneer (Crumbled/Cubed)** | 150g | — | — |
| **Basmati Rice (Raw)** | 200g | 13g | 4g |
| **Mustard Oil / Cooking Oil** | 220ml | 14ml | 4.5ml |
| **Fine Table Salt** | — | 18g | 6g |

---

## 4. Writing Instruction Steps

1. **Imperative Action Verbs First:** Start every step with a clear action verb:
   * *Good:* `"Whisk the curd, mustard oil, and spices until smooth."`
   * *Avoid:* `"You are now going to want to take a bowl and whisk the curd."`
2. **Concrete Visual & Sensory Anchors:**
   * Instead of *"cook until done"*, write *"sear undisturbed for 10–12 minutes until deep golden brown and the skin releases naturally from the pan."*
3. **Integrated Timer Tagging (`durationMinutes`):**
   * If an instruction step requires waiting, simmering, resting, or baking, always set `durationMinutes: [number]`.
   * This automatically generates an interactive in-browser countdown button with an acoustic alert chime.
4. **Stovetop Heat Guidance:**
   * Always indicate flame level: `Low flame (chhoti aanch)`, `Medium flame`, or `High flame (tez aanch)`.
   * If induction-friendly, specify approximate wattage (e.g., `800W simmer`, `1400W sear`).

---

## 5. Indian Kitchen Adaptability & Substitutions

Every non-Indian recipe must provide an **Indian Kitchen Note** under `notes:`:

* **Dairy:**
  * *Heavy Cream* $\rightarrow$ Fresh milk malai whisked smooth, or 25% Amul Fresh Cream.
  * *Buttermilk* $\rightarrow$ 3 tbsp fresh dahi whisked with $\frac{1}{2}$ cup water.
  * *Sour Cream* $\rightarrow$ Hung curd (chakka) with a squeeze of fresh lemon juice.
* **Cheese:**
  * *Cheddar / Gouda* $\rightarrow$ Amul processed cheese tin/block for silky melting.
  * *Ricotta* $\rightarrow$ Fresh homemade chenna/paneer drained lightly.
* **Herbs & Aromatics:**
  * *Fresh rosemary/thyme* $\rightarrow$ Fresh coriander stems plus a pinch of dried oregano or crushed kasuri methi.
  * *Kosher salt* $\rightarrow$ Standard rock salt (sendha namak) or table salt (reduce amount by 25%).
* **Cookware:**
  * If a recipe specifies a cast-iron skillet, provide alternatives for a seasoned cast-iron dosa tawa or heavy stainless steel kadai.
