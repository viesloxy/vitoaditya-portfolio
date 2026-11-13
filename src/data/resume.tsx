import { Icons } from "@/components/icons";
import {
  BriefcaseBusinessIcon,
  FolderGit2Icon,
  GraduationCapIcon,
  HomeIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";

export const DATA = {
  name: "Vito Aditya",
  initials: "VA",
  url: "https://vitoaditya.my.id",
  location: "Surabaya, Indonesia",
  locationLink:
    "https://www.google.com/maps/place/Surabaya,+East+Java,+Indonesia",
  description:
    "Software Engineer & Creative Designer. Informatics student at Universitas Airlangga who builds web applications people actually enjoy using.",
  summary:
    "I'm **Vito Aditya**, a Software Engineer and Creative Designer currently pursuing an applied bachelor's degree in [Information Technology at Universitas Airlangga](https://www.unair.ac.id) with a 3.66/4.00 GPA. I like working where design and engineering overlap, from [Kulakan](https://kulakan.web.id), an open-source profit and inventory manager for small F&B businesses, to [SiLestari](https://silestari.vercel.app), an AI-powered platform for preserving Indonesia's regional languages. Beyond code, I'm a [national award-winning filmmaker](/#achievements), a [BNSP-certified digital marketer and graphic designer](/#achievements), and an active member of HIMTI Universitas Airlangga.",
  avatarUrl: "/me.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1Bdm-hVJQkhXLvfqbIjmAOvNPF-jF0q1D/view?usp=sharing",
  roles: [
    "Software Engineer",
    "Creative Designer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "Filmmaker",
  ],

  stats: [
    { label: "GPA", value: 3.66, decimals: 2, suffix: "/4.00" },
    { label: "Public Repositories", value: 23, decimals: 0, suffix: "+" },
    { label: "National Film Awards", value: 2, decimals: 0, suffix: "×" },
    { label: "BNSP Certifications", value: 3, decimals: 0, suffix: "+" },
  ],

  skills: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextdotjs", invert: true },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "Express.js", icon: "express" },
    { name: "Laravel", icon: "laravel" },
    { name: "PHP", icon: "php" },
    { name: "Python", icon: "python" },
    { name: "Go", icon: "go" },
    { name: "Flutter", icon: "flutter" },
    { name: "Dart", icon: "dart" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Redis", icon: "redis" },
    { name: "Docker", icon: "docker" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Git", icon: "git" },
    { name: "Figma", icon: "figma" },
    { name: "Framer", icon: "framer", invert: true },
    { name: "Vite", icon: "vite" },
    { name: "Streamlit", icon: "streamlit" },
    { name: "FastAPI", icon: "fastapi" },
  ],

  designSkills: [
    "UI Designer",
    "UX Designer",
    "Product Designer",
    "Video Editor",
    "Motion Designer",
    "Graphic Designer",
    "Visual Designer",
    "Typography",
    "Illustration",
    "Icon Designer",
  ],

  interests: [
    {
      icon: "clapperboard",
      title: "Filmmaking",
      description:
        "National award-winning short film director, 1st Place at Festival Sinemakom 2024.",
    },
    {
      icon: "camera",
      title: "Photography",
      description:
        "Event & creative documentation honed as a Photography Intern at UKM Fotografi UNAIR.",
    },
    {
      icon: "palette",
      title: "Visual & Motion Design",
      description:
        "BNSP-certified Graphic & Multimedia Designer with a love for typography and motion.",
    },
    {
      icon: "tv",
      title: "Broadcasting",
      description:
        "Camera person intern at TV9 Nusantara, working on live production and broadcast workflows.",
    },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/#about", icon: UserIcon, label: "About" },
    { href: "/#experience", icon: BriefcaseBusinessIcon, label: "Experience" },
    { href: "/#projects", icon: FolderGit2Icon, label: "Projects" },
    { href: "/#achievements", icon: GraduationCapIcon, label: "Achievements" },
    { href: "/#contact", icon: MailIcon, label: "Contact" },
  ],

  contact: {
    email: "vitoaditya42@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/viesloxy",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vitoaditya/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:vitoaditya42@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      resume: {
        name: "Download Resume",
        url: "https://drive.google.com/file/d/1Bdm-hVJQkhXLvfqbIjmAOvNPF-jF0q1D/view?usp=sharing",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HIMTI Universitas Airlangga",
      href: "https://www.linkedin.com/in/vitoaditya/",
      badges: [
        "Biztech 2025",
        "HIMTI Cares Vol. 3",
        "Studi Banding UGM & PENS",
        "Upgrading HIMTI",
        "Kuliah Tamu",
      ],
      location: "Surabaya, Indonesia",
      title: "Expert Staff of Digital Media & Info Dept.",
      start: "Feb 2025",
      end: "Present",
      description:
        "Serving as expert staff in the Digital Media & Information department of UNAIR's Informatics student association. Driving publicity, digital publication, and documentation for flagship programs such as Biztech 2025, HIMTI Cares Vol. 3, an institutional study tour to UGM & PENS, member upgrading, and guest lecture series.",
    },
    {
      company: "BEM Fakultas Vokasi UNAIR",
      href: "https://www.linkedin.com/in/vitoaditya/",
      badges: [
        "Netcity 3.0",
        "Kampung Merdeka (Koorlap)",
        "Closing Party Magang Merdeka",
      ],
      location: "Surabaya, Indonesia",
      title: "Staff of Creative Media & Digitalization Dept.",
      start: "Sep 2024",
      end: "Dec 2024",
      description:
        "Supported creative media production and digitalization initiatives for the Vocational Faculty student executive board, from the Netcity 3.0 program and coordinating the Kampung Merdeka community service media team to covering the Magang Merdeka closing party.",
    },
    {
      company: "UKM Fotografi UNAIR",
      href: "https://www.linkedin.com/in/vitoaditya/",
      badges: ["Photography", "Event Documentation", "Creative Visuals"],
      location: "Surabaya, Indonesia",
      title: "Photography Intern",
      start: "Sep 2024",
      end: "Nov 2024",
      description:
        "Interned at UNAIR's photography student club, capturing event documentation and producing creative visuals while sharpening composition, lighting, and photo-editing skills.",
    },
    {
      company: "UKM Sinematografi UNAIR",
      href: "https://www.linkedin.com/in/vitoaditya/",
      badges: ["Filmmaking", "Video Production", "Editing"],
      location: "Surabaya, Indonesia",
      title: "Cinematography Intern",
      start: "Sep 2024",
      end: "Nov 2024",
      description:
        "Trained in cinematography and end-to-end video production at UNAIR's cinematography club, from directing and camera work to editing short-form visual storytelling.",
    },
    {
      company: "TV9 Nusantara",
      href: "https://www.linkedin.com/in/vitoaditya/",
      badges: ["Camera Operation", "Broadcasting", "Live Production"],
      location: "Mojokerto, Indonesia",
      title: "Camera Person Intern",
      start: "Jan 2023",
      end: "Apr 2023",
      description:
        "Operated professional broadcast cameras for regional TV programming, gaining hands-on experience in live video production, news coverage, and broadcasting workflows during vocational high school.",
    },
  ],

  education: [
    {
      school: "Universitas Airlangga",
      href: "https://www.unair.ac.id",
      degree: "Bachelor of Applied Science, Informatics Engineering",
      start: "Jul 2024",
      end: "Jul 2028",
      logoUrl: "/images/logo-unair.png",
    },
    {
      school: "SMKN 1 Mojokerto",
      href: "https://smkn1mjk.sch.id",
      degree: "Multimedia",
      start: "Jul 2021",
      end: "May 2024",
      logoUrl: "/images/logo-skanesa.webp",
    },
  ],

  projects: [
    {
      title: "Kulakan",
      href: "https://github.com/viesloxy/kulakan",
      dates: "Nov 2026",
      active: true,
      description:
        "Open-source, self-hosted profit & inventory manager built for small F&B businesses (UMKM). From recipes to stock via BOM, automatic HPP costing (WAC), per-menu profit tracking, and a cash-aware shopping planner.",
      technologies: [
        "Laravel",
        "React",
        "Inertia.js",
        "PostgreSQL",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://kulakan.web.id/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/viesloxy/kulakan",
          icon: "github",
        },
      ],
      image: "",
    },
    {
      title: "SiLestari",
      href: "https://github.com/viesloxy/silestari",
      dates: "Jul 2026",
      active: true,
      description:
        "AI-powered collaborative platform for preserving Indonesia's regional vocabulary. Built to help communities document, explore, and revive endangered local words together.",
      technologies: ["Next.js", "TypeScript", "React", "AI"],
      links: [
        {
          type: "Website",
          href: "https://silestari.vercel.app",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/viesloxy/silestari",
          icon: "github",
        },
      ],
      image: "/images/projects/silestari.jpg",
    },
    {
      title: "Srikana Go",
      href: "https://github.com/viesloxy/srikana-go",
      dates: "Jun 2026",
      active: true,
      description:
        "Integrated information system prototype for SWK Srikana Food Walk UNAIR, a React 19 + Vite frontend implementing 11 web-framework modules including SSE, NFC, Geolocation, QR, and a payment gateway.",
      technologies: ["React", "Vite", "SSE", "NFC", "Geolocation", "QR"],
      links: [
        {
          type: "Website",
          href: "https://srikanago.netlify.app/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/viesloxy/srikana-go",
          icon: "github",
        },
      ],
      image: "",
    },
    {
      title: "Kantongek",
      href: "https://github.com/viesloxy/kantongek",
      dates: "Apr 2026",
      active: true,
      description:
        "A personal finance manager for Indonesian Gen-Z. Track expenses, set budgets, and reach savings goals in a playful, readable interface.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://kantongek.netlify.app/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/viesloxy/kantongek",
          icon: "github",
        },
      ],
      image: "",
    },
    {
      title: "E-Ticketing Helpdesk Mobile App",
      href: "https://github.com/viesloxy/e-ticketing-helpdesk-mobile-app",
      dates: "Apr 2026",
      active: false,
      description:
        "A Flutter-based mobile application for managing helpdesk ticketing systems, from ticket creation and assignment through resolution tracking. Built for the Mobile Application Programming course.",
      technologies: ["Flutter", "Dart"],
      links: [
        {
          type: "Source",
          href: "https://github.com/viesloxy/e-ticketing-helpdesk-mobile-app",
          icon: "github",
        },
      ],
      image: "",
    },
    {
      title: "LiverCheck",
      href: "https://github.com/viesloxy/livercheck-klasifikasi-liver",
      dates: "Oct 2026",
      active: false,
      description:
        "Liver disease classification app based on the Indian Liver Patient Dataset using SVM with SMOTE resampling, wrapped in an interactive Streamlit interface.",
      technologies: ["Python", "Streamlit", "scikit-learn", "SMOTE"],
      links: [
        {
          type: "Source",
          href: "https://github.com/viesloxy/livercheck-klasifikasi-liver",
          icon: "github",
        },
      ],
      image: "/images/projects/livercheck.jpg",
    },
    {
      title: "Sistem Manajemen RSHP",
      href: "https://github.com/viesloxy/sistem-manajemen-rshp-pwbf",
      dates: "Oct 2025",
      active: false,
      description:
        "Web management application for the Educational Animal Hospital of Universitas Airlangga, covering the complete workflows of receptionists, nurses, doctors, and pet owners. Built with Laravel 11.",
      technologies: ["Laravel", "PHP", "MySQL", "Blade"],
      links: [
        {
          type: "Source",
          href: "https://github.com/viesloxy/sistem-manajemen-rshp-pwbf",
          icon: "github",
        },
      ],
      image: "/images/projects/rshp.jpg",
    },
    {
      title: "Sistem Manajemen Depot",
      href: "https://github.com/viesloxy/sistem-manajemen-depot-pbd",
      dates: "Dec 2025",
      active: false,
      description:
        "Depot management system built with Laravel 12 and MySQL to manage master data, procurement, receiving, sales, and stock cards for a food-depot business.",
      technologies: ["Laravel", "PHP", "MySQL"],
      links: [
        {
          type: "Source",
          href: "https://github.com/viesloxy/sistem-manajemen-depot-pbd",
          icon: "github",
        },
      ],
      image: "/images/projects/depot.jpg",
    },
    {
      title: "Go/Fiber REST API Playground",
      href: "https://github.com/viesloxy/pemograman-backend-lanjut",
      dates: "Aug 2026",
      active: true,
      description:
        "Coursework and modules for Advanced Backend Programming at Universitas Airlangga. REST APIs with Go/Fiber backed by PostgreSQL, MongoDB, and Redis, complete with testing, Swagger docs, and Docker.",
      technologies: ["Go", "Fiber", "PostgreSQL", "MongoDB", "Redis", "Docker", "Swagger"],
      links: [
        {
          type: "Source",
          href: "https://github.com/viesloxy/pemograman-backend-lanjut",
          icon: "github",
        },
      ],
      image: "",
    },
    {
      title: "CreTechin",
      href: "https://github.com/viesloxy/cretechin-ui-design",
      dates: "May 2026",
      active: true,
      description:
        "An integrated EdTech platform (Creative, Technology, and Business) that connects academic coursework with industry practice, including a complete UI design and a responsive landing page.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "UI/UX"],
      links: [
        {
          type: "Website",
          href: "https://cretechin.netlify.app/",
          icon: "globe",
        },
        {
          type: "Source",
          href: "https://github.com/viesloxy/cretechin-ui-design",
          icon: "github",
        },
      ],
      image: "",
    },
  ],

  achievements: [
    {
      title: "1st Place, National Short Film Competition",
      dates: "Jul 2024",
      place: "Festival Sinemakom",
      description:
        "Achieved 1st place in the national short film competition at FESTIVAL SINEMAKOM, representing SMKN 1 Mojokerto. Directing, cinematography, and editing on a competitive national stage.",
      images: ["/images/award_sinemakom.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/honors/",
      win: "1st Place Winner",
    },
    {
      title: "3rd Best Family Short Film",
      dates: "May 2024",
      place: "UNHASY Festival Cinema",
      description:
        "Won 3rd place for Best Family Short Film at UNHASY Festival Cinema, an inter-campus film festival, and my second national award in a year of filmmaking.",
      images: ["/images/award_unhasy.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/honors/",
      win: "3rd Place Winner",
    },
    {
      title: "BNSP Certified Digital Marketer",
      dates: "2024",
      place: "Badan Nasional Sertifikasi Profesi",
      description:
        "Nationally certified by Indonesia's Professional Certification Authority (BNSP) as a Digital Marketer, covering digital strategy, campaign management, and analytics.",
      images: ["/images/cert_bnsp_dm.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
      win: "Competency Certified",
    },
    {
      title: "BNSP Certified Graphic & Multimedia Designer",
      dates: "2024",
      place: "Badan Nasional Sertifikasi Profesi",
      description:
        "Nationally certified by BNSP as a Graphic & Multimedia Designer, validating professional competence in visual design and multimedia production.",
      images: ["/images/cert_bnsp_gmd.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
      win: "Competency Certified",
    },
    {
      title: "Audio & Video Processing Certification",
      dates: "2024",
      place: "Industry Training",
      description:
        "Professional certification in audio and video processing techniques, the foundation of my filmmaking and motion design work.",
      images: ["/images/cert_audiovideo.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
      win: "Certified",
    },
    {
      title: "Courses & Bootcamps: 11+ Certificates",
      dates: "2023 - 2026",
      place: "Dicoding · Digital Talent Scholarship · Others",
      description:
        "Continuous skill development: UI/UX Design Intensive Camp & Junior Web Developer from Digital Talent Scholarship, plus Dicoding courses in AI, Data Science, SQL, Java, and Prompt Engineering. Full list on LinkedIn.",
      images: ["/images/course_1.jpg", "/images/course_2.jpg", "/images/course_3.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
      win: "11+ Certificates",
    },
  ],

  languages: [
    "Mari Bekerja Sama",
    "Let's Work Together",
    "一緒に働こう",
    "Trabajemos Juntos",
    "Travaillons Ensemble",
    "Zusammenarbeiten",
    "함께 하자",
    "一起工作吧",
    "Lavoriamo Insieme",
    "Vamos Trabalhar",
  ],
} as const;
