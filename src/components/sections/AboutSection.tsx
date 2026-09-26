import React from "react";
import { FadeIn } from "../common/FadeIn";
import { AnimatedText } from "../common/AnimatedText";
import { ContactButton } from "../common/ContactButton";
import { ABOUT_DECORATIONS, PERSONAL_INFO } from "../../data/portfolioData";

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onContactClick,
}) => {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden select-none"
    >
      {/* 4 Decorative 3D Floating Images in Corners */}

      {/* Top-Left: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.moon.src}
          alt={ABOUT_DECORATIONS.moon.alt}
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-Left: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.object3d.src}
          alt={ABOUT_DECORATIONS.object3d.alt}
          className="w-[100px] sm:w-[140px] md:w-[180px] object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
          draggable={false}
        />
      </FadeIn>

      {/* Top-Right: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.lego.src}
          alt={ABOUT_DECORATIONS.lego.alt}
          className="w-[120px] sm:w-[160px] md:w-[210px] object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
          draggable={false}
        />
      </FadeIn>

      {/* Bottom-Right: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-10 pointer-events-none"
      >
        <img
          src={ABOUT_DECORATIONS.group.src}
          alt={ABOUT_DECORATIONS.group.alt}
          className="w-[130px] sm:w-[170px] md:w-[220px] object-contain drop-shadow-2xl opacity-90 hover:opacity-100 transition-opacity"
          draggable={false}
        />
      </FadeIn>

      {/* Main Content Column */}
      <div className="relative z-20 flex flex-col items-center w-full max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="w-full text-center">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              letterSpacing: "-0.03em",
            }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Spacing between heading & text */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Character-by-character scroll-driven opacity paragraph */}
        <div className="w-full max-w-[560px] px-4">
          <AnimatedText
            text={PERSONAL_INFO.aboutText}
            className="text-[#D7E2EA] font-medium leading-relaxed text-center"
          />
        </div>

        {/* Spacing between text block & Contact button */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact Button */}
        <FadeIn delay={0.2} y={30}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
