// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

const base = process.env.BASE_PATH || "/";

const site = process.env.SITE_URL ?? (base === "/" ? "https://monthly-tax-services.kolegabisnis.com" : "https://kolegabisnis.com");

export default defineConfig({
  site,
  base,
  trailingSlash: "always",
  output: "static",
  build: {
    format: "directory",
    inlineStylesheets: "always",
  },
  integrations: [
    icon({
      svgoOptions: { multipass: false, plugins: [{ name: "preset-default", params: { overrides: { cleanupIds: false } } }] },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
