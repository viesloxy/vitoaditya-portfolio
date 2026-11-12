import { DATA } from "./resume";

/**
 * Indonesian copy for the portfolio.
 * Structure mirrors DATA exactly; only the prose fields are translated.
 * Names, organisations, event titles and tech stack stay as-is.
 */

const DESCRIPTION =
  "Software Engineer & Creative Designer. Mahasiswa Informatika Universitas Airlangga yang membangun aplikasi web yang nyaman dipakai.";

const SUMMARY =
  "Saya **Vito Aditya**, Software Engineer sekaligus Creative Designer yang sedang menempuh gelar sarjana terapan di [Teknologi Informasi Universitas Airlangga](https://www.unair.ac.id) dengan IPK 3,66 dari 4,00. Saya senang bekerja di area yang menggabungkan desain dan rekayasa, mulai dari [Kulakan](https://kulakan.web.id), aplikasi open source untuk profit dan stok UMKM F&B, sampai [SiLestari](https://silestari.vercel.app), platform berbasis AI untuk melestarikan bahasa daerah di Indonesia. Di luar kode, saya adalah [sutradara film juara tingkat nasional](/#achievements), [digital marketer dan graphic designer bersertifikat BNSP](/#achievements), serta anggota aktif HIMTI Universitas Airlangga.";

const INTEREST_DESCRIPTIONS = [
  "Sutradara film pendek juara tingkat nasional, juara pertama di Festival Sinemakom 2024.",
  "Dokumentasi event dan karya visual yang saya asah sebagai Photography Intern di UKM Fotografi UNAIR.",
  "Graphic & Multimedia Designer bersertifikat BNSP dengan ketertarikan pada tipografi dan motion design.",
  "Camera person intern di TV9 Nusantara, menangani produksi live dan alur kerja broadcasting.",
];

const WORK_TITLES = [
  "Expert Staff Divisi Digital Media & Informasi",
  "Staff Divisi Creative Media & Digitalisasi",
  "Photography Intern",
  "Cinematography Intern",
  "Camera Person Intern",
];

const WORK_DESCRIPTIONS = [
  "Menjadi expert staff di Divisi Digital Media & Informasi pada himpunan mahasiswa Informatika UNAIR. Menangani publikasi, digitalisasi, dan dokumentasi untuk program unggulan seperti Biztech 2025, HIMTI Cares Vol. 3, studi banding ke UGM & PENS, upgrading anggota, serta seri kuliah tamu.",
  "Mendukung produksi creative media dan digitalisasi untuk BEM Fakultas Vokasi, mulai dari program Netcity 3.0, koordinasi tim media community service Kampung Merdeka, sampai dokumentasi closing party Magang Merdeka.",
  "Magang di klub fotografi UNAIR, mendokumentasikan event dan menghasilkan karya visual sambil mengasah komposisi, pencahayaan, serta kemampuan edit foto.",
  "Belajar sinematografi dan produksi video menyeluruh di klub sinematografi UNAIR, mulai dari penyutradaraan dan operasi kamera sampai penyuntingan cerita visual format pendek.",
  "Mengoperasikan kamera broadcast profesional untuk produksi TV daerah, mendapatkan pengalaman langsung dalam produksi video live, liputan berita, dan alur kerja broadcasting selama masa SMK.",
];

const EDUCATION_DEGREES = [
  "D4 (Sarjana Terapan) Teknologi Informasi, IPK 3,66/4,00",
  "SMK, Jurusan Multimedia & Broadcasting",
];

