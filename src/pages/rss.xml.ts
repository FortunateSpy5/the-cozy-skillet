import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_CONFIG } from '../data/siteConfig';

export async function GET(context: APIContext) {
  const recipes = await getCollection('recipes');
  const sortedRecipes = [...recipes].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${SITE_CONFIG.name} — Tested Stovetop & Baking Recipes`,
    description: SITE_CONFIG.description,
    site: context.site?.toString() || SITE_CONFIG.siteUrl,
    items: sortedRecipes.map((r) => {
      const slug = r.id.replace(/\.(md|mdx)$/, '');
      return {
        title: r.data.title,
        pubDate: r.data.pubDate,
        description: r.data.description,
        link: `/recipes/${slug}/`,
        categories: [...r.data.categories, ...r.data.cuisine],
      };
    }),
    customData: `<language>en-IN</language>`,
  });
}
