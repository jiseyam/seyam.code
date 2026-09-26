import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../../data/portfolioData";
import { Project } from "../../types";
import { LiveProjectButton } from "../common/LiveProjectButton";
import { FadeIn } from "../common/FadeIn";
import { Github, Code2 } from "lucide-react";

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const ProjectImageTile: React.FC<{
  src: string;
  alt: string;
  project: Project;
  slotType: "top" | "bottom" | "tall";
}> = ({ src, alt, project, slotType }) => {
  const [imgError, setImgError] = React.useState(false);

  if (!imgError) {
    return (
      <div className="relative w-full h-full overflow-hidden bg-[#12141A] group">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: project.accentColor || "#10B981" }}
            />
            <span>{project.name}</span>
          </div>
          <p className="text-[11px] text-[#BBCCD7] line-clamp-1">
            {project.tag}
          </p>
        </div>
      </div>
    );
  }

  // Fallback high-fidelity developer mockup tile if an image fails to load
  return (
    <div
      className="relative w-full h-full p-6 flex flex-col justify-between overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #141720 0%, #0E1015 100%)`,
      }}
    >
      <div
        className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: project.accentColor || "#7621B0" }}
      />

      <div className="flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono text-white/70">{project.id}</span>
        </div>
        <span
          className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full border border-white/10"
          style={{ color: project.accentColor || "#D7E2EA" }}
        >
          {slotType.toUpperCase()}
        </span>
      </div>

      <div className="z-10 my-auto">
        <h5 className="text-xl font-black uppercase text-white tracking-tight">
          {project.name}
        </h5>
        <p className="text-xs text-[#D7E2EA]/70 mt-1 line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 z-10">
        {project.tech.slice(0, 3).map((t) => (
          <span
            key={t}
            className="text-[10px] px-2 py-0.5 rounded bg-black/50 border border-white/5 text-[#BBCCD7]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky w-full flex items-center justify-center mb-12 sm:mb-16 md:mb-24"
      style={{
        top: `calc(5.5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: "top center",
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] will-change-transform overflow-hidden relative"
      >
        {/* Subtle Ambient Color Glow */}
        <div
          className="absolute -top-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ backgroundColor: project.accentColor || "#7621B0" }}
        />

        {/* Top Row: Number, Category, Name & Action Buttons */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/20 relative z-10">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Huge Number */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none"
              style={{
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                lineHeight: "0.85",
              }}
            >
              {project.number}
            </span>

            {/* Category & Project Title */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium flex items-center gap-2">
                <span>({project.category})</span>
                <span>&bull;</span>
                <span style={{ color: project.accentColor || "#D7E2EA" }}>
                  {project.tag}
                </span>
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight mt-1"
                style={{
                  fontSize: "clamp(1.25rem, 2.8vw, 2.4rem)",
                }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          {/* Action Buttons: Live Project & GitHub */}
          <div className="flex items-center gap-3 self-end lg:self-center">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="p-3 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] hover:bg-white/10 hover:border-white transition-all flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
            )}

            <LiveProjectButton
              href={project.liveUrl}
              label="Live Project"
              className="cursor-pointer"
            />
          </div>
        </div>

        {/* Project Description & Tech Stack Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 pb-2 relative z-10 text-xs sm:text-sm">
          <p className="text-[#D7E2EA]/80 font-light max-w-2xl leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 self-start sm:self-center">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#BBCCD7]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-6 mt-4 sm:mt-6 relative z-10">
          {/* Left Column (40% width / 4 cols) - 2 Stacked Images */}
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-6">
            {/* Left Top Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A20] border border-white/10 shadow-lg"
              style={{
                height: "clamp(130px, 16vw, 230px)",
              }}
            >
              <ProjectImageTile
                src={project.col1Image1}
                alt={`${project.name} preview 1`}
                project={project}
                slotType="top"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A20] border border-white/10 shadow-lg"
              style={{
                height: "clamp(160px, 22vw, 340px)",
              }}
            >
              <ProjectImageTile
                src={project.col1Image2}
                alt={`${project.name} preview 2`}
                project={project}
                slotType="bottom"
              />
            </div>
          </div>

          {/* Right Column (60% width / 6 cols) - 1 Tall Hero Image */}
          <div className="md:col-span-6 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#181A20] border border-white/10 shadow-lg min-h-[300px] md:min-h-full">
            <ProjectImageTile
              src={project.col2Image}
              alt={`${project.name} primary showcase`}
              project={project}
              slotType="tall"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-30 px-4 sm:px-8 md:px-10 pt-20 sm:pt-28 md:pt-36 pb-28 sm:pb-36"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Heading: "Project" (singular) */}
        <FadeIn
          delay={0}
          y={40}
          className="w-full text-center mb-16 sm:mb-20 md:mb-28"
        >
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center select-none"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              letterSpacing: "-0.03em",
            }}
          >
            Project
          </h2>
        </FadeIn>

        {/* Sticky-Stacking Project Cards */}
        <div className="relative w-full flex flex-col items-center">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
