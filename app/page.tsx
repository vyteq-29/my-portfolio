"use client";

import { useState } from "react";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import InteractiveSection from "./components/InteractiveSection";
import MainSections from "./components/MainSections";
import NavBar from "./components/NavBar";
import EnquirySection from "./components/EnquirySection";

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toastText, setToastText] = useState("");
  const [isToastVisible, setIsToastVisible] = useState(false);

  const triggerToast = (message: string) => {
    setToastText(message);
    setIsToastVisible(true);
    setTimeout(() => setIsToastVisible(false), 3500);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => triggerToast("Copied Vyteq Contact link directly to your clipboard!"))
      .catch(() => {
        const tempEl = document.createElement("textarea");
        tempEl.value = text;
        document.body.appendChild(tempEl);
        tempEl.select();
        document.execCommand("copy");
        document.body.removeChild(tempEl);
        triggerToast("Copied Vyteq Contact link directly to your clipboard!");
      });
  };

  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen overflow-x-hidden antialiased">
      <NavBar
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen((prev) => !prev)}
      />
      <HeroSection />
      <MainSections />
      <InteractiveSection />
      <EnquirySection copyToClipboard={copyToClipboard} />
      <FooterSection
        copyToClipboard={copyToClipboard}
        isToastVisible={isToastVisible}
        toastText={toastText}
      />
    </div>
  );
}
