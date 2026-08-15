"use client";

import React, { useRef, useState, useEffect } from 'react';
import ScrollReveal from "./ScrollReveal";

export interface Certificate {
  id: string | number;
  title: string;
  description: string;
  image_url?: string;
}

const defaultCertificates: Certificate[] = [
  { id: 1, title: "Certificate 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 2, title: "Certificate 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { id: 3, title: "Certificate 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
];

export interface CertificationsProps {
  certificates?: Certificate[];
}

export default function Certifications({ certificates = defaultCertificates }: CertificationsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScrollLeft = scrollWidth - clientWidth;
      setScrollProgress(maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  return (
    <div id="certifications" className="bg-[#0B0E1B] text-white min-h-[70vh] px-8 md:px-16 lg:px-24 py-20 font-sans flex items-center border-t border-[#1E2545]">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        
        {/* Left Column */}
        <div className="flex-1 max-w-lg lg:max-w-md w-full">
          <ScrollReveal preset="fadeUp">
            <h2 className="text-white text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight mb-6">
              Certifications & <span className="text-[#00F0FF]">Badges</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.1}>
            <p className="text-[#A3B3D1] text-[15px] md:text-[16px] leading-relaxed">
              Verified security credentials, SOC analyst certifications, and technical badges demonstrating hands-on expertise in threat detection, incident response, and secure software development.
            </p>
          </ScrollReveal>
        </div>

        {/* Right Column: Scrollable Cards */}
        <div className="flex-1 w-full relative flex flex-col">
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              height: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: #0B0E1B;
              border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #00F0FF;
              border-radius: 3px;
            }
          `}</style>
          <div 
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar"
          >
            {certificates.map((cert, index) => (
              <ScrollReveal 
                key={cert.id} 
                preset="fadeUp" 
                delay={0.1 + index * 0.1}
                className="w-[280px] md:w-[340px] snap-center flex flex-col border border-[#1E2545] bg-[#121629] rounded-2xl overflow-hidden shrink-0 hover:border-[#00F0FF]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="w-full aspect-video relative border-b border-[#1E2545] bg-[#0B0E1B] overflow-hidden">
                  {cert.image_url ? (
                    <img src={cert.image_url} alt={cert.title} className="w-full h-full object-cover" />
                  ) : (
                    <img src="/tempimage.png" alt="Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                  )}
                </div>
                
                <div className="p-5">
                  <h3 className="text-[#00F0FF] font-bold text-lg md:text-xl mb-2">{cert.title}</h3>
                  <p className="text-[#A3B3D1] text-[14px] leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}