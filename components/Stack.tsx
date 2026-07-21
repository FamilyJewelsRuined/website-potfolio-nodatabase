"use client";


import React, { useState } from 'react';

import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGo,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
} from "react-icons/si";

interface TechCategory {
  title: string;
  items: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const stack: TechCategory[] = [
  {
    title: "Backend",
    items: [
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Go", icon: <SiGo /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "Supabase", icon: <SiSupabase /> },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
  },
];

export default function Stack() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-24">

      {/* Background Decorations */}

      <div className="absolute left-12 top-12 h-32 w-32 rounded-full border border-blue-200 opacity-40"></div>

      <div className="absolute right-20 top-32 h-52 w-52 rounded-full border border-blue-100 opacity-40"></div>

      <div className="absolute bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full border border-blue-200 opacity-30"></div>

      {/* Heading */}

      <div className="relative z-10 mx-auto mb-16 max-w-6xl text-center">

        <h2 className="text-5xl font-bold text-[#5170FF]">
          Tech Stack
        </h2>

        <p className="mt-3 text-gray-500">
          Technologies I use to build scalable web applications.
        </p>

      </div>

      {/* Cards */}

      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 md:grid-cols-2">

        {stack.map((category) => (

          <div
            key={category.title}
            className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >

            <h3 className="mb-6 text-2xl font-bold text-[#5170FF]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {category.items.map((tech) => (

                <div
                  key={tech.name}
                  className="flex items-center gap-2 rounded-full border border-blue-200 bg-[#F8FAFF] px-4 py-2 transition hover:border-[#5170FF] hover:bg-blue-50"
                >
                  <span className="text-lg text-[#5170FF]">
                    {tech.icon}
                  </span>

                  <span className="font-medium text-gray-700">
                    {tech.name}
                  </span>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}