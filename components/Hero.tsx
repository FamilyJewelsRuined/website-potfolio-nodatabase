"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import akbarImage from '../app/assets/akbar.png';
import Link from "next/link";
import { FaArrowRight, FaShieldAlt } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";

const PlaceholderImage = () => (
  <div className="relative w-full h-full min-h-[450px] flex items-center justify-center bg-[#121629] border border-[#1E2545] rounded-2xl overflow-hidden">
    <img src="/me2.png" alt="Placeholder" className="absolute inset-0 w-full h-full object-cover opacity-80" />
  </div>
);

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const slideVariants: Variants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
  };

  return (
    <div className="relative min-h-screen bg-[#0B0E1B] overflow-hidden flex flex-col md:flex-row text-white font-sans">

      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />

      {/* LetsDefend Style Navbar */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50 bg-[#121629]/90 border border-[#1E2545] rounded-2xl px-6 py-3.5 shadow-[0_0_25px_rgba(0,0,0,0.5)] backdrop-blur-md hidden md:flex items-center space-x-12 min-w-max">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-9 h-9 border border-[#00F0FF]/40 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] shrink-0 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
            <FaShieldAlt className="text-lg" />
          </div>
          <div>
            <span className="font-extrabold text-white text-base tracking-wide block leading-tight">
              Akbar<span className="text-[#00F0FF]">.Dev</span>
            </span>
            <span className="text-[9px] text-[#00F0FF] tracking-widest uppercase font-bold block">
              SOC & FULL-STACK
            </span>
          </div>
        </div>

        <nav className="flex space-x-8 font-semibold text-[14px] tracking-wide text-[#A3B3D1]">
          <Link href="#projects" className="hover:text-[#00F0FF] transition-colors">Featured Projects</Link>
          <Link href="#skills" className="hover:text-[#00F0FF] transition-colors">Skills</Link>
          <Link href="#certifications" className="hover:text-[#00F0FF] transition-colors">Certifications</Link>
          <Link href="#contact" className="hover:text-[#00F0FF] transition-colors">Contact</Link>
        </nav>

        <a
          href="#contact"
          className="bg-[#00E5FF] hover:bg-[#00CBE6] text-black font-bold px-4 py-2 rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.35)] text-xs uppercase tracking-wider transition-all hover:scale-105"
        >
          Hire Me
        </a>
      </div>

      {/* Left Panel */}
      <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-[#1E2545] flex items-center justify-center relative min-h-[50vh] md:min-h-screen bg-[#0B0E1B]/60">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide0-left"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-lg px-8 py-12 md:px-16 lg:px-24 w-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold tracking-wider uppercase mb-6 shadow-[0_0_10px_rgba(0,240,255,0.15)]">
                <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                Cybersecurity & Full-Stack
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-6 leading-[1.15] tracking-tight text-white">
                Akbar Mulianda <span className="text-[#00F0FF]">Rusdy</span>
              </h1>
              <p className="text-[#A3B3D1] text-lg md:text-xl font-normal leading-relaxed">
                Full-stack dev with a foundation in systems technician and an active focus on cybersecurity.
              </p>
            </motion.div>
          )}
          {currentSlide === 1 && (
            <motion.div
              key="slide1-left"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex flex-col p-8 justify-center"
            >
              <PlaceholderImage />
            </motion.div>
          )}
          {currentSlide === 2 && (
            <motion.div
              key="slide2-left"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-lg px-8 py-12 md:px-16 lg:px-24 w-full"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold tracking-wider uppercase mb-4">
                Personal Drive
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-5 tracking-tight text-white">Hobbies</h2>
              <p className="text-[#A3B3D1] text-[15px] md:text-[16px] leading-relaxed font-normal">
                Dedicated to minimizing total cost of ownership and maximizing budget efficiency. Driven to eliminate operational friction through continuous process improvement. Early adopter of emerging tech stacks to maintain competitive advantage. Focused on automating routine tasks to accelerate delivery and reduce manual effort. Passionate about deep-diving into complex, niche domains to uncover unique solutions.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Panel */}
      <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[50vh] md:min-h-screen bg-[#0B0E1B]">
        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide0-right"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex items-center justify-center p-8"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00F0FF] to-blue-600 opacity-40 blur-xl animate-pulse" />
                <Image
                  src={akbarImage}
                  alt="Akbar"
                  width={500}
                  height={500}
                  className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px] lg:w-[460px] lg:h-[460px] rounded-full object-cover border-2 border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.25)]"
                  priority
                />
              </div>
            </motion.div>
          )}
          {currentSlide === 1 && (
            <motion.div
              key="slide1-right"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="max-w-lg px-8 py-12 md:px-16 lg:px-24 w-full text-right"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold tracking-wider uppercase mb-4">
                Overview
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold mb-8 tracking-tight text-white">About</h2>
              <p className="text-[#A3B3D1] text-[15px] md:text-[16px] leading-relaxed text-right font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </motion.div>
          )}
          {currentSlide === 2 && (
            <motion.div
              key="slide2-right"
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full flex flex-col p-8 justify-center"
            >
              <div className="relative w-full h-full min-h-[450px] flex items-center justify-center bg-[#121629] border border-[#1E2545] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/hobbies.png" alt="Hobbies" className="absolute inset-0 w-full h-full object-cover" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Arrow Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-40 bg-[#121629] border border-[#1E2545] text-[#00F0FF] shadow-[0_0_20px_rgba(0,0,0,0.5)] rounded-full w-12 h-12 md:w-[68px] md:h-[68px] flex items-center justify-center hover:bg-[#1E2545] hover:border-[#00F0FF] hover:shadow-[0_0_25px_rgba(0,240,255,0.35)] transition-all active:scale-95"
          aria-label="Next slide"
        >
          <FaArrowRight className="text-xl md:text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Hero;   