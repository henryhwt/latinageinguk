// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(([key, val]) => [key, val.lang ?? key])
        ),
      },
    }),
  ],
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  site: 'https://latinageinguk.co.uk',
  vite: {
    plugins: [tailwindcss()],
  },
});