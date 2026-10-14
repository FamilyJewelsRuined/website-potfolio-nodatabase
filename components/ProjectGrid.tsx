"use client";

import ScrollReveal from "./ScrollReveal";

interface Project {
  id: string;
  title: string;
  short_description: string;
  thumbnail_url?: string;
  github_url?: string;
  demo_url?: string;
}

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {projects.map((project, i) => (
        <ScrollReveal
          key={project.id}
          preset="fadeUp"
          delay={i * 0.1}
          as="article"
          className="flex flex-col group bg-[#121629] border border-[#1E2545] rounded-2xl p-5 hover:border-[#00F0FF]/60 hover:shadow-[0_0_25px_rgba(0,240,255,0.15)] transition-all duration-300"
        >
          {/* Image Container */}
          <div className="w-full aspect-video relative border border-[#1E2545] rounded-xl mb-4 bg-[#0B0E1B] overflow-hidden group-hover:border-[#00F0FF]/40 transition-colors">
            {project.thumbnail_url ? (
               <img 
                 src={project.thumbnail_url} 
                 alt={project.title} 
                 onError={(e) => {
                   e.currentTarget.onerror = null;
                   e.currentTarget.src = "/tempimage.png";
                 }}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
               />
            ) : (
               <img src="/tempimage.png" alt="Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
            )}
          </div>
          
          {/* Tag & Title */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#00F0FF] font-bold text-[11px] uppercase tracking-wider bg-[#00F0FF]/10 border border-[#00F0FF]/25 px-2.5 py-0.5 rounded-md">
              Project
            </span>
            <span className="text-[#A3B3D1] text-[12px] font-medium">
              Recent
            </span>
          </div>

          <h3 className="text-white text-lg font-bold mb-2 group-hover:text-[#00F0FF] transition-colors">
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-[#A3B3D1] text-[14px] leading-relaxed flex-grow">
            {project.short_description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}
          </p>

          {/* Links */}
          {(project.github_url || project.demo_url) && (
            <div className="flex gap-4 text-[#00F0FF] text-[13px] mt-4 font-bold border-t border-[#1E2545] pt-3">
              {project.github_url && (
                <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  GitHub ↗
                </a>
              )}
              {project.demo_url && (
                <a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                  Live Demo ↗
                </a>
              )}
            </div>
          )}
        </ScrollReveal>
      ))}
    </div>
  );
}
