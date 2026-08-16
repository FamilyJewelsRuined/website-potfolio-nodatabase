"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export default function ProjectsHeader() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto flex justify-between items-end mb-10 border-b border-[#1E2545] pb-4">
      <ScrollReveal preset="fadeUp">
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          {t("projectsTitle")} <span className="text-[#00F0FF]">{t("projectsSubtitle")}</span>
        </h2>
      </ScrollReveal>
      <ScrollReveal preset="fadeUp" delay={0.1}>
        <a href="#" className="text-[#00F0FF] hover:text-cyan-300 text-sm md:text-[15px] font-bold transition-colors pb-1 flex items-center gap-1">
          {t("seeMoreProjects")}
        </a>
      </ScrollReveal>
    </div>
  );
}
