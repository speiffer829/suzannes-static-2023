import { z, defineCollection } from 'astro:content';

const posts_collection = defineCollection(() => {
	schema: z.object({
		title: z.string(),
		date: z.string(),
		updated: z.string().optional(),
		description: z.string().optional(),
		img: z.string().optional()
	});
});

export const collections = {
	posts: posts_collection
};
