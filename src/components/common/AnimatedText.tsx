import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CharacterSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharacterSpan: React.FC<CharacterSpanProps> = ({
  char,
  progress,
  range,
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for exact layout and kerning */}
      <span className="opacity-0 select-none">{char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 text-[#D7E2EA] font-medium"
      >
        {char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  const totalChars = text.length;

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`leading-relaxed text-center select-none ${className}`}
    >
      {words.map((word, wordIndex) => {
        const characters = word.split("");
        const startIndex = globalCharIndex;
        globalCharIndex += characters.length + 1; // +1 for space

        return (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap mr-[0.35em]"
          >
            {characters.map((char, charIdx) => {
              const charPosition = startIndex + charIdx;
              // Smooth stagger window for character transition
              const start = Math.max(0, (charPosition / totalChars) * 0.9);
              const end = Math.min(1, start + 0.1);

              return (
                <CharacterSpan
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
