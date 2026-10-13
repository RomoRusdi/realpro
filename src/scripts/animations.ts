import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const releaseHero = () => root.classList.remove("anim-pending");

const mm = gsap.matchMedia();

// Semua animasi gerak hanya berjalan bila pengguna tidak memilih "reduce motion".
// Bila reduce → tidak ada yang disembunyikan, konten langsung tampil.
mm.add("(prefers-reduced-motion: no-preference)", () => {
  heroIntro();
  heroParallax();
  splitLines();
  listItems();
  revealBlocks();
  popIcons();
  counters();

  // Gambar & font bisa mengubah tinggi halaman setelah load
  window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
});

mm.add("(prefers-reduced-motion: reduce)", releaseHero);

/** Hero: judul per kata (SplitText), lalu logo, paragraf & CTA fade-up berurutan. */
function heroIntro() {
  const title = document.querySelector<HTMLElement>("[data-hero-title]");
  const reveals = gsap.utils.toArray<HTMLElement>("[data-hero-reveal]");
  if (!title) return releaseHero();

  const lines = gsap.utils.toArray<HTMLElement>("[data-split]", title);
  const words: Element[] = [];

  document.fonts.ready.then(() => {
    lines.forEach((line) => {
      // aria "none": teks tetap dibaca utuh oleh screen reader tanpa aria-label di <span>
      const split = SplitText.create(line, { type: "words", wordsClass: "split-word", aria: "none" });
      // background-clip:text tidak ikut ke child yang di-transform → pindahkan gradasi ke tiap kata
      if (line.hasAttribute("data-split-gradient")) {
        line.classList.remove("text-hero-gradient");
        split.words.forEach((w) => w.classList.add("text-hero-gradient"));
      }
      words.push(...split.words);
    });

    gsap.set(reveals, { autoAlpha: 0, y: 24 });
    gsap.set(words, { autoAlpha: 0, yPercent: 60 });
    releaseHero();

    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .to(reveals[0] ?? [], { autoAlpha: 1, y: 0, duration: 0.5 })
      .to(words, { autoAlpha: 1, yPercent: 0, duration: 0.7, stagger: 0.06 }, "-=0.3")
      .to(reveals.slice(1), { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" }, "-=0.45");
  });
}

/** Latar gedung bergerak lebih lambat dari scroll (maks. 9vw, sesuai ruang crop di atas gambar). */
function heroParallax() {
  const hero = document.querySelector("[data-hero]");
  const img = document.querySelector("[data-hero-parallax]");
  if (!hero || !img) return;
  gsap.to(img, {
    y: () => window.innerWidth * 0.09,
    ease: "none",
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true, invalidateOnRefresh: true },
  });
}

/** Garis vertikal tiap section "tergambar" dari atas ke bawah mengikuti scroll. */
function splitLines() {
  gsap.utils.toArray<HTMLElement>("[data-split-line]").forEach((line) => {
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: { trigger: line, start: "top 80%", end: "bottom 65%", scrub: 0.6 },
      },
    );
  });
}

/** Item daftar bernomor fade-up bergantian saat masuk viewport. */
function listItems() {
  gsap.utils.toArray<HTMLElement>("[data-list]").forEach((list) => {
    const items = list.querySelectorAll("[data-list-item]");
    gsap.set(items, { autoAlpha: 0, y: 32 });
    ScrollTrigger.batch(items, {
      start: "top 88%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1, overwrite: true }),
    });
  });
}

/** Blok umum (kartu intro, foto, paragraf, kalimat penutup). */
function revealBlocks() {
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      autoAlpha: 0,
      y: 28,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });
  });
}

/** Ikon benefit & keahlian: scale-in kecil. */
function popIcons() {
  gsap.utils.toArray<HTMLElement>("[data-pop-icon]").forEach((icon) => {
    gsap.from(icon, {
      scale: 0.6,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power2.out",
      delay: 0.1,
      scrollTrigger: { trigger: icon, start: "top 88%", once: true },
    });
  });
}

/** "10+" dan "100+" menghitung naik dari 0, sekali. */
function counters() {
  gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const state = { value: 0 };
    el.textContent = "0";
    gsap.to(state, {
      value: target,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
      onUpdate: () => {
        el.textContent = String(Math.round(state.value));
      },
    });
  });
}
