import { Project, Service, SocialLink, MarqueeTileData } from "../types";

export const PERSONAL_INFO = {
  name: "Jihadul Islam Seyam",
  nickName: "Seyam",
  title: "Seyam -- Full-Stack & Flutter Developer",
  heroSubtitle:
    "a full-stack engineer, flutter & software developer driven by crafting striking and high-performance digital products",
  aboutText:
    "With a strong foundation in Computer Science at Green University of Bangladesh, i specialize in Flutter mobile apps, modern React & Next.js web applications, and scalable software systems. I truly enjoy turning complex challenges into clean, fast, and unforgettable digital products. Let's build something incredible together!",
  email: "seyam.code@gmail.com",
  phone: "+880 1841-007360",
  location: "Dhaka, Bangladesh",
  university: "Green University of Bangladesh",
  degree: "BSc in Computer Science & Engineering",
  // Real high-resolution GitHub profile photo (s=1000)
  heroPortrait: "https://avatars.githubusercontent.com/u/206592765?v=4&s=1000",
  githubProfile: "https://github.com/jiseyam",
  githubStreakSvg:
    "https://github-readme-streak-stats.herokuapp.com?user=jiseyam&theme=tokyonight&border=7F3FBF&background=0D1117&fire=F85D7F&sideLabels=true",
};

export const ABOUT_DECORATIONS = {
  moon: {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png",
    alt: "Floating Moon Accent",
  },
  object3d: {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png",
    alt: "Floating Geometric Accent",
  },
  lego: {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png",
    alt: "Floating Block Accent",
  },
  group: {
    src: "https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png",
    alt: "Floating Crystal Accent",
  },
};

// Moving Showcase: strictly real screenshots captured from running live projects (NO github code files, NO blank/white images, NO gifs)
export const MARQUEE_TILES_ROW_1: MarqueeTileData[] = [
  {
    id: "m1-streamvibe-hero",
    type: "image",
    src: "/projects/streamvibe.png",
    title: "Stream-Vibe — Hero Cinema Interface",
    link: "https://jiseyam.github.io/Stream-Vibe/",
  },
  {
    id: "m1-compiler-playground",
    type: "image",
    src: "/projects/compiler-playground.png",
    title: "Compiler Playground — In-Browser Workbench",
    link: "https://compiler-playground.vercel.app",
  },
  {
    id: "m1-cargame-live",
    type: "image",
    src: "/projects/car-game.png",
    title: "Hill Climb Racing Deluxe — 60 FPS Canvas Game",
    link: "https://car-game-nu-inky.vercel.app",
  },
  {
    id: "m1-bank-live",
    type: "image",
    src: "/projects/bank.png",
    title: "Fleeca Bank — FinTech Web Portal",
    link: "https://bank-pi-eight.vercel.app",
  },
  {
    id: "m1-nagorik-kotha",
    type: "image",
    src: "/projects/nagorik-kotha.png",
    title: "NagorikKotha — 64 Districts Civic Platform",
    link: "https://nagorik-kotha.vercel.app",
  },
  {
    id: "m1-tickerai-live",
    type: "image",
    src: "/projects/tickerai.png",
    title: "TickerAI — Tailwind CSS Market Intelligence",
    link: "https://tickeraidemo.netlify.app/",
  },
  {
    id: "m1-streamvibe-catalog",
    type: "image",
    src: "/projects/streamvibe-catalog.png",
    title: "Stream-Vibe — Movie Catalog Grid",
    link: "https://jiseyam.github.io/Stream-Vibe/",
  },
  {
    id: "m1-compiler-lexer",
    type: "image",
    src: "/projects/compiler-lexer.png",
    title: "Compiler Playground — Live Token Stream Lexer",
    link: "https://compiler-playground.vercel.app/lexer",
  },
  {
    id: "m1-bank-dashboard",
    type: "image",
    src: "/projects/bank-dashboard.png",
    title: "Fleeca Bank — Live Interactive Account Dashboard",
    link: "https://bank-pi-eight.vercel.app/dashboard",
  },
  {
    id: "m1-tickerai-markets",
    type: "image",
    src: "/projects/tickerai-markets.png",
    title: "TickerAI — Stock Analytics & Crypto News",
    link: "https://tickeraidemo.netlify.app/",
  },
];

