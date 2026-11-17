import { DATA } from "./resume";

/**
 * Indonesian copy for the portfolio.
 * Structure mirrors DATA exactly; only the prose fields are translated.
 * Names, organisations, event titles and tech stack stay as-is.
 */

const DESCRIPTION =
  "Software Engineer & Creative Designer. Mahasiswa Teknik Informatika Universitas Airlangga dengan pengalaman di desain, software engineering, AI, data, dan cybersecurity.";

const SUMMARY =
  "Saya **Vito Aditya**, Software Engineer sekaligus Creative Designer yang sedang menempuh gelar sarjana terapan di [Teknik Informatika Universitas Airlangga](https://unair.ac.id/). Saya punya pengalaman langsung di lima bidang: desain dan kreatif, software engineering, AI dan machine learning, data, serta cybersecurity. Bidang yang paling saya minati adalah software engineering dan creative design, terutama saat keduanya bertemu. Saya juga memiliki pengetahuan mendalam tentang AI dan selalu mengikuti tren terbarunya - mulai dari AI agent, harness, model, dan provider hingga workflow desain, UI/UX, pembuatan diagram, dan pengembangan berbasis AI - sehingga bisa memilih tools yang paling tepat untuk [setiap proyek](/#projects).";

const ROLES = [
  "Software Engineering",
  "Desain & Kreatif",
  "AI & Machine Learning",
  "Data",
  "Cybersecurity",
];

const INTEREST_DESCRIPTIONS = [
  "Sutradara film pendek juara tingkat nasional, juara pertama di Festival Sinemakom 2024.",
  "Dokumentasi event dan karya visual, dari produksi kampus sampai program komunitas.",
  "Graphic & Multimedia Designer bersertifikat BNSP dengan ketertarikan pada tipografi dan motion design.",
  "Camera person intern di TV9 Nusantara, menangani produksi live dan alur kerja broadcasting.",
];

const WORK_TITLES = [
  "Expert Staff Divisi Digital Media & Informasi",
  "Camera Person Intern",
];

const WORK_DESCRIPTIONS = [
  "Menjadi expert staff di Divisi Digital Media & Informasi pada himpunan mahasiswa Informatika UNAIR. Menangani publikasi, digitalisasi, dan dokumentasi untuk program unggulan seperti Biztech 2025, HIMTI Cares Vol. 3, studi banding ke UGM & PENS, upgrading anggota, serta seri kuliah tamu.",
  "Mengoperasikan kamera broadcast profesional untuk produksi TV daerah, mendapatkan pengalaman langsung dalam produksi video live, liputan berita, dan alur kerja broadcasting selama masa SMK.",
];

const SKILL_GROUP_TITLES = [
  "Software Engineering",
  "Desain & Kreatif",
  "AI & Machine Learning",
  "Data",
  "Cybersecurity",
];


const EDUCATION_DEGREES = [
  "Sarjana Terapan, Teknik Informatika",
  "Multimedia",
];

const PROJECT_DESCRIPTIONS = [
  "Aplikasi open source untuk profit dan stok UMKM F&B, dipasang di server sendiri. Dari resep ke stok lewat BOM, hitung HPP otomatis (WAC), pantau profit per menu, sampai rencana belanja yang menyesuaikan kas.",
  "REST API untuk sistem war tiket konser yang dibangun dengan Go dan Clean Architecture. Menggunakan PostgreSQL untuk stok dan pemesanan, Redis untuk admission/queue, serta MongoDB untuk ulasan.",
  "Toolkit dan skill agen untuk mengubah gambar referensi UI menjadi kode front-end yang setia terhadap desain, dilengkapi skrip analisis, ekstraksi design token, diff screenshot, dan pengecekan anti-AI-slop.",
  "Platform kolaboratif berbasis AI untuk melestarikan kosakata daerah di Indonesia. Dibuat agar komunitas bisa mendokumentasikan, menjelajahi, dan menghidupkan kembali kosa kata lokal yang terancam hilang.",
  "Prototipe sistem informasi terintegrasi untuk SWK Srikana Food Walk UNAIR, frontend React 19 + Vite yang mengimplementasikan 11 modul framework web, termasuk SSE, NFC, Geolocation, QR, dan payment gateway.",
  "Platform EdTech dan marketplace terintegrasi (Creative, Technology, Business) dengan kursus, produk, aset digital, event, dan halaman admin. Dibangun dengan Next.js 14, TypeScript, dan Tailwind CSS.",
  "Landing page responsif untuk platform EdTech CreTechin yang menonjolkan fitur pembelajaran, marketplace, dan event dengan micro-interaction yang halus.",
  "Aplikasi manajemen keuangan pribadi untuk Gen-Z Indonesia. Catat pengeluaran, tetapkan anggaran, dan capai target tabungan lewat antarmuka yang ringan dan enak dibaca.",
  "Aplikasi mobile berbasis Flutter untuk mengelola sistem ticketing helpdesk, dari pembuatan dan penugasan tiket sampai pelacakan penyelesaian.",
  "Versi awal website portofolio pribadi untuk menampilkan proyek dan pengalaman, dibangun dengan React, Vite, dan Framer Motion dengan desain interaktif bertema cyber.",
  "Website portofolio ini: aplikasi Next.js 16 bilingual dengan Tailwind CSS v4, animasi Motion, dan komponen bergaya Magic UI yang ditulis sendiri.",
  "Aplikasi klasifikasi penyakit hati berdasarkan Indian Liver Patient Dataset memakai SVM dengan resampling SMOTE, dibungkus antarmuka Streamlit yang interaktif.",
  "Sistem manajemen depot berbasis Laravel 12 dan MySQL untuk mengelola data master, pengadaan, penerimaan, penjualan, dan kartu stok pada usaha depot makanan.",
  "Aplikasi manajemen berbasis web untuk RS Hewan Pendidikan Universitas Airlangga, mencakup alur kerja resepsionis, perawat, dokter, dan pemilik hewan. Dibangun dengan Laravel 11.",
  "Sistem manajemen buku berbasis Laravel untuk mengelola data buku dan informasi terkait sebagai bagian dari tugas pemrograman web.",
  "Website dinamis untuk menjelajahi film dan serial populer menggunakan TMDB API, dilengkapi hero trending, filter, pencarian, dan modal detail.",
  "Formulir pendaftaran interaktif untuk tugas workshop desain UI, dengan validasi sisi klien, feedback status, dan tampilan responsif.",
];

