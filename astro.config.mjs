// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from './src/locales';

// https://astro.build/config
export default defineConfig({
    i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  //local host
  site: 'http://localhost:432',
  vite: {
    plugins: [tailwindcss()]
  }

});