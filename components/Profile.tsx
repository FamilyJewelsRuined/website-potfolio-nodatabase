"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import akbarImage from '../assets/akbar.png';
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

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

      <div className="flex flex-col md:flex-row gap-12 px-[50px] py-16 max-w-7xl mx-auto">
        
        {/* Left Column: About Me */}
        <div style={{ color: "#5170FF", fontFamily: "segoe ui", textAlign: "left" }} className="flex-1">
          <ScrollReveal preset="fadeUp">
            <h1 style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "1rem" }}>About Me</h1>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.1}>
            <p style={{  color: "#131313ff", fontSize: "20px", textAlign: "justify", lineHeight: "1.6" }}>
              I hear the drums echoin' tonight But she hears only whispers of some quiet conversation. She's comin' in, 12:30 flight The moonlit wings reflect the stars that guide me towards salvation. I stopped an old man along the way Hopin' to find some old forgotten words or ancient melodies. He turned to me as if to say "Hurry, boy, it's waitin' there for u"
            </p>
          </ScrollReveal>

          <hr className="my-8 border-t-2 border-[#5170FF]/20" />
          
          <ScrollReveal preset="fadeUp">
            <h2 style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "1rem" }}>Hobbies</h2>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <p style={{  color: "#131313ff", fontSize: "20px", textAlign: "justify", lineHeight: "1.6" }}>
              Dedicated to minimizing total cost of ownership and maximizing budget efficiency. Driven to eliminate operational friction through continuous process improvement. Early adopter of emerging tech stacks to maintain competitive advantage. Focused on automating routine tasks to accelerate delivery and reduce manual effort. Passionate about deep-diving into complex, niche domains to uncover unique solutions.
            </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Education Box */}
        <ScrollReveal preset="slideRight" delay={0.2} className="flex-1 md:max-w-md">
          <div className="border-2 border-[#5170FF] rounded-2xl p-8 shadow-sm flex flex-col gap-6 font-sans h-full">
            
            <div>
              <h2 className="text-[#5170FF] text-2xl font-bold mb-2 border-b-2 border-gray-100 pb-2">Education</h2>
              
      {/*edukasi SMK*/}
<div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-800">Multimedia</h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  2020 - 2023
                </span>
              </div>
              <p className="text-gray-600 font-medium">SMK Negeri 2 Banjarmasin</p>
              <p className="text-blue-500 font-semibold mt-2 text-sm bg-blue-50 w-fit px-2 py-1 rounded mb-2">
                  Overall Grade : 85 / 100</p>
              {/*edukasi kuliah*/}
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-gray-800">Informatics Engineering</h3>
                <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                  2023 - 2026
                </span>
              </div>
              <p className="text-gray-600 font-medium">Politeknik Negeri Banjarmasin</p>
              <p className="text-blue-500 font-semibold mt-2 text-sm bg-blue-50 w-fit px-2 py-1 rounded">GPA 3.73 / 4.00</p>
            </div>

            {/*edukasi kursus
            <div>
              <h2 className="text-[#5170FF] text-2xl font-bold mb-4 border-b-2 border-gray-100 pb-2 mt-4">
                Sertification</h2>
              <h3 className="font-bold text-lg text-gray-800 mb-1">Fullstack</h3>
              <p className="text-gray-600 font-medium">DBS Coding Camps 2025</p>
            </div>
*/}
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Greeting;