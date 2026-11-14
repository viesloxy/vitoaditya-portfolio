import { DATA } from "./resume";

/**
 * Indonesian copy for the portfolio.
 * Structure mirrors DATA exactly; only the prose fields are translated.
 * Names, organisations, event titles and tech stack stay as-is.
 */

const DESCRIPTION =
  "Software Engineer & Creative Designer. Mahasiswa Teknik Informatika Universitas Airlangga dengan pengalaman di desain, software engineering, AI, data, dan cybersecurity.";

const SUMMARY =
  "Saya **Vito Aditya**, Software Engineer sekaligus Creative Designer yang sedang menempuh gelar sarjana terapan di [Teknik Informatika Universitas Airlangga](https://www.unair.ac.id). Saya punya pengalaman langsung di lima bidang: desain dan kreatif, software engineering, AI dan machine learning, data, serta cybersecurity. Bidang yang paling saya minati adalah software engineering dan creative design, terutama saat keduanya bertemu.";

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
  "Desain & Kreatif",
  "Software Engineering",
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

const HONOR_TITLES = [
  "Juara 1, Kompetisi Film Pendek Tingkat Nasional",
  "Film Pendek Keluarga Terbaik Juara 3",
  "Finalis, Software Development",
];

const HONOR_DESCRIPTIONS = [
  "Juara 1 dalam kompetisi film pendek tingkat nasional FESTIVAL SINEMAKOM, mewakili SMKN 1 Mojokerto. Menjalankan penyutradaraan, sinematografi, dan penyuntingan di panggung nasional yang kompetitif.",
  "Meraih juara 3 Film Pendek Keluarga di UNHASY Festival Cinema, festival film antar kampus, dan menjadi penghargaan nasional kedua saya dalam setahun berkarya.",
  "Finalis di kompetisi Software Development pada IT CONVERT 2026, menunjukkan kemampuan problem-solving dan software engineering di panggung kompetitif.",
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
