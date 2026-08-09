import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    publishedAt: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
    thumbnail: z.string(),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/).optional(),
    categories: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
    series: z.string().optional(),
    seriesOrder: z.number().int().nonnegative().optional(),
    seriesStatus: z.enum(['ongoing', 'complete']).optional(),
    layout: z.string().optional(),
    legacyPath: z.string().startsWith('/').optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
