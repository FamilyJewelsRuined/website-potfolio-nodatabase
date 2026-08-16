"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "en" | "id";

interface Translations {
  [key: string]: {
    en: string;
    id: string;
  };
}

export const translations: Translations = {
  // Navigation
  navProjects: { en: "Featured Projects", id: "Proyek Unggulan" },
  navSkills: { en: "Skills", id: "Keahlian" },
  navCertifications: { en: "Certifications", id: "Sertifikasi" },
  navContact: { en: "Contact", id: "Kontak" },
  hireMe: { en: "Hire Me", id: "Rekrut Saya" },

  // Hero Section
  heroBadge: { en: "Cybersecurity & Full-Stack", id: "Keamanan Siber & Full-Stack" },
  heroSubtitle: {
    en: "Full-stack dev with a foundation in systems technician and an active focus on cybersecurity.",
    id: "Pengembang full-stack berlatar belakang teknisi sistem dan berfokus pada keamanan siber.",
  },
  hobbiesBadge: { en: "Personal Drive", id: "Dorongan Pribadi" },
  hobbiesTitle: { en: "Hobbies", id: "Hobi" },
  hobbiesDesc: {
    en: "Dedicated to minimizing total cost of ownership and maximizing budget efficiency. Driven to eliminate operational friction through continuous process improvement. Early adopter of emerging tech stacks to maintain competitive advantage. Focused on automating routine tasks to accelerate delivery and reduce manual effort. Passionate about deep-diving into complex, niche domains to uncover unique solutions.",
    id: "Berdedikasi untuk meminimalkan total biaya kepemilikan dan memaksimalkan efisiensi anggaran. Terdorong untuk mengeliminasi hambatan operasional melalui peningkatan proses secara berkelanjutan. Menjadi pengadopsi awal teknologi baru untuk mempertahankan keunggulan kompetitif. Berfokus pada otomatisasi tugas rutin untuk mempercepat penyampaian dan mengurangi usaha manual. Memiliki passion mendalam untuk mengeksplorasi domain kompleks demi menemukan solusi unik.",
  },
  aboutBadge: { en: "Overview", id: "Ringkasan" },
  aboutTitle: { en: "About", id: "Tentang Saya" },
  aboutP1: {
    en: "Hi, I’m Akbar Mulianda Rusdy, an Informatics graduate from Politeknik Negeri Banjarmasin focusing on cybersecurity, networking, and IT technical support.",
    id: "Halo, saya Akbar Mulianda Rusdy, lulusan Informatika dari Politeknik Negeri Banjarmasin yang berfokus pada keamanan siber, jaringan, dan dukungan teknis IT.",
  },
  aboutP2: {
    en: "Besides network infrastructure, I build full-stack web applications using modern AI tooling like Claude Code and Gemini CLI to streamline the development cycle. I enjoy being an early adopter of new tech and integrating it directly into my workflow. My priority is writing clean, functional systems that are easy to maintain and update later on.",
    id: "Selain infrastruktur jaringan, saya membangun aplikasi web full-stack menggunakan perangkat AI modern seperti Claude Code dan Gemini CLI untuk mengefisienkan siklus pengembangan. Saya senang menjadi pengadopsi awal teknologi baru dan mengintegrasikannya langsung ke dalam alur kerja saya. Prioritas saya adalah menulis sistem yang bersih, fungsional, serta mudah dipelihara dan diperbarui di kemudian hari.",
  },

  // Projects Section
  projectsTitle: { en: "Featured", id: "Proyek" },
  projectsSubtitle: { en: "Projects", id: "Unggulan" },
  seeMoreProjects: { en: "See More Projects →", id: "Lihat Lebih Banyak Proyek →" },
  noProjectsTitle: { en: "No projects yet", id: "Belum ada proyek" },
  noProjectsDesc: { en: "Check back later when I've added some work.", id: "Periksa kembali nanti setelah saya menambahkan beberapa karya." },

  // Certifications Section
  certificationsTitle: { en: "Certifications &", id: "Sertifikasi &" },
  certificationsBadgeTitle: { en: "Badges", id: "Lencana" },
  certificationsDesc: {
    en: "Verified security credentials, SOC analyst certifications, and technical badges demonstrating hands-on expertise in threat detection, incident response, and secure software development.",
    id: "Kredensial keamanan terverifikasi, sertifikasi analis SOC, dan lencana teknis yang menunjukkan keahlian praktis dalam deteksi ancaman, respons insiden, serta pengembangan perangkat lunak aman.",
  },
  viewCertPdf: { en: "View Certificate (PDF)", id: "Lihat Sertifikat (PDF)" },

  // Default Certifications Data
  cert1Title: { en: "Cisco Cybersecurity", id: "Keamanan Siber Cisco" },
  cert1Desc: {
    en: "Certification verifying foundational knowledge in network security, cybersecurity principles, threat defense, and ethical hacking fundamentals provided by Cisco Networking Academy.",
    id: "Sertifikasi yang memverifikasi pengetahuan dasar dalam keamanan jaringan, prinsip keamanan siber, pertahanan ancaman, dan dasar-dasar ethical hacking dari Cisco Networking Academy.",
  },
  cert2Title: { en: "Front-End Programmer (PBL)", id: "Programmer Front-End (PBL)" },
  cert2Desc: {
    en: "Competency certification in modern front-end web development, covering responsive UI architecture, JavaScript frameworks, and hands-on Project-Based Learning.",
    id: "Sertifikasi kompetensi dalam pengembangan web front-end modern, mencakup arsitektur UI responsif, framework JavaScript, dan Project-Based Learning praktis.",
  },
  cert3Title: { en: "Junior Cybersecurity Specialist", id: "Spesialis Keamanan Siber Junior" },
  cert3Desc: {
    en: "Professional certification validating core skills in system vulnerability assessment, network defense operations, basic incident response, and security compliance.",
    id: "Sertifikasi profesional yang memvalidasi keahlian inti dalam penilaian kerentanan sistem, operasi pertahanan jaringan, respons insiden dasar, dan kepatuhan keamanan.",
  },

  // Skills / Stack Section
  skillsHeadingTitle: { en: "Technical", id: "Keahlian" },
  skillsHeadingSubtitle: { en: "Skills", id: "Teknis" },
  skillsHeadingSuffix: { en: "& Capabilities", id: "& Kapabilitas" },

  skillWebTitle: { en: "Web Developer", id: "Pengembang Web" },
  skillWebDesc: {
    en: "Building responsive, modern, and scalable full-stack applications.",
    id: "Membangun aplikasi full-stack yang responsif, modern, dan skalabel.",
  },
  skillCyberTitle: { en: "Cybersecurity", id: "Keamanan Siber" },
  skillCyberDesc: {
    en: "Securing infrastructure, monitoring intrusions, and server hardening.",
    id: "Mengamankan infrastruktur, memantau intrusi, dan pengerasan server.",
  },
  skillTechTitle: { en: "Technical Support", id: "Dukungan Teknis" },
  skillTechDesc: {
    en: "Hands-on hardware repair, OS maintenance, and IT support.",
    id: "Perbaikan perangkat keras, pemeliharaan OS, dan dukungan IT langsung.",
  },
  skillNetTitle: { en: "Networking", id: "Jaringan" },
  skillNetDesc: {
    en: "Designing, configuring, and troubleshooting network infrastructure.",
    id: "Merancang, mengonfigurasi, dan menangani masalah infrastruktur jaringan.",
  },

  // Contact Section
  contactHeader: { en: "Contact", id: "Hubungi" },
  contactHeaderSuffix: { en: "Me", id: "Saya" },
  contactDesc1: {
    en: "I read all incoming messages. Feel free to reach out for collaborations, SOC roles, or security consulting.",
    id: "Saya membaca semua pesan masuk. Jangan ragu untuk menghubungi untuk kolaborasi, peran SOC, atau konsultasi keamanan.",
  },
  contactDesc2P1: { en: "Provide your ", id: "Berikan " },
  contactDesc2Name: { en: "Name", id: "Nama" },
  contactDesc2And: { en: " and ", id: " dan " },
  contactDesc2Email: { en: "Email Address", id: "Alamat Email" },
  contactDesc2P2: { en: " for a prompt response.", id: " Anda untuk tanggapan cepat." },
  connectSocials: { en: "Connect on Social Networks", id: "Terhubung di Jaringan Sosial" },
  sendMessageHeader: { en: "Send Me A", id: "Kirim Saya" },
  sendMessageHeaderSuffix: { en: "Message", id: "Pesan" },
  emailMeBtn: { en: "Email Me (akbar.mulianda.rusdi@gmail.com)", id: "Kirim Email (akbar.mulianda.rusdi@gmail.com)" },
  connectLinkedinBtn: { en: "Connect on LinkedIn", id: "Terhubung di LinkedIn" },

  // Footer Section
  footerLocation: { en: "Banjarmasin, Indonesia", id: "Banjarmasin, Indonesia" },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_lang") as Language;
    if (savedLang === "en" || savedLang === "id") {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "id" : "en";
    handleSetLanguage(nextLang);
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language] || translations[key].en;
    }
    return key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
