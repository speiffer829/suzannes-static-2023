import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: import.meta.env.PROD ? 'http://meantime.spenserpeiffer.com' : 'http://localhost:4321',
	integrations: [tailwind(), sitemap(), mdx()],
	build: {},
	devToolbar: {
		enabled: false
	}
});
