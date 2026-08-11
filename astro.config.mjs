import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://19559220516.github.io',
  base: '/my-blog',
  integrations: [mdx()],
})
