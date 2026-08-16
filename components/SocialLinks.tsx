"use client";

import React from "react";
import { FiLinkedin, FiGithub, FiMail, FiInstagram } from "react-icons/fi";

interface SocialLink {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://www.linkedin.com/in/akbarmrap/",
    label: "LinkedIn",
    icon: <FiLinkedin className="w-5 h-5" />,
  },
  {
    href: "https://github.com/FamilyJewelsRuined",
    label: "GitHub",
    icon: <FiGithub className="w-5 h-5" />,
  },
  {
    href: "mailto:akbar.mulianda.rusdi@gmail.com",
    label: "Email",
    icon: <FiMail className="w-5 h-5" />,
  },
  {
    href: "https://instagram.com/thestrange_mrrusdi",
    label: "Instagram",
    icon: <FiInstagram className="w-5 h-5" />,
  },
];

interface SocialLinksProps {
  /** Icon size override via Tailwind class (default: "w-5 h-5") */
  iconClassName?: string;
  /** Additional classes on the container */
  className?: string;
  /** Color variant for hover styling */
  variant?: "light" | "dark";
}

export default function SocialLinks({
  className = "",
  variant = "dark",
}: SocialLinksProps) {
  const baseColor =
    variant === "dark" ? "text-gray-500" : "text-gray-400";
  const hoverColor =
    variant === "dark" ? "hover:text-[#5170FF]" : "hover:text-white";

  return (
    <div className={`flex items-center justify-center gap-5 ${className}`}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
          aria-label={link.label}
          className={`${baseColor} ${hoverColor} transition-all duration-300 hover:scale-110`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}
