// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

export default defineConfig({
  site,
  output: "static",
  build: { inlineStylesheets: "always" },
  integrations: [
    icon({
      svgoOptions: { multipass: false, plugins: [{ name: "preset-default", params: { overrides: { cleanupIds: false } } }] },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
