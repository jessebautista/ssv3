import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Customer Service Processes',
					autogenerate: { directory: 'CSP' },
				},
				{
					label: 'Technical Guide',
					autogenerate: { directory: 'TG' },
				},
			],
			components: {
				// Override the default TOC component.
				TableOfContents: './src/components/CodeInterpreter.astro',
			  },
		}),
		embeds(), mdx(),
	],
});
