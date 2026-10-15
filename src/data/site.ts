const whatsappNumber = "628511316655";
const whatsappMessage = "Halo Kolega Bisnis, saya ingin konsultasi tentang layanan pajak bulanan.";

export const contact = {
  whatsappNumber,
  whatsappDisplay: "0851 131 6655",
  whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  email: "info@kolegabisnis.com",
  addressLines: ["World Capital Tower", "Jl. DR. Ide Anak Agung Gde Agung Lot D Jakarta"],
  mapsUrl:
    "https://www.google.com/maps?ll=-6.229441,106.827009&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=4264617503763483168",
};

export const seo = {
  title: "Kepatuhan Pajak Bulanan Kami yang Urus | Kolega Bisnis",
  description:
    "Tidak perlu repot menghitung, mengingat jatuh tempo, atau mengurus pelaporan pajak setiap bulan. Kolega Bisnis memastikan kewajiban pajak Anda dihitung, dibayarkan, dan dilaporkan tepat waktu.",
  canonical: "https://kolegabisnis.com/services/pajak-bulanan/",
  siteName: "Kolega Bisnis",
  ogImage: "og-image.jpg",
  ogImageAlt: "Kepatuhan Pajak Bulanan, Kami yang Urus — Kolega Bisnis",
};

export const nav = {
  homeUrl: "/",
  servicesUrl: "/services/",
  servicesLabel: "Kembali ke Services",
};

export const ctaLabel = "Konsultasikan Kebutuhan Pajak Anda";

export const hero = {
  kicker: "Kepatuhan Pajak Bulanan",
  title: "Kami yang Urus",
  lead: "Tidak perlu repot menghitung, mengingat jatuh tempo, atau mengurus pelaporan pajak setiap bulan. Kami membantu memastikan kewajiban pajak Anda dihitung, dibayarkan, dan dilaporkan tepat waktu.",
};

export const introCard = {
  headingSmall: "Baru Memulai Bisnis atau",
  headingLines: ["Selama Ini Pajaknya", "Belum Terurus?"],
  paragraphs: [
    "Menjalankan bisnis sudah cukup menyita waktu.",
    "Ketika harus mulai memikirkan pajak, sering kali muncul pertanyaan:",
  ],
  questions: [
    "harus mulai dari mana?",
    "apa saja yang perlu dilakukan?",
    "dan apakah selama ini kewajiban pajak sudah terpenuhi?",
  ],
  closing:
    "Baik Anda baru memulai usaha maupun bisnis sudah berjalan cukup lama, urusan perpajakan yang belum tertata dapat membuat proses administrasi semakin rumit.",
};

export const conditions = {
  headingSmall: "Anda mungkin sedang mengalami",
  heading: "kondisi seperti:",
  items: [
    "Baru memulai usaha dan belum memahami kewajiban pajak yang harus dipenuhi.",
    "Bisnis sudah berjalan, tetapi administrasi dan pelaporan pajak belum rutin dilakukan.",
    "Bingung menentukan pajak apa saja yang perlu dibayar dan dilaporkan setiap bulan.",
    "Tidak yakin apakah perhitungan dan pelaporan pajak selama ini sudah benar.",
    "Khawatir melewatkan batas waktu pembayaran atau pelaporan.",
    "Memiliki data transaksi, tetapi tidak tahu bagaimana mengolahnya untuk kebutuhan perpajakan.",
    "Belum memiliki staf khusus yang menangani administrasi pajak.",
    "Ingin mulai menata pajak, tetapi tidak tahu harus mulai dari mana.",
  ],
  closingStatement: "Tidak Perlu Mengurus Semuanya Sendiri.",
};

export const serviceIntro = {
  imageAlt: "Konsultan pajak Kolega Bisnis berjabat tangan dengan klien di kantor",
  text: "Kami membantu Anda memahami kondisi perpajakan, menata kewajiban yang perlu dipenuhi, dan mengelola kepatuhan pajak secara rutin setiap bulan. Anda fokus menjalankan bisnis. Kami bantu memastikan urusan pajaknya tetap tertib.",
};

