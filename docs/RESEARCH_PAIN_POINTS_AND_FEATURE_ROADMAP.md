# Recipe Website Pain Points & Feature Roadmap for The Cozy Skillet

This document is mirrored from the research report generated for the repository.

See the full research artifact and documentation in the brain directory or review below.

## Summary of Core Pain Points (From Reddit r/Cooking, Hacker News & UX Audits):
1. **Content Bloat:** 2,000-word SEO life stories and legal copyright preambles.
2. **Cumulative Layout Shift & Ad Clutter:** Late-loading banners, sticky popups, and jumping screens.
3. **Ergonomic Friction in the Kitchen:** Screen timeouts while hands are dirty; "scrolling whiplash" between ingredients and instructions.
4. **Mental Math Under Pressure:** Difficulty scaling portions or converting between volume and grams on the fly.
5. **Local Pantry & Equipment Gaps:** Lack of Indian substitutes (malai, dahi, rock salt) and gas burner/kadai instructions.

## Proposed Phased Roadmap:
- **Phase 1 (Immediate UX):**
  - In-line ingredient quantities embedded directly inside instruction steps (eliminates scrolling).
  - Simultaneous multi-step timers in a floating dock.
  - One-click Indian pantry substitution helper pills.
- **Phase 2 (Convenience & Personalization):**
  - Private "Cook's Notes" saved locally in browser (`localStorage`).
  - 1-Tap clean WhatsApp/Notes grocery list exporter.
  - Weight (g) vs. Volume (cups) display toggle.
- **Phase 3 (Advanced Tools):**
  - Skillet & pan size converter (10" to 12" / Kadai scaling).
  - Stovetop flame & induction wattage indicators.
  - Offline Progressive Web App (PWA) support.
