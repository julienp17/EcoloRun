import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://ecolo-run.vercel.app/',
  integrations: [tailwind(), sitemap(), compressor()]
});