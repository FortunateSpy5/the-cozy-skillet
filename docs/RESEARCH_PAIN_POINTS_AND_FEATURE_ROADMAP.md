# Recipe Website Pain Points & Feature Roadmap for The Cozy Skillet

This document is mirrored from the research report generated for the repository.

See the full research artifact and documentation in the brain directory or review below.

## Summary of Core Pain Points (From Reddit r/Cooking, Hacker News & UX Audits):
1. **Content Bloat:** 2,000-word SEO life stories and legal copyright preambles.
2. **Cumulative Layout Shift & Ad Clutter:** Late-loading banners, sticky popups, and jumping screens.
3. **Ergonomic Friction in the Kitchen:** Screen timeouts while hands are dirty; "scrolling whiplash" between ingredients and instructions.
4. **Mental Math Under Pressure:** Difficulty scaling portions or converting between volume and grams on the fly.
5. **Local Pantry & Equipment Gaps:** Lack of Indian substitutes (malai, dahi, rock salt) and gas burner/kadai instructions.

## Phased Roadmap & Implementation Status:

### ✅ Phase 1: Core Kitchen Ergonomics & Mobile Friction (COMPLETED)
- [x] **Mobile Quick-Peek Ingredients Drawer:** Slide-up sheet accessible from mobile floating dock; lets cooks check amounts and prep cues on Step 4 without losing place or active timers.
- [x] **Mise-en-Place Preparation Tracker:** Real-time prep counter and visual completion bar (`X of Y prepped (Z%)`) to confirm ready ingredients before heat is turned on.
- [x] **Screen Wake Lock API:** Fullscreen hands-free Cook Mode and persistent toggle preventing phone/tablet screen timeout, with automatic re-acquisition on visibility changes.
- [x] **Integrated Web Audio Timers:** Wall-clock precision timers immune to background tab throttling, complete with acoustic A5 chime and mobile vibration.
- [x] **Indian Kitchen Pantry Substitutions:** Clear, practical substitutes (Amul butter, malai, dahi, kasuri methi, sooji, sendha namak) embedded in all recipe notes.

### ✅ Phase 2: Baking Architecture & Precision Scaling (COMPLETED)
- [x] **Pure OTG Standards:** 100% Oven Toaster Griller calibration (15-min preheat, explicit rod modes, rack slots by capacity, top-rod foil tent cues).
- [x] **Dynamic Baker's Percentage Engine:** Dynamic 4th unit toggle (`Dual | Grams (g) | Cups | Baker's %`) displaying ingredient weights relative to base flour weight ($100\%$).
- [x] **Whole-Batch Multipliers & Vessel Warning:** Locked whole-batch scaling (`0.5x`, `1x`, `2x`) with pan-crowding warning banner for doubled dough batches.
- [x] **Climate-Aware Proofing Timers:** Seasonal fermentation toggles (`[☀️ Warm Kitchen (>28°C)]` vs `[❄️ Cool/AC Kitchen (<24°C)]`) dynamically updating step timer buttons.
- [x] **Private Cook's Notes:** Client-side local notes persisted across browser sessions via `localStorage`.
- [x] **1-Tap WhatsApp & Clipboard Exporter:** Formatted shopping list export with quantities and categories.
- [x] **Dual Unit System:** Instant toggle between Dual, Metric (grams/ml), and Volume (cups/spoons).

### 🔮 Phase 3: Future Advanced Tools (PLANNED)
- [ ] **Skillet & Pan Size Converter:** Dynamic ratio calculator for switching between 10", 12", and traditional kadai geometries.
- [ ] **Stovetop Flame & Induction Wattage Indicators:** Preset thermal guidance mapping gas flame levels to induction wattage (e.g., 800W simmer, 1400W sear).
- [ ] **Offline Progressive Web App (PWA) Support:** Service worker caching for complete offline kitchen operation without network access.
