"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import akbarImage from '../app/assets/akbar.png';
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import SocialLinks from "./SocialLinks";

interface GreetingProps {
  initialName?: string;
}

const Greeting: React.FC<GreetingProps> = ({ initialName = 'World' }) => {
  const [name, setName] = useState<string>(initialName);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div style={{ backgroundColor: "#F3F3F3", minHeight: "100vh" }}>

      <div id="blue" style={{ color: "#5170FF", fontFamily: "segoe ui", fontSize: "57px", fontWeight: "bold", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ScrollReveal preset="fadeUp" duration={0.8}>
          <h1>Akbar Mulianda Rusdy Abidin Putra</h1>
        </ScrollReveal>
        <div className="relative flex flex-col md:inline-block items-center mt-1 w-full max-w-[256px]">
          <ScrollReveal preset="scaleUp" delay={0.2} duration={0.7}>
            <Image
              src={akbarImage}
              alt="Akbar"
              width={256}
              height={256}
              style={{ borderRadius: "50%", objectFit: "cover" }}
              className="z-10 relative mb-12 md:mb-0"
            />
          </ScrollReveal>

          <ScrollReveal preset="slideLeft" delay={0.3} className="relative md:absolute md:-left-[240px] lg:-left-[350px] md:top-12 w-[220px] mb-12 md:mb-0 z-20">
            <div className="relative border border-blue-400 bg-[#F3F3F3] px-4 py-5 text-center flex flex-col items-center justify-center shadow-md">

              <p className="text-gray-600 text-[14px] font-medium leading-snug">
                Banjarmasin, Indonesia<br />
                0897 7228 711<br />
                akbar.mulianda@gmail.com<br />

              </p>

              <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-10 h-[4px] bg-blue-500"></div>

              <div className="absolute -top-5 -right-5 w-11 h-11 rounded-full border border-blue-400 bg-[#F3F3F3] flex items-center justify-center text-xl shadow-sm">
                🤖
              </div>
            </div>
          </ScrollReveal>

          {/* Presented by block */}
          <ScrollReveal preset="slideRight" delay={0.4} className="relative md:absolute md:-right-[300px] lg:-right-[222px] md:top-[160px] flex flex-col items-center md:items-start z-20 w-max">
            <p className="text-gray-500 font-medium text-[14px] leading-none mb-1">
              Powered by</p>
            <h2 className="text-[#647FFF] font-bold text-lg md:text-xl leading-none border-b-2 border-[#8BA2FF] pb-1 text-center md:text-left">
              Next.js & Vercel
            </h2>
          </ScrollReveal>
        </div>
        <ScrollReveal preset="fadeUp" delay={0.3}>
          <div id="blue" style={{ color: "#5170FF", padding: "1rem", fontFamily: "calibri", fontSize: "20px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <p>Full-stack engineer building scalable web apps with a foundation in <br />
              Systems Technician and an active focus on cybersecurity.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal preset="fadeUp" delay={0.5}>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-[#5170FF] px-6 py-3 text-lg text-white font-semibold hover:bg-[#3f5df5] transition"
            >
              View Projects
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-[#5170FF] text-lg px-6 py-3 text-[#5170FF] font-semibold hover:bg-[#5170FF] hover:text-white transition"
            >
              About Me
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal preset="fadeUp" delay={0.6}>
          <SocialLinks variant="dark" className="mt-6" />
        </ScrollReveal>
      </div>



    </div>
  );
};

export default Greeting;   