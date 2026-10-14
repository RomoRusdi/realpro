# Kolega Bisnis — Kepatuhan Pajak Bulanan

Landing page layanan kepatuhan pajak bulanan Kolega Bisnis.

Dibuat dengan [Astro](https://astro.build), TypeScript, Tailwind CSS, dan GSAP.

## Menjalankan

Butuh Node.js 22.12 atau lebih baru.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # hasil build di folder dist/
npm run preview
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

## Deploy

Import repository ini di [Vercel](https://vercel.com/new), lalu deploy. Pengaturan build terdeteksi otomatis.

Jika memakai domain sendiri, tambahkan environment variable `SITE_URL` (contoh: `https://kolegabisnis.com`).
