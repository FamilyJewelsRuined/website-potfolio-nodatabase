"use client";

import ScrollReveal from "./ScrollReveal";
import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="font-sans flex flex-col md:flex-row w-full min-h-[550px] bg-[#0B0E1B] border-t border-[#1E2545] text-white p-8 md:p-16 gap-8 max-w-7xl mx-auto">

      {/* Left Column (Dark Navy Panel) */}
      <div className="flex-1 bg-[#121629] border border-[#1E2545] rounded-2xl flex flex-col justify-center px-8 md:px-14 py-14 relative shadow-xl hover:border-[#00F0FF]/30 transition-all">
        <ScrollReveal preset="fadeUp">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10 tracking-tight">
            {t("contactHeader")} <span className="text-[#00F0FF]">{t("contactHeaderSuffix")}</span>
          </h2>

          <div className="max-w-sm mb-10">
            <p className="text-[#A3B3D1] font-medium text-[15px] mb-4 leading-relaxed">
              {t("contactDesc1")}
            </p>
            <p className="text-[#A3B3D1]/80 text-[14px] leading-relaxed">
              {t("contactDesc2P1")}<strong className="text-white">{t("contactDesc2Name")}</strong>{t("contactDesc2And")}<strong className="text-white">{t("contactDesc2Email")}</strong>{t("contactDesc2P2")}
            </p>
          </div>

          {/* Cyan Glow Divider */}
          <div className="w-full max-w-sm h-0.5 bg-[#00F0FF]/40 mb-6 shadow-[0_0_10px_rgba(0,240,255,0.3)]"></div>

          <div className="flex flex-col items-start max-w-sm relative">
            <p className="text-[#A3B3D1] text-xs uppercase font-semibold tracking-wider mb-4 w-full">{t("connectSocials")}</p>

            <div className="flex gap-4">
              <a href="https://instagram.com/thestrange_mrrusdi" target="_blank" rel="noopener noreferrer" className="bg-[#1E2545] border border-[#252D54] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black w-11 h-11 flex items-center justify-center rounded-xl transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)]" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://github.com/FamilyJewelsRuined" target="_blank" rel="noopener noreferrer" className="bg-[#1E2545] border border-[#252D54] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black w-11 h-11 flex items-center justify-center rounded-xl transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)]" aria-label="GitHub">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/akbarmrap/" target="_blank" rel="noopener noreferrer" className="bg-[#1E2545] border border-[#252D54] text-[#00F0FF] hover:bg-[#00F0FF] hover:text-black w-11 h-11 flex items-center justify-center rounded-xl transition-all shadow-[0_0_12px_rgba(0,240,255,0.15)]" aria-label="LinkedIn">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Right Column (Navy Action Card) */}
      <div className="flex-1 bg-[#161B33] border border-[#1E2545] rounded-2xl flex flex-col justify-center px-8 md:px-14 py-14 shadow-xl">
        <ScrollReveal preset="fadeUp" delay={0.2}>
          <h3 className="text-white text-2xl font-extrabold mb-8 tracking-tight">
            {t("sendMessageHeader")} <span className="text-[#00F0FF]">{t("sendMessageHeaderSuffix")}</span>
          </h3>

          <div className="flex flex-col gap-5 max-w-md">
            <a
              href="mailto:akbar.mulianda.rusdi@gmail.com"
              className="w-full bg-[#00E5FF] hover:bg-[#00CBE6] text-black font-extrabold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,229,255,0.35)] text-sm tracking-wider uppercase hover:scale-[1.02]"
            >
              <FaEnvelope size={18} />
              {t("emailMeBtn")}
            </a>

            <a
              href="https://www.linkedin.com/in/akbarmrap/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1E2545] hover:bg-[#252D54] border border-[#00F0FF]/30 text-white font-bold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-md hover:border-[#00F0FF] text-sm tracking-wide"
            >
              <FaLinkedinIn size={18} className="text-[#00F0FF]" />
              {t("connectLinkedinBtn")}
            </a>
          </div>
        </ScrollReveal>
      </div>

    </section>
  );
}