export const MARQUEE_TILES_ROW_2: MarqueeTileData[] = [
  {
    id: "m2-compiler-nfa",
    type: "image",
    src: "/projects/compiler-nfa.png",
    title: "Compiler Playground — NFA to DFA Automata Graph",
    link: "https://compiler-playground.vercel.app/nfa-to-dfa",
  },
  {
    id: "m2-nagorik-feed",
    type: "image",
    src: "/projects/nagorik-kotha-feed.png",
    title: "NagorikKotha — Real-time Citizen Reports & Districts",
    link: "https://nagorik-kotha.vercel.app",
  },
  {
    id: "m2-streamvibe-hero2",
    type: "image",
    src: "/projects/streamvibe.png",
    title: "Stream-Vibe — Online Cinema Streaming Platform",
    link: "https://jiseyam.github.io/Stream-Vibe/",
  },
  {
    id: "m2-bank-dash2",
    type: "image",
    src: "/projects/bank-dashboard.png",
    title: "Fleeca Bank — Financial Dashboard & Transaction Ledger",
    link: "https://bank-pi-eight.vercel.app/dashboard",
  },
  {
    id: "m2-cargame2",
    type: "image",
    src: "/projects/car-game.png",
    title: "Hill Climb Racing Deluxe — Custom Physics Racing",
    link: "https://car-game-nu-inky.vercel.app",
  },
  {
    id: "m2-compiler-lexer2",
    type: "image",
    src: "/projects/compiler-lexer.png",
    title: "Compiler Playground — Interactive AST workbench",
    link: "https://compiler-playground.vercel.app/lexer",
  },
  {
    id: "m2-tickerai2",
    type: "image",
    src: "/projects/tickerai.png",
    title: "TickerAI — Market Aggregator Portal",
    link: "https://tickeraidemo.netlify.app/",
  },
  {
    id: "m2-streamvibe-cat2",
    type: "image",
    src: "/projects/streamvibe-catalog.png",
    title: "Stream-Vibe — Responsive Video Streaming UI",
    link: "https://jiseyam.github.io/Stream-Vibe/",
  },
  {
    id: "m2-tickerai-markets2",
    type: "image",
    src: "/projects/tickerai-markets.png",
    title: "TickerAI — Live Market Feed & Daily Rundowns",
    link: "https://tickeraidemo.netlify.app/",
  },
  {
    id: "m2-nagorik-hero2",
    type: "image",
    src: "/projects/nagorik-kotha.png",
    title: "NagorikKotha — Civic Issue Resolver Portal",
    link: "https://nagorik-kotha.vercel.app",
  },
];

export const SKILLS: Service[] = [
  {
    number: "01",
    name: "Flutter & Mobile Engineering",
    description:
      "High-performance cross-platform iOS and Android mobile apps crafted with Flutter, Dart, clean architecture, BLoC/Provider state management, and real-time Firebase services.",
    tech: [
      "Flutter",
      "Dart",
      "Firebase",
      "BLoC",
      "REST APIs",
      "Clean Architecture",
    ],
  },
  {
    number: "02",
    name: "Full-Stack Web Development",
    description:
      "Scalable, conversion-focused web applications built with Next.js, React, TypeScript, Tailwind CSS, REST APIs, and Supabase / PostgreSQL databases.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Supabase",
    ],
  },
  {
    number: "03",
    name: "Frontend Engineering & UI Systems",
    description:
      "Precision-crafted responsive interfaces, modular component design systems, smooth Framer Motion animations, and interactive web tools tailored for seamless user engagement.",
    tech: [
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "UI Architecture",
      "Responsive Design",
    ],
  },
  {
    number: "04",
    name: "Data Structures & Core Algorithms",
    description:
      "Strong foundation in algorithms, data structures, computer architecture simulation, and memory optimization implemented in C, Java, and Python.",
    tech: [
      "C",
      "Java",
      "Python",
      "Algorithms",
      "Data Structures",
      "System Simulation",
    ],
  },
  {
    number: "05",
    name: "Database Design & Backend Architecture",
    description:
      "Relational schema modeling and database design with MySQL and PostgreSQL, query optimization, role-based auth, and secure API architectures.",
    tech: [
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Schema Design",
      "Auth",
      "REST APIs",
    ],
  },
];

export const SERVICES = SKILLS;

