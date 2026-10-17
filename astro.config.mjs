// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://rubenzor25-commits.github.io',
  base: process.env.BASE_PATH ?? '/sofas-nacho-y-ana',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