const HONOR_TITLES = [
  "Finalis, Software Development",
  "Juara 1, Kompetisi Film Pendek Tingkat Nasional",
  "Film Pendek Keluarga Terbaik Juara 3",
];

const HONOR_DESCRIPTIONS = [
  "Finalis di kompetisi Software Development pada IT CONVERT 2026, menunjukkan kemampuan problem-solving dan software engineering di panggung kompetitif.",
  "Juara 1 dalam kompetisi film pendek tingkat nasional FESTIVAL SINEMAKOM, mewakili SMKN 1 Mojokerto. Menjalankan penyutradaraan, sinematografi, dan penyuntingan di panggung nasional yang kompetitif.",
  "Meraih juara 3 Film Pendek Keluarga Terbaik di UNHASY Festival Cinema saat masih bersekolah di SMKN 1 Mojokerto, sebagai penghargaan film nasional yang diraih selama masa SMK.",
];

const CERT_TITLES = [
  "Digital Marketer Bersertifikat BNSP",
  "Graphic & Multimedia Designer Bersertifikat BNSP",
  "Sertifikasi Pengolahan Audio & Video",
];

const CERT_DESCRIPTIONS = [
  "Bersertifikat nasional oleh Badan Nasional Sertifikasi Profesi (BNSP) sebagai Digital Marketer, mencakup strategi digital, pengelolaan kampanye, dan analitik.",
  "Bersertifikat nasional oleh BNSP sebagai Graphic & Multimedia Designer, yang memvalidasi kompetensi profesional dalam desain visual dan produksi multimedia.",
  "Sertifikasi profesional dalam teknik pengolahan audio dan video, yang menjadi dasar pekerjaan syuting dan motion design saya.",
];

const NAVBAR_LABELS = [
  "Beranda",
  "Tentang",
  "Pengalaman",
  "Proyek",
  "Penghargaan",
  "Kontak",
];

const STAT_LABELS = ["IPK", "Repository Publik", "Penghargaan Film", "Sertifikasi BNSP"];

export const DATA_ID = {
  ...DATA,
  description: DESCRIPTION,
  summary: SUMMARY,
  roles: ROLES,
  skillGroups: DATA.skillGroups.map((group, i) => ({
    ...group,
    title: SKILL_GROUP_TITLES[i] ?? group.title,
  })),
  interests: DATA.interests.map((item, i) => ({
    ...item,
    description: INTEREST_DESCRIPTIONS[i] ?? item.description,
  })),
  work: DATA.work.map((item, i) => ({
    ...item,
    title: WORK_TITLES[i] ?? item.title,
    description: WORK_DESCRIPTIONS[i] ?? item.description,
    end: item.end === "Present" ? "Sekarang" : item.end,
  })),
  education: DATA.education.map((item, i) => ({
    ...item,
    degree: EDUCATION_DEGREES[i] ?? item.degree,
    end: item.end === "May 2024" ? "Mei 2024" : item.end,
  })),
  projects: DATA.projects.map((item, i) => ({
    ...item,
    description: PROJECT_DESCRIPTIONS[i] ?? item.description,
  })),
  honors: DATA.honors.map((item, i) => ({
    ...item,
    title: HONOR_TITLES[i] ?? item.title,
    description: HONOR_DESCRIPTIONS[i] ?? item.description,
  })),
  certifications: DATA.certifications.map((item, i) => ({
    ...item,
    title: CERT_TITLES[i] ?? item.title,
    description: CERT_DESCRIPTIONS[i] ?? item.description,
  })),
  navbar: DATA.navbar.map((item, i) => ({
    ...item,
    label: NAVBAR_LABELS[i] ?? item.label,
  })),
  stats: DATA.stats.map((item, i) => ({
    ...item,
    label: STAT_LABELS[i] ?? item.label,
  })),
  contact: {
    ...DATA.contact,
    social: {
      ...DATA.contact.social,
      email: { ...DATA.contact.social.email, name: "Kirim Email" },
      resume: { ...DATA.contact.social.resume, name: "Unduh CV" },
    },
  },
} as unknown as typeof DATA;
