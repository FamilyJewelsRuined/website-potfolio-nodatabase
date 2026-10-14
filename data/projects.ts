export interface Project {
  id: string;
  title: string;
  slug?: string;
  short_description: string;
  long_description?: string | null;
  thumbnail_url?: string;
  github_url?: string;
  demo_url?: string;
  featured?: boolean;
  published?: boolean;
  created_at?: string;
  updated_at?: string;
}

export const hardcodedProjects: Project[] = [
  {
    id: "60ae36e1-dec7-4f0e-8a25-c75ccb7a442c",
    title: "Mini-SIEM",
    slug: "mini-siem",
    short_description:
      "Mini SIEM is a lightweight SIEM designed for personal projects and small businesses. It detect and respond to five common web attacks: SQL Injection, Brute Force, Cross-Site Scripting (XSS), File Inclusion, and Command Injection. It uses CrowdSec for intrusion detection and prevention, a Golang backend API to process and synchronize logs, and MySQL to store data.",
    long_description: null,
    thumbnail_url: "/projects/mini-siem.png",
    github_url: "https://github.com/FamilyJewelsRuined/real-mini-siem",
    demo_url: "https://mini-siem.prodevweb.my.id/",
    featured: false,
    published: true,
    created_at: "2026-07-19 05:27:05.808653+00",
    updated_at: "2026-07-19 05:27:05.808653+00",
  },
  {
    id: "78391c6c-a9ad-417c-a4da-5f5a5dc8e291",
    title: "AI Prompt Generator",
    slug: "ai-prompt-generator",
    short_description:
      "The AI Prompt Generator transforms vague or incomplete user ideas into structured prompts optimized for AI models such as ChatGPT, Gemini, Claude, Grok, and others. The system first analyzes the user's intent, then asks dynamic follow-up questions tailored to the specific task (such as coding, writing, design, business, or education) to gather missing context.",
    long_description: null,
    thumbnail_url: "/projects/ai-prompt-generator.png",
    github_url: "https://github.com/Fery-Iris/ai-prompt-generator",
    demo_url: "",
    featured: false,
    published: true,
    created_at: "2026-07-21 12:22:11.790883+00",
    updated_at: "2026-07-21 12:22:11.790883+00",
  },
  {
    id: "f7c2f10f-a0b9-45b1-b7a5-b64d800f9b4d",
    title: "Rider Mode",
    slug: "rider-mode",
    short_description:
      "Rider Mode is an Android application that reads incoming WhatsApp messages aloud using text-to-speech (TTS), allowing users to stay informed without looking at their phone. Designed for hands-free use while riding or driving, it improves convenience and safety by announcing new messages in real time.",
    long_description: null,
    thumbnail_url: "/projects/rider-mode.png",
    github_url: "",
    demo_url: "",
    featured: false,
    published: true,
    created_at: "2026-07-19 06:19:49.611815+00",
    updated_at: "2026-07-19 06:19:49.611815+00",
  },
];
