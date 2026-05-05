import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// User/org Pages root: served at https://accuoa.github.io/ — no base path.
export default defineConfig({
  site: 'https://accuoa.github.io',
  base: '/',
  integrations: [tailwind()],
});
