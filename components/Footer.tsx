"use client";

import React from "react";
import SocialLinks from "./SocialLinks";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080B14] border-t border-[#1E2545] py-12 px-6 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-[#A3B3D1] text-sm font-medium leading-relaxed">
          © 2026 Akbar Mulianda Rusdy Abidin Putra.
          <br />
          Banjarmasin, Indonesia
        </p>

        <SocialLinks variant="light" className="pt-1" />
      </div>
    </footer>
  );
};

export default Footer;
