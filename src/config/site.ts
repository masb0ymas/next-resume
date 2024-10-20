export const SITE_TITLE = "masb0ymas"
export const SITE_DESCRIPTION =
  "I write blog articles about web development and web implementation covering Web2, Web3, and DevOps"
export const TWITTER_HANDLE = "@masb0ymas"
export const MY_NAME = "N. Fajri"
export const MY_POSITION = "Software Engineer"

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE)
export const SITE_URL = BASE_URL.origin
