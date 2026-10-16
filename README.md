# Kolega Bisnis — Kepatuhan Pajak Bulanan

Landing page layanan kepatuhan pajak bulanan Kolega Bisnis.

Dibuat dengan [Astro](https://astro.build), TypeScript, Tailwind CSS, dan GSAP.

## Menjalankan

Butuh Node.js 22.12 atau lebih baru.

```bash
npm install
npm run dev       # http://localhost:4321/
```

## Mengubah konten

Teks, nomor WhatsApp, email, alamat, dan SEO ada di `src/data/site.ts`.

```
src/
├─ assets/images/   gambar
├─ components/      komponen halaman
├─ data/site.ts     konten
├─ icons/           ikon SVG
├─ layouts/         layout & <head>
├─ pages/           halaman
├─ scripts/         animasi & interaksi
└─ styles/          style global & tema
```

## Build & deploy

Ada dua mode build. Keduanya menghasilkan folder `dist/`.

| Perintah | Dipakai untuk | Base path | Canonical |
| --- | --- | --- | --- |
| `npm run build` | Vercel — https://monthly-tax-services.kolegabisnis.com/ | `/` | `https://monthly-tax-services.kolegabisnis.com/` |
| `npm run build:wp` | Cadangan bila halaman dipasang di WordPress | `/lp/pajak-bulanan/` | `https://kolegabisnis.com/services/pajak-bulanan/` |

**Vercel (utama)** — setiap push ke `main` otomatis di-deploy. Pengaturan build ada di `vercel.json` (`npm run build`, output `dist`). Logo mengarah ke https://kolegabisnis.com/ dan tombol "Kembali ke Services" ke https://kolegabisnis.com/services/.

**WordPress (opsional)** — halaman tampil di `/services/pajak-bulanan/`, file-nya disimpan di `/lp/pajak-bulanan/` di root WordPress.

1. Jalankan `npm run build:wp`.
2. Upload seluruh isi folder `dist/` ke `/lp/pajak-bulanan/`.

Cek hasil build WordPress secara lokal dengan `npm run preview:wp` (http://localhost:4321/lp/pajak-bulanan/).

Domain, canonical, dan link per mode diatur di `astro.config.mjs` dan `src/data/site.ts`.
