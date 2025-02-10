// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
 site: 'https://omgrod.me/daily-geode',
    base: 'daily-geode',
	integrations: [
		starlight({
			title: 'The Daily Geode',
			pagination: false,
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				alt: 'The Daily Geode',
				replacesTitle: true
			},
			social: {
				github: 'https://github.com/OmgRod/DailyGeodeWebsite',
			},
		}),
	],
     vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
    },
});
