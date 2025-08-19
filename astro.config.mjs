// @ts-check
import { defineConfig } from 'astro/config';
import prettierResponse from '@altano/astro-prettier-response';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [prettierResponse()],
});

