export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  siteUrl: string;
  author: string;
  authorBio: string;
  sisterSiteUrl: string;
  sisterSiteName: string;
  googleAnalyticsId?: string;
}

export const SITE_CONFIG: SiteConfig = {
  name: 'The Cozy Skillet',
  tagline: 'Functional, tested, no-fluff home cooking recipes',
  description: 'A cozy personal digital cookbook built for real home kitchens. Straightforward ingredients, interactive scaling, timers, and step-by-step guidance without long essays.',
  siteUrl: 'https://thecozyskillet.com',
  author: 'The Cozy Kitchen',
  authorBio: 'Passionate home cook focusing on comforting one-pan meals, skillet dinners, and practical pantry staples.',
  sisterSiteUrl: 'https://thecozycart.online',
  sisterSiteName: 'The Cozy Cart',
};
