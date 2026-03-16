import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gebaeudeenergiegesetz-geg-ratgeber-fuer-vermieter.de',
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'de',
    locales: ['de']
  }
});
