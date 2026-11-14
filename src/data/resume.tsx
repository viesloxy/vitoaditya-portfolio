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
    "Software Engineer & Creative Designer. Informatics Engineering student at Universitas Airlangga with hands-on experience across design, software engineering, AI, data, and cybersecurity.",
  summary:
    "I'm **Vito Aditya**, a Software Engineer and Creative Designer currently pursuing an applied bachelor's degree in [Informatics Engineering at Universitas Airlangga](https://www.unair.ac.id). I have hands-on experience across five fields: design and creative, software engineering, AI and machine learning, data, and cybersecurity. I'm most passionate about software engineering and creative design, and I enjoy working where the two overlap.",
  avatarUrl: "/me.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1Bdm-hVJQkhXLvfqbIjmAOvNPF-jF0q1D/view?usp=sharing",
  roles: [
    "Software Engineering",
    "Design & Creative",
    "AI & Machine Learning",
    "Data",
    "Cybersecurity",
  ],

  stats: [
    { label: "GPA", value: 3.66, decimals: 2, suffix: "/4.00" },
    { label: "Public Repositories", value: 23, decimals: 0, suffix: "+" },
    { label: "National Film Awards", value: 2, decimals: 0, suffix: "×" },
    { label: "BNSP Certifications", value: 3, decimals: 0, suffix: "+" },
  ],

  skillGroups: [
    {
      title: "Design & Creative",
      tools: [
        { name: "Figma", icon: "figma" },
        { name: "Photoshop", icon: "adobephotoshop", invert: true },
        { name: "Illustrator", icon: "adobeillustrator", invert: true },
        { name: "Premiere Pro", icon: "adobepremierepro", invert: true },
        { name: "After Effects", icon: "adobeaftereffects", invert: true },
        { name: "DaVinci Resolve", icon: "davinciresolve", invert: true },
        { name: "Blender", icon: "blender" },
        { name: "Canva", icon: "canva", invert: true },
      ],
    },
    {
      title: "Software Engineering",
      tools: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextdotjs", invert: true },
        { name: "TypeScript", icon: "typescript" },
        { name: "JavaScript", icon: "javascript" },
        { name: "Node.js", icon: "nodedotjs" },
        { name: "Express.js", icon: "express", invert: true },
        { name: "Laravel", icon: "laravel" },
        { name: "PHP", icon: "php" },
        { name: "Python", icon: "python" },
        { name: "Go", icon: "go" },
        { name: "Flutter", icon: "flutter" },
        { name: "Dart", icon: "dart" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "Tailwind CSS", icon: "tailwindcss" },
        { name: "Docker", icon: "docker" },
        { name: "Git", icon: "git" },
        { name: "Vite", icon: "vite" },
      ],
    },
    {
      title: "AI & Machine Learning",
      tools: [
        { name: "Python", icon: "python" },
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "PyTorch", icon: "pytorch" },
        { name: "scikit-learn", icon: "scikitlearn" },
        { name: "Google Colab", icon: "googlecolab" },
        { name: "Jupyter", icon: "jupyter" },
        { name: "Hugging Face", icon: "huggingface" },
        { name: "OpenCV", icon: "opencv" },
        { name: "Streamlit", icon: "streamlit" },
      ],
    },
    {
      title: "Data",
      tools: [
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "MongoDB", icon: "mongodb" },
        { name: "Redis", icon: "redis" },
        { name: "BigQuery", icon: "googlebigquery" },
        { name: "Apache Spark", icon: "apachespark" },
        { name: "Pandas", icon: "pandas", invert: true },
        { name: "NumPy", icon: "numpy", invert: true },
      ],
    },
    {
      title: "Cybersecurity",
      tools: [
        { name: "Kali Linux", icon: "kalilinux" },
        { name: "Linux", icon: "linux" },
        { name: "Wireshark", icon: "wireshark" },
        { name: "Burp Suite", icon: "burpsuite" },
        { name: "Metasploit", icon: "metasploit" },
        { name: "OWASP", icon: "owasp", invert: true },
      ],
    },
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
        "Event and creative documentation, from campus productions to community programs.",
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
    { href: "/#honors", icon: GraduationCapIcon, label: "Honors" },
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
      company: "Himpunan Mahasiswa D4 Teknik Informatika Universitas Airlangga",
      href: "https://www.linkedin.com/in/vitoaditya/",
      logoUrl: "/images/logo-himti.png",
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
      company: "TV9 Nusantara",
      href: "https://www.linkedin.com/in/vitoaditya/",
      logoUrl: "/images/logo-tv9.png",
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
      href: "https://unair.ac.id/",
      degree: "Bachelor of Applied Science, Informatics Engineering",
      start: "Jul 2024",
      end: "Jul 2028",
      logoUrl: "/images/logo-unair.png",
    },
    {
      school: "SMKN 1 Mojokerto",
      href: "https://www.smkn1mojokerto.sch.id/",
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

  honors: [
    {
      title: "1st Place, National Short Film Competition",
      dates: "Jul 2024",
      place: "Festival Sinemakom",
      description:
        "Achieved 1st place in the national short film competition at FESTIVAL SINEMAKOM, representing SMKN 1 Mojokerto. Directing, cinematography, and editing on a competitive national stage.",
      images: ["/images/award_sinemakom.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/honors/",
    },
    {
      title: "3rd Best Family Short Film",
      dates: "May 2024",
      place: "UNHASY Festival Cinema",
      description:
        "Won 3rd place for Best Family Short Film at UNHASY Festival Cinema, an inter-campus film festival, and my second national award in a year of filmmaking.",
      images: ["/images/award_unhasy.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/honors/",
    },
    {
      title: "Finalist, Software Development",
      dates: "Sep 2026",
      place: "IT CONVERT 2026",
      description:
        "Finalist in the Software Development competition at IT CONVERT 2026, demonstrating problem-solving and software engineering skills on a competitive stage.",
      images: ["/images/honor-itconvert.png"],
      link: "https://www.linkedin.com/in/vitoaditya/details/honors/",
    },
  ],

  certifications: [
    {
      title: "BNSP Certified Digital Marketer",
      dates: "2024",
      place: "Badan Nasional Sertifikasi Profesi",
      description:
        "Nationally certified by Indonesia's Professional Certification Authority (BNSP) as a Digital Marketer, covering digital strategy, campaign management, and analytics.",
      images: ["/images/cert_bnsp_dm.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
    },
    {
      title: "BNSP Certified Graphic & Multimedia Designer",
      dates: "2024",
      place: "Badan Nasional Sertifikasi Profesi",
      description:
        "Nationally certified by BNSP as a Graphic & Multimedia Designer, validating professional competence in visual design and multimedia production.",
      images: ["/images/cert_bnsp_gmd.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
    },
    {
      title: "Audio & Video Processing Certification",
      dates: "2024",
      place: "Industry Training",
      description:
        "Professional certification in audio and video processing techniques, the foundation of my filmmaking and motion design work.",
      images: ["/images/cert_audiovideo.jpg"],
      link: "https://www.linkedin.com/in/vitoaditya/details/certifications/",
    },
  ],

  detailedCertificates: [
    {
      title: "UI/UX Design Intensive Camp",
      issuer: "Digital Talent Scholarship",
      date: "2025",
      image: "/images/course_1.jpg",
      credential: "",
    },
    {
      title: "Junior Web Developer",
      issuer: "Digital Talent Scholarship",
      date: "2024",
      image: "/images/course_2.jpg",
      credential: "",
    },
    {
      title: "AI for Beginners",
      issuer: "Dicoding",
      date: "2025",
      image: "/images/course_3.jpg",
      credential: "",
    },
    {
      title: "Data Science Fundamentals",
      issuer: "Dicoding",
      date: "2025",
      image: "/images/course_1.jpg",
      credential: "",
    },
    {
      title: "SQL Query Mastery",
      issuer: "Dicoding",
      date: "2024",
      image: "/images/course_2.jpg",
      credential: "",
    },
    {
      title: "Java Programming",
      issuer: "Dicoding",
      date: "2024",
      image: "/images/course_3.jpg",
      credential: "",
    },
    {
      title: "Prompt Engineering",
      issuer: "Dicoding",
      date: "2026",
      image: "/images/course_1.jpg",
      credential: "",
    },
  ],

  languages: [
    "Mari Bekerja Sama",
    "Let's Work Together",
    "一緒に働こう",
  ],
} as const;
