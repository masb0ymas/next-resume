import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import { defineConfig } from "astro/config"

const SERVER_PORT = 3000
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`
const LIVE_URL = "https://masb0ymas.my.id"

const SCRIPT = process.env.npm_lifecycle_script || ""
const isBuild = SCRIPT.includes("astro build")

let BASE_URL = LOCALHOST_URL

if (isBuild) {
  BASE_URL = LIVE_URL
}

// https://astro.build/config
export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [sitemap(), tailwind(), react()],
})
