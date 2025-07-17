import { glob } from "astro/loaders";

import { z, defineCollection } from "astro:content";

const posts = defineCollection({
	loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/posts" }),
	schema: z.object({
		title: z.string(),
		publishedAt: z.string(),
		summary: z.string(),
		hero: z.string()
	})
});

export const collections = { posts };