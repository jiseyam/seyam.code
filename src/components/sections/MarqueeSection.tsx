import React, { useRef, useState, useEffect } from "react";
import {
  MARQUEE_TILES_ROW_1,
  MARQUEE_TILES_ROW_2,
} from "../../data/portfolioData";
import { MarqueeTileData } from "../../types";
import { ArrowUpRight, Sparkles } from "lucide-react";

const MarqueeTile: React.FC<{ item: MarqueeTileData }> = ({ item }) => {
  if (item.type === "image" && item.src) {
    return (
      <div className="relative w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#14171E] border border-white/10 shadow-lg group">
        <img
          src={item.src}
          alt={item.title || "Seyam project preview"}
          loading="lazy"
          className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
          draggable={false}
        />
        {item.title && (
          <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between">
            <span className="text-xs font-medium text-white drop-shadow">
              {item.title}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="relative w-[280px] h-[180px] sm:w-[350px] sm:h-[225px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden p-5 sm:p-6 flex flex-col justify-between border border-white/10 shadow-xl transition-all duration-300 hover:border-white/25 group cursor-pointer"
      style={{
        background: "linear-gradient(145deg, #14161D 0%, #0D0F14 100%)",
      }}
      onClick={() => {
        if (item.link) window.open(item.link, "_blank");
      }}
    >
      {/* Accent Corner Glow */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
        style={{ backgroundColor: item.accentColor || "#7621B0" }}
      />

      {/* Top Meta: Badge & Arrow */}
      <div className="flex items-center justify-between relative z-10">
        <span
          className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 bg-white/5 flex items-center gap-1.5"
          style={{ color: item.accentColor || "#BBCCD7" }}
        >
          <Sparkles className="w-3 h-3" />
          <span>{item.badge || "Project"}</span>
        </span>

        {item.link && (
          <div className="p-1.5 rounded-full bg-white/5 text-white/60 group-hover:text-white group-hover:bg-white/15 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        )}
      </div>

      {/* Center Content: Title & Subtitle */}
      <div className="relative z-10">
        <h4 className="text-lg sm:text-xl font-bold uppercase text-white tracking-tight group-hover:text-purple-300 transition-colors line-clamp-1">
          {item.title}
        </h4>
        <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 line-clamp-2 font-light leading-relaxed">
          {item.subtitle}
        </p>
      </div>

      {/* Bottom Tech Tags */}
      <div className="flex flex-wrap gap-1.5 relative z-10">
        {item.tech?.slice(0, 3).map((tag, idx) => (
          <span
            key={idx}
            className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/5 text-[#BBCCD7]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const calculatedOffset =
              (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setOffset(calculatedOffset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Tripled items for smooth continuous scrolling
  const tripledRow1 = [
    ...MARQUEE_TILES_ROW_1,
    ...MARQUEE_TILES_ROW_1,
    ...MARQUEE_TILES_ROW_1,
  ];
  const tripledRow2 = [
    ...MARQUEE_TILES_ROW_2,
    ...MARQUEE_TILES_ROW_2,
    ...MARQUEE_TILES_ROW_2,
  ];

  const row1Transform = `translateX(${offset - 200}px)`;
  const row2Transform = `translateX(${-(offset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row1Transform,
            willChange: "transform",
            transition: "transform 0.05s linear",
          }}
        >
          {tripledRow1.map((item, index) => (
            <MarqueeTile key={`row1-${item.id}-${index}`} item={item} />
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 will-change-transform"
          style={{
            transform: row2Transform,
            willChange: "transform",
            transition: "transform 0.05s linear",
          }}
        >
          {tripledRow2.map((item, index) => (
            <MarqueeTile key={`row2-${item.id}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
