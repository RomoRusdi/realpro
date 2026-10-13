# Kolega Bisnis — Landing Page "Kepatuhan Pajak Bulanan"

Landing page statis dari desain Figma
[Landing Page Monthly Tax](https://www.figma.com/design/bRjMF42xxL79ClZ1Lt25BT/Untitled--Copy-?node-id=31-6)
(frame 1920px), dibangun dengan **Astro 7 + TypeScript**, **Tailwind CSS v4**, **GSAP (ScrollTrigger + SplitText)**,
**astro-icon**, dan siap di-deploy ke **Vercel**.

## Menjalankan

Butuh Node.js **22.12+**.

```bash
npm install        # pasang dependensi
npm run dev        # dev server → http://localhost:4321
npm run build      # build produksi ke folder dist/
npm run preview    # cek hasil build → http://localhost:4321
npx astro check    # cek tipe TypeScript/Astro
```

## Mengubah konten

Semua teks, nomor WhatsApp, email, alamat, dan teks SEO ada di satu file:
**[src/data/site.ts](src/data/site.ts)**.

| Yang ingin diubah | Lokasi di `site.ts` |
| --- | --- |
| Nomor WhatsApp (CTA, tombol melayang, footer) | `whatsappNumber` (format `62…`, tanpa `+`/`0`) dan `whatsappDisplay` |
| Pesan otomatis WhatsApp | `whatsappMessage` |
| Email / alamat / link Google Maps | `contact.email`, `contact.addressLines`, `contact.mapsUrl` |
| Judul & deskripsi SEO | `seo.title`, `seo.description` |
| Teks tiap section | objek `hero`, `introCard`, `conditions`, `services`, `steps`, `benefits`, `expertise`, `footer` |
| Label tombol CTA | `ctaLabel` |

Gambar ada di `src/assets/images/` (dioptimasi otomatis ke WebP oleh `<Image />`), ikon di `src/icons/`,
favicon & gambar pratinjau sosial (`og-image.jpg`, 1200×630) di `public/`.

## Deploy ke Vercel

**Lewat GitHub (disarankan)**
1. Push folder ini ke repository GitHub.
2. Di [vercel.com/new](https://vercel.com/new) pilih repository tersebut. Vercel otomatis mendeteksi Astro
   (Build Command `npm run build`, Output `dist`). Tidak perlu adapter karena output statis.
3. Klik **Deploy**.

**Lewat CLI**
```bash
npm i -g vercel
vercel          # preview
vercel --prod   # produksi
```

URL kanonik & Open Graph memakai `VERCEL_PROJECT_PRODUCTION_URL` yang disediakan Vercel secara otomatis.
Jika memakai domain sendiri, set environment variable `SITE_URL` (mis. `https://kolegabisnis.com`) di
Project Settings → Environment Variables.

**Analytics:** slot Google Analytics 4 dan Meta Pixel sudah disiapkan (dikomentari) di
[src/layouts/Layout.astro](src/layouts/Layout.astro). Tinggal hapus komentar dan isi ID-nya.

## Struktur

```
src/
├─ components/
│  ├─ Hero.astro              # hero + latar gedung (parallax)
│  ├─ IntroCard.astro         # kartu kaca + latar garis oranye (membungkus section "kondisi")
│  ├─ SectionSplit.astro      # pola berulang: judul kiri (sticky) · garis tengah · konten kanan
│  ├─ NumberedList.astro      # daftar bernomor / berikon, opsional penghitung "10+"
│  ├─ ServiceIntro.astro      # foto jabat tangan + paragraf + CTA
│  ├─ CtaButton.astro         # tombol "Konsultasikan Kebutuhan Pajak Anda"
│  ├─ Footer.astro
│  └─ FloatingWhatsApp.astro
├─ data/site.ts               # semua konten
├─ icons/                     # SVG ikon dari Figma (dipakai lewat astro-icon)
├─ layouts/Layout.astro       # <head>, SEO, OG, favicon, slot analytics
├─ scripts/animations.ts      # semua animasi GSAP
└─ styles/global.css          # design tokens Tailwind v4 (@theme)
```

## Design tokens (dari Figma)

| Token | Nilai | Dipakai untuk |
| --- | --- | --- |
| `surface` | `#efefef` | latar abu-abu |
| `cream` | `#fff3e6` | latar krem |
| `accent` | `#ffa246` | angka 01–09, ikon |
| `brand-500 → brand-400` | `#b15613 → #d9640e` (radial) | judul "Kami yang Urus" |
| `brand-600 → brand-700 → brand-300` | `#a1531b → #712f00 → #ff832b` | tagline footer |
| Font | DM Sans (opsz 14) · Poppins 300/700 (footer) · EB Garamond 500 (tagline) | |
| Ukuran @1920 | hero 128/48 · judul section 64/40 · isi 32 · kartu intro 24 · CTA 20 | |
| Radius | kartu 38 · logo 23 · CTA 21 · chip 15 | |
| Shadow | kaca `0 4 24 8 / 25%` · CTA `0 4 4 / 25%` | |

Semua ukuran ditulis fluid: nilai maksimum = ukuran Figma pada lebar 1920px, mengecil proporsional
(`vw`) dengan batas minimum untuk mobile. Konten mulai di x=127 (`--spacing-gutter`), garis pemisah
tepat di tengah halaman (x=960).

## Hasil pengecekan

- `npm run build` dan `astro check` tanpa error/peringatan.
- Tanpa scroll horizontal di 375, 768, 1440, dan 1920px.
- Lighthouse (build produksi, lokal): **mobile** 93 / 100 / 100 / 100, **desktop** 100 / 100 / 100 / 100
  (Performance / Accessibility / Best Practices / SEO).
- JavaScript dimatikan → semua konten tetap tampil. `prefers-reduced-motion: reduce` → tidak ada animasi gerak.
- Satu `<h1>`, urutan heading h1 → h2 → h3, fokus keyboard terlihat (outline cokelat 3px).

## Catatan keputusan

Keputusan yang sudah disepakati, plus hal ambigu di desain yang diputuskan saat implementasi:

1. **Warna tombol CTA digelapkan sedikit.** Gradasi Figma `#ff9d00 → #f36e36` memberi kontras teks putih
   ±2:1 (gagal WCAG AA). Dipakai `#e86f00 → #e0582a` (≥3:1 untuk teks tebal 20px). Untuk kembali ke warna
   Figma, ubah `--color-cta-from` / `--color-cta-to` di `global.css`.
2. **Angka 01–09 dan ikon tetap `#ffa246`** sesuai Figma. Elemen ini dekoratif (`aria-hidden`; urutan sudah
   disampaikan lewat `<ol>`), tetapi kontras visualnya terhadap latar hanya ±1,7:1. Bila ingin ketat AA,
   ganti `--color-accent` ke `#d9640e`.
3. **Poin 09** "Tidak Perlu Mengurus Semuanya Sendiri." dijadikan kalimat penutup tebal berwarna
   cokelat dengan aksen garis oranye, di bawah daftar 01–08.
4. **Semua paragraf rata kiri** (di Figma beberapa justify).
5. **Ruang kosong di bawah footer dipangkas** (±440px → ±110px).
6. **Ketidaksejajaran kecil dirapikan** (judul langkah 02 yang bergeser 10px, jarak antar item yang tidak
   seragam). Semua item memakai grid yang sama.
7. **Judul kiri tiap section dibuat sticky di desktop (≥1024px).** Di prototipe Figma judul-judul ini
   memang diset sticky. CTA hero dan kartu kaca yang juga sticky di prototipe *tidak* ikut dibuat sticky;
   fungsinya digantikan tombol WhatsApp melayang. Di dasar tiap section ada bentuk blur sewarna latar
   (Figma: "Rectangle 13/17/18/20/21/24") yang menimpa judul sticky, sehingga judul memudar lalu hilang
   saat section berakhir. Bentuknya dilebarkan menutup seluruh kolom judul agar konsisten di 1024–1920px,
   dan hanya aktif di desktop (di mobile judul tidak sticky).
8. **Teks heading "Satu Layanan…"** disalin persis ("…Pajak Bulanan Anda Kami membantu…"). Sepertinya ada
   titik/baris baru yang hilang setelah "Anda"; silakan ubah di `services.headingSmall` bila perlu.
9. **Tagline footer tidak diberi link.** Di Figma tagline mengarah ke Google Maps; link itu dipindahkan ke
   alamat. Nomor WA → `wa.me`, email → `mailto:`.
10. **Ikon memakai SVG asli hasil ekspor Figma** (`src/icons/`, dirender lewat astro-icon), bukan versi
    Iconify. Ikon di Figma sudah diwarnai dan beberapa merupakan gabungan beberapa vector (dokumen, risiko,
    sertifikat). Iconify hanya dipakai untuk `logos:whatsapp-icon` di tombol melayang.
11. **Gambar hero** memakai file asli 2000px dengan crop yang sama seperti Figma (lebar 110%, offset atas
    12,3%). Di bawah 1024px gambar menampilkan seluruh skyline dengan lapisan putih tipis agar teks terbaca.
    Kartu kaca dibuat lebih pekat (+blur) di layar sempit karena menumpuk di atas foto.
12. **Tablet (768–1023px) juga satu kolom.** Dua kolom dengan teks 32px terlalu sempit di lebar ini; garis
    vertikal pindah ke kiri daftar (berlaku juga di mobile).
13. **Layer "UDAHHHH TAR KE APUS AH"** tetap dipakai sebagai latar garis oranye (file `bg-stripes.png`) dan
    latar hero (`hero-skyline.png`).
14. **Gradasi judul hero** dipasang per kata setelah SplitText memecah teks (background-clip tidak ikut ke
    elemen anak yang di-transform).
15. **Animasi penghitung "10+" / "100+"** mengubah teks (bukan transform/opacity). Ini satu-satunya
    pengecualian dan memang diminta. Semua animasi lain hanya memakai transform & opacity.
