"use client";

import {
  SiLaravel,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiTailwindcss,
} from "react-icons/si";

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  stack: {
    name: string;
    icon: React.ReactNode;
  }[];
}

const experiences: Experience[] = [
  {
    title: "Full Stack Developer",
    company: "Pintartek",
    location: "Jakarta, Indonesia • Remote",
    period: "Oct 2025 — Apr 2026",
    description: [
      "Built scalable web applications using Next.js and Flutter.",
      "Developed REST APIs for internal services.",
      "Designed reusable UI components and improved maintainability.",
      "Collaborated with designers and backend engineers."
    ],
    stack: [
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Flutter", icon: <SiFlutter /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },

  {
    title: "Web Developer",
    company: "HAFECS",
    location: "Banjarmasin, Indonesia",
    period: "Jul 2025 — Dec 2025",
    description: [
      "Built dynamic form builders using Laravel Livewire.",
      "Translated Figma designs into responsive interfaces.",
      "Improved accessibility and reusable UI components."
    ],
    stack: [
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
    ],
  },
];

export default function Experience() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-24">

      {/* Decorative Background */}

      <div className="absolute left-16 top-24 h-52 w-52 rounded-full border border-blue-100 opacity-40"></div>

      <div className="absolute right-10 bottom-24 h-40 w-40 rounded-full border border-blue-100 opacity-30"></div>

      {/* Heading */}

      <div className="relative z-10 mx-auto mb-16 max-w-6xl text-center">

        <h2 className="text-5xl font-bold text-[#5170FF]">
          Experience
        </h2>

        <p className="mt-3 text-gray-500">
          Building software for clients and teams.
        </p>

      </div>

      {/* Timeline */}

      <div className="relative mx-auto max-w-5xl">

        {/* Vertical Line */}

        <div className="absolute left-6 top-0 h-full w-px bg-blue-200"></div>

        <div className="space-y-12">

          {experiences.map((job) => (

            <div
              key={job.company}
              className="relative pl-20"
            >

              {/* Timeline Dot */}

              <div className="absolute left-3 top-10 h-6 w-6 rounded-full border-4 border-[#5170FF] bg-white"></div>

              {/* Card */}

              <div className="rounded-3xl border border-blue-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#5170FF] hover:shadow-xl">

                {/* Header */}

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-[#5170FF]">
                      {job.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-2">

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-[#5170FF]">
                        {job.company}
                      </span>

                      <span className="text-sm text-gray-500">
                        {job.location}
                      </span>

                    </div>

                  </div>

                  <span className="text-sm font-medium text-gray-500">
                    {job.period}
                  </span>

                </div>

                {/* Description */}

                <ul className="mt-6 space-y-3 text-gray-700">

                  {job.description.map((item) => (

                    <li
                      key={item}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-2 h-2 w-2 rounded-full bg-[#5170FF]" />

                      <span>{item}</span>

                    </li>

                  ))}

                </ul>

                {/* Stack */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {job.stack.map((tech) => (

                    <div
                      key={tech.name}
                      className="flex items-center gap-2 rounded-full border border-blue-200 bg-[#F8FAFF] px-4 py-2 text-sm transition hover:border-[#5170FF]"
                    >
                      <span className="text-[#5170FF]">
                        {tech.icon}
                      </span>

                      <span className="font-medium">
                        {tech.name}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}