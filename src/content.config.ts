import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

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
    proofTimeMinutes: z.number().optional(),
    hydration: z.union([z.number(), z.string()]).optional(),
    bakerFlourWeight: z.number().optional(),
    servings: z.number().default(4),
    equipment: z.array(z.string()).default(['Skillet']),
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
    nutrition: z
      .object({
        calories: z.number().optional(),
        protein: z.string().optional(),
        carbs: z.string().optional(),
        fat: z.string().optional(),
      })
      .optional(),
    otgProfile: z
      .object({
        preheatTempC: z.number(),
        preheatMins: z.number().default(15),
        bakeTempC: z.number(),
        rodMode: z.string(),
        rackPosition: z.string(),
        bakingVessel: z.string(),
        foilTentCue: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { recipes };