export const services = {
  headingSmall:
    "Satu Layanan untuk Kebutuhan Pajak Bulanan Anda Kami membantu mengelola proses kepatuhan pajak",
  heading: "dari awal hingga selesai",
  items: [
    {
      title: "Perhitungan Pajak Bulanan",
      text: "Menelaah data dan transaksi yang diberikan untuk menentukan kewajiban pajak bulanan Anda.",
    },
    {
      title: "Penyiapan Pembayaran Pajak",
      text: "Membantu menyiapkan billing dan kebutuhan administrasi untuk proses pembayaran pajak.",
    },
    {
      title: "Pelaporan Pajak Bulanan",
      text: "Membantu menyiapkan dan menyelesaikan pelaporan kewajiban pajak bulanan.",
    },
    {
      title: "Pemantauan Jatuh Tempo",
      text: "Memantau jadwal pembayaran dan pelaporan agar kewajiban pajak tidak terlewat.",
    },
    {
      title: "Administrasi Perpajakan",
      text: "Membantu memastikan dokumen dan administrasi perpajakan tersusun dengan baik dan mudah ditelusuri.",
    },
    {
      title: "Konsultasi Pajak",
      text: "Memberikan arahan ketika terdapat transaksi, perubahan kegiatan usaha, atau kondisi tertentu yang menimbulkan pertanyaan perpajakan.",
    },
  ],
};

export const steps = {
  headingSmall: "Bagaimana",
  heading: "Kami Membantu?",
  items: [
    { title: "Data Proses", text: "Anda cukup mengirimkan data transaksi dan dokumen yang diperlukan." },
    {
      title: "Data Review & Hitung",
      text: "Tim kami menelaah data dan menghitung kewajiban pajak yang perlu dipenuhi.",
    },
    {
      title: "Informasi Hasil Perhitungan",
      text: "Kami menyampaikan hasil perhitungan, jumlah yang perlu dibayarkan, serta kebutuhan administrasi lainnya.",
    },
    {
      title: "Bayar & Lapor",
      text: "Kami membantu proses pembayaran dan pelaporan sesuai kewajiban yang berlaku.",
    },
    { title: "Selesai", text: "Anda mendapatkan update atas status pembayaran dan pelaporan pajak." },
  ],
};

export const benefits = {
  headingSmall: "Beberapa Benefit yang akan",
  heading: "Anda Dapatkan",
  items: [
    {
      icon: "clock",
      iconSize: [74, 74],
      title: "Menghemat Waktu",
      text: "Tidak perlu mengurus sendiri pekerjaan administratif perpajakan.",
    },
    {
      icon: "risk-low",
      iconSize: [106, 107],
      title: "Mengurangi Risiko Terlewat",
      text: "Jadwal pembayaran dan pelaporan dipantau secara berkala.",
    },
    {
      icon: "discussion",
      iconSize: [68, 68],
      title: "Mendapatkan Informasi yang Jelas",
      text: "Anda mengetahui apa yang harus dibayar, kapan harus dibayar, dan apa yang perlu dilaporkan.",
    },
    {
      icon: "document",
      iconSize: [73, 73],
      title: "Menata Pajak Sejak Awal",
      text: "Baik bisnis baru maupun yang sudah berjalan, kewajiban pajak dapat mulai ditata dengan lebih terstruktur.",
    },
  ],
} as const;

export const expertise = {
  headingSmall: "Pengalaman dan",
  heading: "Keahlian Kami",
  items: [
    {
      icon: "expertise-years",
      iconSize: [78.5625, 66.2916],
      count: 10,
      title: "Tahun Pengalaman Perpajakan",
      text: "Lebih dari 10 tahun pengalaman di bidang perpajakan, membantu bisnis memahami regulasi, mengelola kewajiban pajak, dan mengambil keputusan dengan lebih percaya diri.",
    },
    {
      icon: "expertise-cases",
      iconSize: [70, 73.0777],
      count: 100,
      title: "Kasus Pajak Ditangani",
      text: "Berpengalaman menangani lebih dari 100 kasus perpajakan dengan pendekatan strategis untuk membantu klien menghadapi tantangan pajak secara tepat.",
    },
    {
      icon: "expertise-team",
      iconSize: [67, 65.77],
      title: "Pengalaman di Lingkungan DJP",
      text: "Didukung oleh profesional dengan pengalaman di Direktorat Jenderal Pajak, menghadirkan perspektif mendalam terhadap regulasi dan praktik perpajakan di Indonesia.",
    },
  ],
} as const;

export const footer = {
  heading: "Get in Touch",
  tagline: [
    { lead: "From", accent: "Compliance" },
    { lead: "to", accent: "Confidence" },
  ],
};