const PROJECT_DESCRIPTIONS = [
  "Aplikasi open source untuk profit dan stok UMKM F&B, dipasang di server sendiri. Dari resep ke stok lewat BOM, hitung HPP otomatis (WAC), pantau profit per menu, sampai rencana belanja yang menyesuaikan kas.",
  "Platform kolaboratif berbasis AI untuk melestarikan kosakata daerah di Indonesia. Dibuat agar komunitas bisa mendokumentasikan, menjelajahi, dan menghidupkan kembali kosa kata lokal yang terancam hilang.",
  "Prototipe sistem informasi terintegrasi untuk SWK Srikana Food Walk UNAIR, frontend React 19 + Vite yang mengimplementasikan 11 modul framework web, termasuk SSE, NFC, Geolocation, QR, dan payment gateway.",
  "Aplikasi manajemen keuangan pribadi untuk Gen-Z Indonesia. Catat pengeluaran, tetapkan anggaran, dan capai target tabungan lewat antarmuka yang ringan dan enak dibaca.",
  "Aplikasi mobile berbasis Flutter untuk mengelola sistem ticketing helpdesk, dari pembuatan dan penugasan tiket sampai pelacakan penyelesaian. Dibuat untuk mata kuliah Pemrograman Aplikasi Mobile.",
  "Aplikasi klasifikasi penyakit hati berdasarkan Indian Liver Patient Dataset memakai SVM dengan resampling SMOTE, dibungkus antarmuka Streamlit yang interaktif.",
  "Aplikasi manajemen berbasis web untuk RS Hewan Pendidikan Universitas Airlangga, mencakup alur kerja resepsionis, perawat, dokter, dan pemilik hewan. Dibangun dengan Laravel 11.",
  "Sistem manajemen depot dengan Laravel 12 dan MySQL untuk mengelola master data, pembelian, penerimaan, penjualan, dan kartu stok pada bisnis distribusi makanan.",
  "Tugas dan modul mata kuliah Pemrograman Backend Lanjutan di Universitas Airlangga. REST API dengan Go/Fiber dan PostgreSQL, MongoDB, serta Redis, lengkap dengan pengujian, dokumentasi Swagger, dan Docker.",
  "Platform EdTerpadu (Creative, Technology, and Business) yang menghubungkan perkuliahan dengan praktik industri, lengkap dengan desain UI menyeluruh dan landing page responsif.",
];

const ACHIEVEMENT_TITLES = [
  "Juara 1, Kompetisi Film Pendek Tingkat Nasional",
  "Film Pendek Keluarga Terbaik Juara 3",
  "Digital Marketer Bersertifikat BNSP",
  "Graphic & Multimedia Designer Bersertifikat BNSP",
  "Sertifikasi Pengolahan Audio & Video",
  "Kursus & Bootcamp: 11+ Sertifikat",
];

const ACHIEVEMENT_DESCRIPTIONS = [
  "Juara 1 dalam kompetisi film pendek tingkat nasional FESTIVAL SINEMAKOM, mewakili SMKN 1 Mojokerto. Menjalankan penyutradaraan, sinematografi, dan penyuntingan di panggung nasional yang kompetitif.",
  "Meraih juara 3 Film Pendek Keluarga di UNHASY Festival Cinema, festival film antar kampus, dan menjadi penghargaan nasional kedua saya dalam setahun berkarya.",
  "Bersertifikat nasional oleh Badan Nasional Sertifikasi Profesi (BNSP) sebagai Digital Marketer, mencakup strategi digital, pengelolaan kampanye, dan analitik.",
  "Bersertifikat nasional oleh BNSP sebagai Graphic & Multimedia Designer, yang memvalidasi kompetensi profesional dalam desain visual dan produksi multimedia.",
  "Sertifikasi profesional dalam teknik pengolahan audio dan video, yang menjadi dasar pekerjaan syuting dan motion design saya.",
  "Pengembangan keterampilan berkelanjutan: UI/UX Design Intensive Camp & Junior Web Developer dari Digital Talent Scholarship, ditambah kursus Dicoding di AI, Data Science, SQL, Java, dan Prompt Engineering. Daftar lengkap ada di LinkedIn.",
];

const ACHIEVEMENT_WINS = [
  "Juara 1",
  "Juara 3",
  "Sertifikasi Kompetensi",
  "Sertifikasi Kompetensi",
  "Bersertifikat",
  "11+ Sertifikat",
];

const NAVBAR_LABELS = [
  "Beranda",
  "Tentang",
  "Pengalaman",
  "Proyek",
  "Prestasi",
  "Kontak",
];

const STAT_LABELS = ["IPK", "Repository Publik", "Penghargaan Film", "Sertifikasi BNSP"];

export const DATA_ID = {
  ...DATA,
  description: DESCRIPTION,
  summary: SUMMARY,
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
  })),
  projects: DATA.projects.map((item, i) => ({
    ...item,
    description: PROJECT_DESCRIPTIONS[i] ?? item.description,
  })),
  achievements: DATA.achievements.map((item, i) => ({
    ...item,
    title: ACHIEVEMENT_TITLES[i] ?? item.title,
    description: ACHIEVEMENT_DESCRIPTIONS[i] ?? item.description,
    win: ACHIEVEMENT_WINS[i] ?? item.win,
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
