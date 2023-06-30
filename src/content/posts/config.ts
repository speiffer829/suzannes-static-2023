import { z, defineCollection } from 'astro:content';

const posts_collection = defineCollection(() => {
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.string(),
			updated: z.string().optional(),
			description: z.string().optional(),
			img: image().refine((i) => i.width >= 600, {
				message: 'Image width must be at least 600px'
			})
		});
});

export const collections = {
	posts: posts_collection
};
