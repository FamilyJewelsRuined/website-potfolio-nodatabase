"use client";

import React from 'react';
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "@/context/LanguageContext";

export interface Certificate {
  id: string | number;
  title: string;
  description: string;
  image_url?: string;
  pdf_url?: string;
}

const defaultCertificates: Certificate[] = [
  {
    id: 1,
    title: "Cisco Cybersecurity",
    description: "Certification verifying foundational knowledge in network security, cybersecurity principles, threat defense, and ethical hacking fundamentals provided by Cisco Networking Academy.",
    image_url: "/certificates/cisco-cybersecurity.png",
    pdf_url: "/certificates/cisco-cybersecurity.pdf"
  },
  {
    id: 2,
    title: "Front-End Programmer (PBL)",
    description: "Competency certification in modern front-end web development, covering responsive UI architecture, JavaScript frameworks, and hands-on Project-Based Learning.",
    image_url: "/certificates/FEProgrammerPBL.png",
    pdf_url: "/certificates/FEProgrammerPBL.pdf"
  },
  {
    id: 3,
    title: "Junior Cybersecurity Specialist",
    description: "Professional certification validating core skills in system vulnerability assessment, network defense operations, basic incident response, and security compliance.",
    image_url: "/certificates/sertifikatjuniorcybersecurity.png",
    pdf_url: "/certificates/sertifikatjuniorcybersecurity.pdf"
  }
];

export interface CertificationsProps {
  certificates?: Certificate[];
}

export default function Certifications({ certificates = defaultCertificates }: CertificationsProps) {
  const { t } = useLanguage();

  const certList = certificates.map((cert) => {
    if (cert.id === 1) return { ...cert, title: t("cert1Title"), description: t("cert1Desc") };
    if (cert.id === 2) return { ...cert, title: t("cert2Title"), description: t("cert2Desc") };
    if (cert.id === 3) return { ...cert, title: t("cert3Title"), description: t("cert3Desc") };
    return cert;
  });

  return (
    <div id="certifications" className="bg-[#0B0E1B] text-white min-h-[70vh] px-8 md:px-16 lg:px-24 py-20 font-sans flex items-center border-t border-[#1E2545] overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Column */}
        <div className="flex-1 max-w-lg lg:max-w-md w-full">
          <ScrollReveal preset="fadeUp">
            <h2 className="text-white text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6">
              {t("certificationsTitle")} <span className="text-[#00F0FF]">{t("certificationsBadgeTitle")}</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.1}>
            <p className="text-[#A3B3D1] text-[15px] md:text-[16px] leading-relaxed">
              {t("certificationsDesc")}
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Scrollable Cards Container */}
        <div className="flex-1 w-full min-w-0 relative flex flex-col">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 6px;
              width: 0px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #121629;
              border-radius: 3px;
              border: 1px solid #1E2545;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #00F0FF;
              border-radius: 3px;
              box-shadow: 0 0 10px rgba(0,240,255,0.5);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #38bdf8;
            }
          `}</style>

          <div 
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory custom-scrollbar"
          >
            {certList.map((cert, index) => (
              <ScrollReveal 
                key={cert.id} 
                preset="fadeUp" 
                delay={0.1 + index * 0.1}
                className="w-[280px] md:w-[340px] snap-center flex flex-col border border-[#1E2545] bg-[#121629] rounded-2xl overflow-hidden shrink-0 hover:border-[#00F0FF]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300 group"
              >
                {/* Image / Thumbnail */}
                <a 
                  href={cert.pdf_url ?? "#"} 
                  target={cert.pdf_url ? "_blank" : "_self"} 
                  rel="noopener noreferrer"
                  className="w-full aspect-video relative border-b border-[#1E2545] bg-[#0B0E1B] overflow-hidden block"
                >
                  {cert.image_url ? (
                    <img 
                      src={cert.image_url} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <img 
                      src="/tempimage.png" 
                      alt="Placeholder" 
                      className="absolute inset-0 w-full h-full object-cover opacity-80" 
                    />
                  )}
                </a>
                
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-[#00F0FF] font-bold text-lg md:text-xl mb-2">{cert.title}</h3>
                    <p className="text-[#A3B3D1] text-[14px] leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  </div>

                  {cert.pdf_url && (
                    <a
                      href={cert.pdf_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00F0FF] hover:text-cyan-300 transition-colors mt-auto group/link"
                    >
                      {t("viewCertPdf")}{" "}
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}