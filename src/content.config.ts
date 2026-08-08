import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    thumbnail: z.string(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    seriesOrder: z.number().int().positive().optional(),
    seriesStatus: z.enum(['ongoing', 'complete']).optional(),
    layout: z.string().optional(),
    legacyPath: z.string().startsWith('/').optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
