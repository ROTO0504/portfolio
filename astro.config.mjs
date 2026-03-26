import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import cloudflare from "@astrojs/cloudflare"

export default defineConfig({
  integrations: [react()],
  output: "server",
  vite: {
    resolve: {
      dedupe: ["react", "react-dom"],
    },
    ssr: {
      noExternal: ["react", "react-dom"],
    },
  },
  adapter: cloudflare(),
})
