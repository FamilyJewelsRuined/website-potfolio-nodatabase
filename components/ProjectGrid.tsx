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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, i) => (
        <ScrollReveal
          key={project.id}
          preset="scaleUp"
          delay={i * 0.1}
          as="article"
          className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden shadow-sm flex flex-col"
        >
          <div className="w-full h-48 relative border-b-2 border-gray-100">
            {project.thumbnail_url ? (
              <img
                src={project.thumbnail_url}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
                No Image
              </div>
            )}
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h2 className="text-[#5170FF] text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed flex-grow">{project.short_description}</p>

            {(project.github_url || project.demo_url) && (
              <div style={{ color: '#5170FF', display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                    GitHub ↗
                  </a>
                )}
                {project.demo_url && (
                  <a href={project.demo_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                    Live Demo ↗
                  </a>
                )}
              </div>
            )}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
