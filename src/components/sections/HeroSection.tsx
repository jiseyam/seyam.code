import React from "react";
import { FadeIn } from "../common/FadeIn";
import { Magnet } from "../common/Magnet";
import { ContactButton } from "../common/ContactButton";
import { PERSONAL_INFO } from "../../data/portfolioData";
import { Sparkles, MapPin } from "lucide-react";

interface HeroSectionProps {
  onContactClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 30);

      if (currentY <= 30) {
        setIsVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        // Scrolling down -> hide navbar
        setIsVisible(false);
      } else if (currentY < lastScrollY.current - 8) {
        // Scrolling up -> show navbar
        setIsVisible(true);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Fixed Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled
            ? "bg-[#0C0C0C]/85 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4 shadow-[0_10px_30px_rgba(0,0,0,0.85)]"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium text-[#D7E2EA]"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium text-[#D7E2EA]"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium text-[#D7E2EA]"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={onContactClick}
            className="hover:opacity-70 transition-opacity duration-200 cursor-pointer bg-transparent border-none p-0 uppercase font-medium text-[#D7E2EA]"
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Top spacer preserving vertical flex balance */}
      <div className="w-full h-16 sm:h-20 pointer-events-none" />

      {/* 2. Hero Heading: Massive Seyam Title */}
      <FadeIn delay={0.15} y={40} className="w-full z-20">
        <div className="w-full overflow-hidden flex justify-center items-center mt-6 sm:mt-4 md:-mt-5 select-none pointer-events-none">
          <h1
            className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]"
            style={{
              letterSpacing: "-0.04em",
            }}
          >
            Hi, i&apos;m seyam
          </h1>
        </div>
      </FadeIn>

      {/* 3. Hero 3D Portrait: Seyam's Real GitHub Photo with 3D Sculpted Lighting */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[270px] sm:w-[350px] md:w-[430px] lg:w-[490px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          enableTilt3D={true}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex justify-center items-end relative group cursor-pointer"
        >
          {/* Volumetric 3D Ambient Backlight */}
          <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-t from-[#B600A8]/35 via-[#7621B0]/25 to-[#00F2FE]/20 rounded-t-[80px] sm:rounded-t-[100px] blur-3xl -z-10 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-80" />

          {/* 3D Sculpted Portrait Frame Container */}
          <div className="relative w-full overflow-hidden rounded-t-[60px] sm:rounded-t-[90px] md:rounded-t-[110px] rounded-b-2xl border-t-2 border-x-2 border-white/30 bg-gradient-to-b from-[#1E2330]/80 via-[#10131A]/95 to-[#0C0C0C] p-2.5 sm:p-3 shadow-[0_30px_90px_rgba(0,0,0,0.95)]">
            {/* Top 3D Specular Sheen */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/20 via-white/5 to-transparent pointer-events-none z-20" />

            {/* Profile Image with high resolution and 3D depth lighting */}
            <div className="relative w-full aspect-[4/5] rounded-t-[50px] sm:rounded-t-[80px] md:rounded-t-[100px] rounded-b-xl overflow-hidden bg-[#12151D]">
              <img
                src={PERSONAL_INFO.heroPortrait}
                alt="Jihadul Islam Seyam — Software Engineer & Full-Stack Developer"
                className="w-full h-full object-cover object-top select-none pointer-events-none contrast-[1.08] saturate-[1.05] drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                loading="eager"
                draggable={false}
              />

              {/* Bottom Subtle Gradient Fade to seamless black floor */}
              <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none z-10" />
            </div>

            {/* Floating Micro Badge Overlay */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 shadow-2xl">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white whitespace-nowrap">
                FULL-STACK &bull; FLUTTER DEV
              </span>
            </div>
          </div>

          {/* Left Floating Hologram Pill */}
          <div className="hidden md:flex absolute -left-10 top-1/3 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/30 text-[11px] font-medium text-purple-200 shadow-xl pointer-events-none z-30">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>FLUTTER &bull; REACT</span>
          </div>

          {/* Right Floating Hologram Pill */}
          <div className="hidden md:flex absolute -right-8 top-2/5 -translate-y-1/2 items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-cyan-500/30 text-[11px] font-medium text-cyan-200 shadow-xl pointer-events-none z-30">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>DHAKA, BD</span>
          </div>
        </Magnet>
      </FadeIn>

      {/* 4. Bottom Bar */}
      <div className="w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 flex justify-between items-end z-20">
        {/* Left text */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] select-none"
            style={{
              fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)",
            }}
          >
            {PERSONAL_INFO.heroSubtitle}
          </p>
        </FadeIn>

        {/* Right Contact button */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
