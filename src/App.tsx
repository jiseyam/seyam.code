import React, { useState } from "react";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeSection } from "./components/sections/MarqueeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { FooterSection } from "./components/sections/FooterSection";
import { ContactModal } from "./components/common/ContactModal";

export const App: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main
      className="relative w-full min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-kanit antialiased"
      style={{
        overflowX: "clip",
      }}
    >
      {/* 1. Hero Section */}
      <HeroSection onContactClick={handleOpenContact} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection onContactClick={handleOpenContact} />

      {/* 4. Services Section */}
      <ServicesSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Contact / Footer Section */}
      <FooterSection onContactClick={handleOpenContact} />

      {/* Interactive Contact Drawer Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContact} />
    </main>
  );
};

export default App;
