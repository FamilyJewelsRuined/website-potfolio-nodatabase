"use client";

import React from 'react';
import ScrollReveal from "./ScrollReveal";
import { IconType } from "react-icons";
import { 
  FaReact, FaNodeJs, FaPython, FaPhp, FaLaravel, FaGitAlt, 
  FaLinux, FaWrench, FaDesktop, FaHdd, FaNetworkWired, FaProjectDiagram, 
  FaShieldAlt 
} from "react-icons/fa";
import { 
  SiTypescript, SiPostgresql, SiVercel, SiNextdotjs, SiTailwindcss, 
  SiVite, SiJavascript, SiCodeigniter 
} from "react-icons/si";
import { MdRouter, MdDns, MdBuild } from "react-icons/md";

export interface SkillItem {
  name: string;
  icon: IconType;
}

export interface Skill {
  id: string | number;
  title: string;
  description?: string;
  image_url?: string;
  items?: SkillItem[];
}

const defaultSkills: Skill[] = [
  {
    id: 1,
    title: "Web Developer",
    description: "Building responsive, modern, and scalable full-stack applications.",
    items: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Node.js", icon: FaNodeJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: FaPython },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "PHP", icon: FaPhp },
      { name: "Laravel", icon: FaLaravel },
      { name: "CodeIgniter", icon: SiCodeigniter },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Git", icon: FaGitAlt },
      { name: "Vercel", icon: SiVercel },
    ]
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Securing infrastructure, monitoring intrusions, and server hardening.",
    items: [
      { name: "Crowdsec (IDS & IPS)", icon: FaShieldAlt },
      { name: "Linux", icon: FaLinux },
    ]
  },
  {
    id: 3,
    title: "Technical Support",
    description: "Hands-on hardware repair, OS maintenance, and IT support.",
    items: [
      { name: "PC & Laptop Repair", icon: FaWrench },
      { name: "OS Installation", icon: FaDesktop },
      { name: "System Maintenance", icon: MdBuild },
      { name: "Data Recovery", icon: FaHdd },
    ]
  },
  {
    id: 4,
    title: "Networking",
    description: "Designing, configuring, and troubleshooting network infrastructure.",
    items: [
      { name: "TCP/IP & Subnetting", icon: FaNetworkWired },
      { name: "Routing & Switching", icon: MdRouter },
      { name: "Network Troubleshooting", icon: FaProjectDiagram },
      { name: "DNS & DHCP", icon: MdDns },
    ]
  }
];

export interface StackProps {
  skills?: Skill[];
}

export default function Stack({ skills = defaultSkills }: StackProps) {
  return (
    <section id="skills" className="bg-[#0B0E1B] text-white px-8 md:px-16 lg:px-24 py-20 font-sans border-t border-[#1E2545]">
      <div className="max-w-7xl mx-auto w-full flex flex-col">

        {/* Heading */}
        <ScrollReveal preset="fadeUp" className="mb-10">
          <h2 className="text-white text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight">
            Technical <span className="text-[#00F0FF]">Skills</span> & Capabilities
          </h2>
        </ScrollReveal>

        {/* Scrollable Cards */}
        <div className="w-full relative flex flex-col min-w-0">
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
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #38bdf8;
            }
          `}</style>
          <div 
            className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 snap-x snap-mandatory custom-scrollbar"
          >
            {skills.map((skill, index) => (
              <ScrollReveal
                key={skill.id}
                preset="fadeUp"
                delay={0.1 + index * 0.1}
                className="w-[300px] md:w-[360px] snap-center flex flex-col border border-[#1E2545] bg-[#121629] rounded-2xl overflow-hidden shrink-0 hover:border-[#00F0FF]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300 group"
              >
                {/* Image Placeholder */}
                <div className="w-full h-[140px] relative border-b border-[#1E2545] bg-[#0B0E1B] overflow-hidden">
                  {skill.image_url ? (
                    <img src={skill.image_url} alt={skill.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#121629] to-[#0B0E1B] flex items-center justify-center">
                      <span className="text-[#1E2545] opacity-50 font-bold text-4xl tracking-wider uppercase select-none">
                        {skill.title.split(' ')[0]}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[#00F0FF] font-bold text-xl mb-2">{skill.title}</h3>
                  {skill.description && (
                    <p className="text-[#A3B3D1] text-[14px] leading-relaxed mb-5">
                      {skill.description}
                    </p>
                  )}
                  
                  {/* Skill Badges */}
                  {skill.items && skill.items.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {skill.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-1.5 bg-[#0B0E1B] border border-[#1E2545] rounded-md px-2.5 py-1.5 text-xs text-white font-medium hover:border-[#00F0FF]/50 transition-colors cursor-default"
                        >
                          <item.icon className="text-[#00F0FF] text-[14px]" />
                          {item.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}