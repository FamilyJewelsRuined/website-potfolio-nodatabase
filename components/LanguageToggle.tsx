"use client";

import React from "react";
import { useLanguage, Language } from "@/context/LanguageContext";
import { FiGlobe } from "react-icons/fi";

interface LanguageToggleProps {
  className?: string;
}

export default function LanguageToggle({ className = "" }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`inline-flex items-center bg-[#0B0E1B] border border-[#1E2545] p-1 rounded-xl shadow-inner ${className}`}>
      <FiGlobe className="text-[#00F0FF] ml-2 mr-1.5 text-xs hidden sm:inline-block" />
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
          language === "en"
            ? "bg-[#00F0FF] text-black shadow-[0_0_10px_rgba(0,240,255,0.4)]"
            : "text-[#A3B3D1] hover:text-white"
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage("id")}
        className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all duration-200 ${
          language === "id"
            ? "bg-[#00F0FF] text-black shadow-[0_0_10px_rgba(0,240,255,0.4)]"
            : "text-[#A3B3D1] hover:text-white"
        }`}
        aria-label="Switch to Indonesian"
      >
        ID
      </button>
    </div>
  );
}
