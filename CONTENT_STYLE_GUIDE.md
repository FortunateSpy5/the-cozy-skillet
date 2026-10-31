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
categories: ["Skillet Mains & Curries"] # Breakfast, Rice & Noodles, Pasta, Snacks & Street Bites, Skillet Mains & Curries, Baking, Drinks & Beverages
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

### Preparation Cues, Mise-en-Place & Quick-Peek Readiness:
* **Descriptive Prep Cues in `notes:`** Every ingredient `notes:` field should specify the ingredient's prepped physical state (e.g., `"finely minced"`, `"patted dry with paper towels"`, `"softened at room temperature"`).
* **Mise-en-Place Progress Engine:** Checking off items advances the visual completion bar and counter (`X of Y prepped`), confirming full readiness before the cook turns on a burner or preheats the OTG.
* **Mobile Quick-Peek Integration:** The mobile slide-up drawer extracts both volume/metric quantities and these prep notes so the cook never has to scroll away from their active step to double-check amounts.

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
5. **Climate-Aware Proofing Timers:**
   * For baking recipes with yeast fermentation, define `summerDurationMinutes` and `winterDurationMinutes` on bulk rise and proofing steps.
   * Feeds the interactive kitchen temperature toggle (`☀️ Warm >28°C` vs `❄️ Cool <24°C`) to dynamically calibrate countdown timers.

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

---

## 6. Pure OTG Baking Standards & Golden Rules

All recipes in the `Baking` category are calibrated strictly for **100% Oven Toaster Griller (OTG) baking** (Bajaj, Morphy Richards, Borosil, Agaro, Wonderchef 25L–60L). Stovetop tawa or microwave workarounds are strictly banned for bread recipes.

### The 4 OTG Baking Commandments:
1. **The 15-Minute True Preheat:**
   * Always specify preheating for 15 minutes with **Both Rods On (Top + Bottom)**. Tabletop OTGs have smaller cavities that lose rapid heat upon door opening; a full preheat stabilizes the oven walls.
2. **Rack Position by OTG Capacity:**
   * **Small/Medium OTGs (19L–35L):** Always specify the **Lower-Middle Rack** (one notch below center) for loaves and buns so the close top heating element doesn't scorch domes before the crumb bakes through.
   * **Large OTGs (40L–60L):** Use the **Center Rack**.
   * **Crispy Base Breads (Focaccia / Boule):** Place on the **Lowest Rack Slot** directly above the bottom rod.
3. **Heating Rod Selection:**
   * Standard Yeast Breads: `Both Rods On (Top + Bottom) • Fan Off`. Radiant static heat provides maximum oven spring without prematurely drying out the crust.
4. **The Top-Rod Foil Shield Cue:**
   * Enriched doughs containing butter, honey, milk powder, or egg glazes brown rapidly under exposed top elements. Always specify an explicit tenting cue (e.g. *"Tent loosely with aluminium foil at 15 mins if already deep golden"*).

### Food Science Techniques for Indian Flour:
* **The Tangzhong Gel:** Cook 1 part maida to 5 parts liquid to 65°C to lock moisture into low-protein (9.5–10.5%) Indian flour.
* **The Boiling-Milk Atta Scald:** Pour boiling liquid over oats and 15–20% of whole wheat atta to soften sharp bran flakes and unlock natural malt sweetness.
* **Browned Amul Butter:** Simmer Amul butter 3–4 minutes until nutty hazelnut milk solids form; injects deep butterscotch caramel aromatics into brioche and sandwich loaves.
* **The 1 Tbsp Dahi Shortcut:** 15g room-temperature curd introduces natural lactic acid, replicating overnight sourdough depth in a 2-hour bake.

### 5. OTG Bain-Marie (Water Bath) Standards:
For delicate custards, crème caramels, and steamed bread puddings baked in an OTG:
* **Preheat & Rod Mode:** 170°C (338°F) for 15 minutes with Both Rods On • Fan Off.
* **Vessel Prep:** Place the baking tin inside a deeper roasting tray or cake tin. Pour boiling water into the outer tray until it reaches halfway up the walls of the inner tin.
* **Foil Seal Mandate:** Crimp aluminium foil tightly around the inner tin's rim to prevent dry skin formation and keep internal steam locked inside.

### 6. Air Fryer Baking Protocol (The 160°C / 4-Mould Rule):
For small-batch cupcakes, muffins, and quick-bake treats in countertop air fryers (Philips, Instant Pot, Agaro, Wonderchef 3.5L–5.5L):
1. **The 160°C (320°F) Temperature Ceiling:** High-velocity convection fans circulate intense dry heat that scorches muffin peaks before centers cook. Always drop bake temperature by 15°C–20°C compared to static OTG baking (bake at strictly 160°C / 320°F).
2. **The 4-Mould Spacing Limit:** Never overcrowd the basket. Place a maximum of 4 silicone or rigid paper moulds per batch with at least 1-inch radial clearance so circulating air wraps evenly around each mould.
3. **Rapid 3-Minute Preheat:** Compact 4L air fryer chambers stabilize in just 3 minutes at 160°C.
4. **Dual OTG Profile Requirement:** Always pair air fryer instructions with a full 12-cup OTG bake profile (175°C–180°C for 18–20 minutes) so cooks with tabletop ovens can bake the entire batch at once.

---

## 7. Artisanal Beverages, Refreshments & Stovetop Drinks

The Cozy Skillet embraces European-style stovetop thick hot chocolates, Indian cafe mocktails, and street-style sodas:

1. **Category Mapping:** Drinks are categorized under `Breakfast` or `Snacks & Street Bites` (with tags like `Quick (< 30 Mins)`, `Comfort`).
2. **Dual-Unit Metric & Liquid Precision:**
   * Liquids must provide both metric volume (`ml`) and kitchen volume (`cups`, `tbsp`).
   * Dry aromatics, salts, and sugars must define grams (`g`) and standard spoons (`tsp`, `tbsp`).
3. **Stovetop Heat & Slurry Gelatinization:**
   * Explicit temperatures in Celsius with Fahrenheit in parentheses (e.g. `75°C (167°F)`).
   * For starch-thickened drinks (cornstarch slurry), instruct gentle simmering on low flame with continuous whisking to activate starch gelatinization without scorching.
4. **The Gentle Muddle Protocol (Nimbu Soda & Mojitos):**
   * Specify pressing fresh mint 4 to 5 times against sugar crystals using a wooden spoon or muddler to release volatile menthol oils into citrus juice.
   * Explicitly warn against shredding or pounding mint leaves to prevent releasing bitter chlorophyll veins.
5. **Indian Kitchen Street & Pantry Notes:**
   * Every beverage must document regional pantry options under `notes:` (e.g. Shahi Masala Soda twist with *kala namak* and *bhuna jeera*, Amul Gold 6% milk fat calibration vs. toned milk with fresh malai).


