import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'

import react from '@astrojs/react'

const TEMP_LOCAL_URL = 'http://localhost:4321/'

const { PUBLIC_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

const site = import.meta.env.DEV ? TEMP_LOCAL_URL : PUBLIC_URL

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site,
  build: {
    assetsPrefix: PUBLIC_URL,
  },
})
