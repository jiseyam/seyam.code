import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Facebook,
} from "lucide-react";
import { PERSONAL_INFO } from "../../data/portfolioData";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setStatusMessage("⚠️ Please fill out all required fields (*).");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    try {
      // 100% Direct Email Delivery via Web3Forms API matching https://github.com/jiseyam/seyam
      const formData = new FormData();
      formData.append("access_key", "eae497c5-4319-42ac-b3a1-a16a10c54a1c");
      formData.append("name", name.trim());
      formData.append("email", email.trim());
      formData.append(
        "subject",
        subject.trim() || `Portfolio Inquiry from ${name.trim()}`,
      );
      formData.append("message", message.trim());
      formData.append("from_name", name.trim());

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage(
          "🎉 Thank you! Your message has been sent successfully. I will respond shortly.",
        );
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (err) {
      console.error("Contact Form Error:", err);
      setStatus("error");
      setStatusMessage(
        "❌ Could not send message. Please try emailing directly to seyam.code@gmail.com.",
      );
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto overflow-x-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl max-h-[92vh] bg-[#0C0C0C] border-2 border-[#D7E2EA] rounded-[32px] sm:rounded-[44px] shadow-[0_30px_90px_rgba(0,0,0,0.95)] z-10 overflow-hidden flex flex-col"
          >
            {/* Ambient Metallic Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#D7E2EA]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#646973]/15 rounded-full blur-3xl pointer-events-none" />

            {/* Scrollable Body: Pure vertical scrolling, zero horizontal wobble or panning */}
            <div className="w-full h-full overflow-y-auto overflow-x-hidden p-5 sm:p-8 md:p-9 relative z-10">
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 text-[#D7E2EA] hover:text-black hover:bg-[#D7E2EA] transition-all p-2 rounded-full border border-[#D7E2EA]/30 cursor-pointer z-30"
              >
                <X className="w-5 h-5" />
              </button>

            {/* Modal Header */}
            <div className="mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121418] border border-[#D7E2EA]/30 text-xs font-semibold uppercase tracking-widest text-[#D7E2EA] mb-2.5">
                <span className="w-2 h-2 rounded-full bg-[#D7E2EA] animate-pulse" />
                <span>Direct Contact Hub</span>
              </div>
              <h2 className="hero-heading text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
                Let&apos;s Build Together
              </h2>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/75 mt-2 font-light leading-relaxed">
                Have a project in mind, mobile app inquiry, or software
                collaboration? Send a direct message below and I will respond
                promptly.
              </p>
            </div>

            {/* Direct Contact Details Quick Bar */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center justify-between p-3.5 bg-[#121418] rounded-2xl border border-[#D7E2EA]/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-wider font-medium">
                      Email
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-medium text-[#D7E2EA] hover:underline transition-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg border border-[#D7E2EA]/30 hover:bg-[#D7E2EA] hover:text-[#0C0C0C] text-xs text-[#D7E2EA] font-medium flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">
                        Copied
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2.5 p-3 bg-[#121418] rounded-2xl border border-[#D7E2EA]/20">
                  <div className="p-2 rounded-xl bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-wider font-medium">
                      Phone
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#D7E2EA]">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 bg-[#121418] rounded-2xl border border-[#D7E2EA]/20">
                  <div className="p-2 rounded-xl bg-white/5 border border-[#D7E2EA]/20 text-[#D7E2EA]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D7E2EA]/50 uppercase tracking-wider font-medium">
                      Location
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-[#D7E2EA]">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Message Form */}
            <form onSubmit={handleSubmit} className="space-y-3 mb-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-[#D7E2EA]/80 uppercase tracking-wider mb-1">
                    Your Name <span className="text-white font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jihadul Islam"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#D7E2EA]/20 rounded-xl text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/50 text-xs sm:text-sm transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-[#D7E2EA]/80 uppercase tracking-wider mb-1">
                    Your Email <span className="text-white font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#D7E2EA]/20 rounded-xl text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/50 text-xs sm:text-sm transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#D7E2EA]/80 uppercase tracking-wider mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry, flutter mobile app, or greeting"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#D7E2EA]/20 rounded-xl text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/50 text-xs sm:text-sm transition-all shadow-inner"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#D7E2EA]/80 uppercase tracking-wider mb-1">
                  Message <span className="text-white font-bold">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell me about your project, timeline, or idea..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#121418] border border-[#D7E2EA]/20 rounded-xl text-[#D7E2EA] placeholder-[#D7E2EA]/30 focus:outline-none focus:border-[#D7E2EA] focus:ring-1 focus:ring-[#D7E2EA]/50 text-xs sm:text-sm resize-none transition-all shadow-inner"
                />
              </div>

              {/* Status Alert */}
              {statusMessage && (
                <div
                  className={`p-3 rounded-xl text-xs leading-relaxed border transition-all ${
                    status === "success"
                      ? "bg-[#0C0C0C] border-2 border-emerald-400 text-emerald-300"
                      : status === "error"
                        ? "bg-[#0C0C0C] border-2 border-rose-400 text-rose-300"
                        : "bg-[#121418] border border-[#D7E2EA]/30 text-[#D7E2EA]"
                  }`}
                >
                  {statusMessage}
                </div>
              )}

              {/* Submit Button styled to match whole theme */}
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full inline-flex items-center justify-center gap-2.5 rounded-full border-2 border-[#D7E2EA] bg-[#0C0C0C] hover:bg-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] font-semibold uppercase tracking-widest py-3.5 sm:py-4 text-xs sm:text-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(215,226,234,0.4)] select-none"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0C0C0C]">
                  {status === "loading"
                    ? "Sending Message... ⏳"
                    : "Send Direct Message 🚀"}
                </span>
                <Send className="w-4 h-4 relative z-10 transition-all duration-300 group-hover:text-[#0C0C0C] group-hover:translate-x-1 group-hover:-translate-y-1" />
              </motion.button>
            </form>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 pt-3.5 border-t border-[#D7E2EA]/20">
              <a
                href="https://github.com/jiseyam"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#121418] hover:bg-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] transition-all hover:scale-110 border border-[#D7E2EA]/30"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jihadul-islam-seyam-497a6135a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#121418] hover:bg-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] transition-all hover:scale-110 border border-[#D7E2EA]/30"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/jiseyam15"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-[#121418] hover:bg-[#D7E2EA] text-[#D7E2EA] hover:text-[#0C0C0C] transition-all hover:scale-110 border border-[#D7E2EA]/30"
                aria-label="Facebook Profile"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
