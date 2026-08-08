import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://contactgilmore.github.io',
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      namespaces: {
        news: false,
        xhtml: false,
        video: false,
      },
    }),
  ],
});
