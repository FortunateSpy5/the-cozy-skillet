export interface CategoryMeta {
  name: string;
  slug: string;
  emoji: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    name: 'Skillet Mains & Curries',
    slug: 'skillet-mains',
    emoji: '🍳',
    description: 'Hearty weeknight curries, gravies, and seared proteins made in cast iron skillets or heavy kadais.',
  },
  {
    name: 'Pasta',
    slug: 'pasta',
    emoji: '🍝',
    description: 'Stovetop and baked pasta dishes infused with garlic, rich cheeses, and vibrant spices.',
  },
  {
    name: 'Rice & Noodles',
    slug: 'rice-and-noodles',
    emoji: '🍚',
    description: 'Satisfying one-pan rice and noodle meals — from Indo-Chinese noodles to stovetop pulaos.',
  },
  {
    name: 'Snacks & Street Bites',
    slug: 'snacks-and-street-bites',
    emoji: '🍢',
    description: 'High-flavor evening snacks, tandoori-style tikkas, kathi rolls, and tawa toasties.',
  },
  {
    name: 'Breakfast',
    slug: 'breakfast',
    emoji: '🥞',
    description: 'Quick morning fuel, savory bhurjis, wholesome chillas, and skillet egg dishes.',
  },
  {
    name: 'Baking',
    slug: 'baking',
    emoji: '🥖',
    description: 'Precision metric baking — artisanal skillet focaccias, tea-time loaf cakes, and chewy brownies.',
  },
  {
    name: 'Drinks & Beverages',
    slug: 'drinks-and-beverages',
    emoji: '🍹',
    description: 'Artisanal cafe refreshments, stovetop hot chocolates, spiced chais, and fizzy street sodas.',
  },
];

export interface CuisineMeta {
  name: string;
  slug: string;
  emoji: string;
  description: string;
}

export const CUISINES: CuisineMeta[] = [
  {
    name: 'Indian',
    slug: 'indian',
    emoji: '🇮🇳',
    description: 'Homestyle regional recipes, kadai gravies, tawa specials, and comforting dals.',
  },
  {
    name: 'Continental',
    slug: 'continental',
    emoji: '🌿',
    description: 'European, Italian, and bistro classics thoughtfully adapted for Indian pantry realities.',
  },
  {
    name: 'Chinese',
    slug: 'chinese',
    emoji: '🥢',
    description: 'Indo-Chinese street favorites, chili garlic noodles, fried rice, and wok-style pan sears.',
  },
  {
    name: 'Mediterranean',
    slug: 'mediterranean',
    emoji: '🫒',
    description: 'Olive oil, garlic, lemon, and fresh herbs paired with crispy seared meats and vegetables.',
  },
  {
    name: 'Mexican',
    slug: 'mexican',
    emoji: '🌮',
    description: 'Skillet fajitas, loaded bean skillets, cheesy quesadillas, and zesty salsas.',
  },
  {
    name: 'Fusion',
    slug: 'fusion',
    emoji: '✨',
    description: 'Bold culinary mashups blending global formats with aromatic Indian spices.',
  },
];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getCuisineBySlug(slug: string): CuisineMeta | undefined {
  return CUISINES.find((c) => c.slug === slug);
}
