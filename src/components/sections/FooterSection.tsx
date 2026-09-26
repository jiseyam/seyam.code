import React from "react";
import { FadeIn } from "../common/FadeIn";
import { ContactButton } from "../common/ContactButton";
import { PERSONAL_INFO, TECH_STACK } from "../../data/portfolioData";
import { Github, Linkedin, Facebook, Mail, ArrowUp } from "lucide-react";

interface FooterSectionProps {
  onContactClick: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  onContactClick,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#080808] border-t border-[#D7E2EA]/10 px-5 sm:px-8 md:px-10 py-16 sm:py-20 text-[#D7E2EA] select-none"
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Upper Banner */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <FadeIn delay={0.1} y={20} className="max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#BBCCD7] font-semibold">
              Ready for the next bold project?
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mt-2 leading-tight">
              Let&apos;s Create Something Extraordinary
            </h3>
            <p className="text-sm sm:text-base text-[#D7E2EA]/70 mt-3 font-light leading-relaxed">
              Based in {PERSONAL_INFO.location}. Available for freelance mobile
              applications, full-stack web platforms, software engineering, and
              creative UI design systems.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} y={20}>
            <ContactButton onClick={onContactClick} label="Get In Touch" />
          </FadeIn>
        </div>

        {/* GitHub Live Stats Strip */}
        <FadeIn delay={0.25} y={20} className="w-full">
          <div className="p-4 sm:p-6 rounded-[28px] bg-[#121418] border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[#B600A8] font-semibold">
                GitHub Activity &amp; Live Contributions
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Continuous Learning &amp; Code Streaks
              </h4>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 max-w-lg">
                Tracking software development, mobile experiments, and open
                source commits on GitHub (@jiseyam).
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={PERSONAL_INFO.githubProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-95 transition-opacity"
              >
                <img
                  src={PERSONAL_INFO.githubStreakSvg}
                  alt="Seyam's GitHub Streak"
                  className="rounded-xl max-w-full h-auto shadow-md"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Middle Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Col 1: Identity */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Developer
            </h4>
            <p className="text-base font-medium text-white">
              {PERSONAL_INFO.name}
            </p>
            <p className="text-xs text-[#D7E2EA]/60 mt-1">
              {PERSONAL_INFO.heroSubtitle}
            </p>
            <p className="text-xs text-[#BBCCD7] mt-2 font-light">
              {PERSONAL_INFO.degree}
              <br />
              {PERSONAL_INFO.university}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-white transition-colors text-sm font-medium"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors text-sm font-medium"
                >
                  Skills & Capabilities
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-white transition-colors text-sm font-medium"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onContactClick}
                  className="hover:text-white transition-colors text-sm font-medium bg-transparent border-none p-0 cursor-pointer text-left"
                >
                  Contact & Bookings
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Tech Core */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Core Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[#D7E2EA]/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://github.com/jiseyam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jihadul-islam-seyam-497a6135a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/seyam.code/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all hover:scale-110"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 hover:text-white transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs text-[#BBCCD7] hover:underline block"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-[#D7E2EA]/50">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name} (
            {PERSONAL_INFO.nickName}). All rights reserved.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer py-1 px-3 rounded-full bg-white/5 hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
