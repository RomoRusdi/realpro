// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

// URL produksi: SITE_URL (manual) → domain produksi Vercel (otomatis) → localhost.
const site =
  process.env.SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321");

// https://astro.build/config
export default defineConfig({
  site,
  output: "static",
  // CSS kecil (±25 kB) → inline agar tidak memblokir render (Lighthouse)
  build: { inlineStylesheets: "always" },
  integrations: [
    icon({
      // Semua ikon adalah SVG lokal hasil ekspor Figma di src/icons.
      // Jangan biarkan SVGO mengubah ikon berwarna dari Figma
      svgoOptions: { multipass: false, plugins: [{ name: "preset-default", params: { overrides: { cleanupIds: false } } }] },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
