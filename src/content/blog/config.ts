import { z, defineCollection } from 'astro:content';

const blog_collection = defineCollection(() => {
	schema: z.object({
		title: z.string(),
		date: z.string(),
		description: z.string().optional(),
		img: z.string().optional()
	});
});

export const collections = {
	blog: blog_collection
};
