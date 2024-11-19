import { defineNuxtConfig } from "nuxt/config";
import vuetify from "vite-plugin-vuetify";
import { inject } from "@vercel/analytics";

export default defineNuxtConfig({
  modules: ["nuxt-microcms-module"],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": (config) => {
      config.plugins?.push(vuetify());
    },
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    define: {
      "process.env.DEBUG": false,
    },
  },
  css: ["@/assets/main.scss"],
  rootDir: "./src",
  vuetify: {
    customProperties: true,
  },
  inject: inject(),
});
