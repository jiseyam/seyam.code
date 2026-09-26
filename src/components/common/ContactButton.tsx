import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = "",
  label = "Contact Me",
  showIcon = true,
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`group relative inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#D7E2EA] bg-[#0C0C0C] hover:bg-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] transition-all duration-300 px-7 py-3 sm:px-9 sm:py-3.5 md:px-10 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest cursor-pointer select-none shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(215,226,234,0.4)] ${className}`}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0C0C0C]">
        {label}
      </span>
      {showIcon && (
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-all duration-300 group-hover:text-[#0C0C0C] group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </motion.button>
  );
};
