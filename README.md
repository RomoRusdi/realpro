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

| Perintah | Kapan dipakai | Base path |
| --- | --- | --- |
| `npm run build` | Vercel atau hosting lain yang menaruh halaman di root domain | `/` |
| `npm run build:wp` | Versi untuk WordPress | `/lp/pajak-bulanan/` |

**Vercel** — import repository ini di [Vercel](https://vercel.com/new). Vercel otomatis menjalankan `npm run build`.

**WordPress** — halaman tampil di `/services/pajak-bulanan/`, sedangkan file-nya disimpan di `/lp/pajak-bulanan/` di root WordPress.

1. Jalankan `npm run build:wp`.
2. Upload seluruh isi folder `dist/` ke `/lp/pajak-bulanan/`.

Cek hasil build WordPress secara lokal dengan `npm run preview:wp` (http://localhost:4321/lp/pajak-bulanan/).

Canonical selalu `https://kolegabisnis.com/services/pajak-bulanan/` (diatur di `src/data/site.ts`).