// Project showcase with strictly real screenshots captured from running live projects (NO github code files, NO blank/white images, NO gifs)
export const PROJECTS: Project[] = [
  {
    id: "project-01",
    number: "01",
    name: "Stream-Vibe Cinema",
    category: "Streaming Media Platform",
    tag: "Multimedia • Dynamic UI • Video",
    description:
      "Modern multimedia streaming interface with responsive video browsing, dark-mode aesthetics, custom movie banners, trailers, multi-category carousels, and smooth interactive controls.",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive UI", "Video Streaming"],
    liveUrl: "https://jiseyam.github.io/Stream-Vibe/",
    githubUrl: "https://github.com/jiseyam/Stream-Vibe",
    col1Image1: "/projects/streamvibe.png",
    col1Image2: "/projects/streamvibe-catalog.png",
    col2Image: "/projects/streamvibe.png",
    accentColor: "#E11D48",
  },
  {
    id: "project-02",
    number: "02",
    name: "Compiler Playground",
    category: "Developer Tool & AST Engine",
    tag: "Compiler Theory • AST • In-Browser",
    description:
      "Interactive compiler design workbench watching algorithms think — live in-browser lexer, FIRST/FOLLOW calculation, LL(1) parsing, and NFA to DFA state machine conversions.",
    tech: ["TypeScript", "React", "AST Engine", "CodeMirror", "Tailwind CSS"],
    liveUrl: "https://compiler-playground.vercel.app",
    githubUrl: "https://github.com/jiseyam/Compiler-Playground",
    col1Image1: "/projects/compiler-lexer.png",
    col1Image2: "/projects/compiler-nfa.png",
    col2Image: "/projects/compiler-playground.png",
    accentColor: "#6366F1",
  },
  {
    id: "project-03",
    number: "03",
    name: "Hill Climb Racing Deluxe",
    category: "Game Engine & Canvas 2.5D",
    tag: "HTML5 Canvas • Web Audio • Physics",
    description:
      "Ultra-fast 60 FPS 2.5D physics-based arcade hill climbing racing game with custom chassis suspension physics, Web Audio synthesizer, 4 distinct vehicles, and 4 procedural nature worlds.",
    tech: [
      "HTML5 Canvas",
      "JavaScript",
      "Web Audio API",
      "Physics Engine",
      "Vite",
    ],
    liveUrl: "https://car-game-nu-inky.vercel.app",
    githubUrl: "https://github.com/jiseyam/car-game",
    col1Image1: "/projects/car-game.png",
    col1Image2: "/projects/car-game.png",
    col2Image: "/projects/car-game.png",
    accentColor: "#F59E0B",
  },
  {
    id: "project-04",
    number: "04",
    name: "Fleeca Bank Platform",
    category: "FinTech Web Portal",
    tag: "Next.js • Dashboard • Analytics",
    description:
      "High-performance digital banking and transaction portal built with modern web architecture, featuring clean financial overview cards, transaction records, and responsive dashboards.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Financial UI"],
    liveUrl: "https://bank-pi-eight.vercel.app",
    githubUrl: "https://github.com/jiseyam/bank",
    col1Image1: "/projects/bank.png",
    col1Image2: "/projects/bank-dashboard.png",
    col2Image: "/projects/bank-dashboard.png",
    accentColor: "#06B6D4",
  },
  {
    id: "project-05",
    number: "05",
    name: "TickerAI Platform",
    category: "Financial Market UI",
    tag: "Tailwind CSS • Responsive Design",
    description:
      "Modern AI-driven financial market intelligence interface built with custom Tailwind CSS layouts, interactive ticker components, and responsive mobile-first views.",
    tech: ["Tailwind CSS", "HTML5", "JavaScript", "Netlify", "UI Design"],
    liveUrl: "https://tickeraidemo.netlify.app/",
    githubUrl: "https://github.com/jiseyam/Tailwind-Projects",
    col1Image1: "/projects/tickerai.png",
    col1Image2: "/projects/tickerai-markets.png",
    col2Image: "/projects/tickerai-markets.png",
    accentColor: "#3B82F6",
  },
  {
    id: "project-06",
    number: "06",
    name: "NagorikKotha (নাগরিক কথা)",
    category: "Full-Stack Civic Platform",
    tag: "Next.js • Supabase • Realtime",
    description:
      "A comprehensive civic complaint platform for Bangladesh. Citizens create verified accounts, report local issues across all 64 districts, discuss in comments with @mentions, and upvote reports with real-time Supabase integration.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Framer Motion",
    ],
    liveUrl: "https://nagorik-kotha.vercel.app",
    githubUrl: "https://github.com/jiseyam/NagorikKotha",
    col1Image1: "/projects/nagorik-kotha.png",
    col1Image2: "/projects/nagorik-kotha-feed.png",
    col2Image: "/projects/nagorik-kotha.png",
    accentColor: "#10B981",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/jiseyam",
    label: "github.com/jiseyam",
    iconName: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jihadul-islam-seyam-497a6135a/",
    label: "linkedin.com/in/jihadul-islam-seyam",
    iconName: "linkedin",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/seyam.code/",
    label: "facebook.com/seyam.code",
    iconName: "facebook",
  },
  {
    name: "Email",
    url: "mailto:seyam.code@gmail.com",
    label: "seyam.code@gmail.com",
    iconName: "mail",
  },
];

export const TECH_STACK = [
  "Flutter",
  "Dart",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "C",
  "Tailwind CSS",
  "Supabase",
  "MySQL",
  "Git & GitHub",
  "VS Code",
];
