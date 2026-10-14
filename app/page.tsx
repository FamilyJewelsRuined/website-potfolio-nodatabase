import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Profile from "@/components/Profile";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectsHeader from "@/components/ProjectsHeader";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { hardcodedProjects } from "@/data/projects";

export default function Page() {
  return (
    <>
      <Hero />

      <main
        id="projects"
        className="bg-[#0B0E1B] text-white min-h-screen px-8 md:px-16 lg:px-24 py-16 font-sans border-t border-[#1E2545]"
      >
        <ProjectsHeader />
        <ProjectGrid projects={hardcodedProjects} />
      </main>

      <Profile />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

