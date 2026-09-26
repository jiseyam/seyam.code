import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = "",
  label = "Live Project",
}) => {
  const content = (
    <span className="inline-flex items-center gap-2">
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );

  const buttonClasses = `group relative inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#D7E2EA]/10 px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base select-none ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={buttonClasses}
    >
      {content}
    </motion.button>
  );
};
