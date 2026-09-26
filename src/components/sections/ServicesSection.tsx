import React from "react";
import { FadeIn } from "../common/FadeIn";
import { SERVICES } from "../../data/portfolioData";

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20 shadow-2xl"
    >
      <div id="services" className="absolute -top-12 pointer-events-none" />
      <div className="w-full max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={30} className="text-center">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#0C0C0C]/60 mb-3 inline-block">
            Technical Proficiency &amp; Capabilities
          </span>
          <h2
            className="font-black uppercase text-center text-[#0C0C0C] mb-16 sm:mb-20 md:mb-28 leading-none select-none tracking-tight"
            style={{
              fontSize: "clamp(3rem, 12vw, 160px)",
              letterSpacing: "-0.03em",
            }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full flex flex-col border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.number}
              delay={index * 0.1}
              y={25}
              className="w-full"
            >
              <div className="group w-full flex flex-col md:flex-row md:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 transition-colors duration-300 hover:bg-black/[0.02] px-2 sm:px-4 rounded-xl">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none mb-4 md:mb-0 select-none w-full md:w-[160px] lg:w-[220px] flex-shrink-0"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 140px)",
                    lineHeight: "0.85",
                  }}
                >
                  {service.number}
                </div>

                {/* Name & Description stacked vertically on right */}
                <div className="flex-1 flex flex-col justify-center gap-2 sm:gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] leading-tight transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        fontSize: "clamp(1rem, 2.2vw, 2.1rem)",
                      }}
                    >
                      {service.name}
                    </h3>
                  </div>

                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-70"
                    style={{
                      fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)",
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Core skills & tech tags */}
                  {service.tech && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {service.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-black/5 text-[#0C0C0C]/80 font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
