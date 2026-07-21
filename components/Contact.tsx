"use client";

import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-[#F3F3F3] py-28">

      {/* Background Decorations */}

      <div className="absolute left-16 top-20 h-48 w-48 rounded-full border border-blue-100 opacity-30"></div>

      <div className="absolute right-20 bottom-20 h-56 w-56 rounded-full border border-blue-100 opacity-20"></div>

      {/* Card */}

      <div className="relative mx-auto max-w-4xl rounded-3xl border border-blue-200 bg-white px-12 py-16 text-center shadow-sm">

        <h2 className="text-5xl font-bold text-[#5170FF]">
          Let's Build Something.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">
          Have a project in mind or simply want to connect?
          I'm always open to discussing new opportunities,
          freelance work, or collaborations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <a
            href="mailto:your@email.com"
            className="flex items-center gap-3 rounded-full bg-[#5170FF] px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-[#4363ff]"
          >
            <HiOutlineMail size={22} />
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-full border border-[#5170FF] bg-white px-7 py-4 font-semibold text-[#5170FF] transition hover:scale-105 hover:bg-[#5170FF] hover:text-white"
          >
            <FaLinkedinIn size={20} />
            LinkedIn
          </a>

        </div>

      </div>

    </section>
  );
}