import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import Profile from '@/components/Profile'
import ProjectGrid from "@/components/ProjectGrid";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: projects, error } = await supabase
    .from('projects')
    .select()
    .order('created_at', { ascending: false })

  const { data: skills, error: skillsError } = await supabase
    .from('skills')
    .select()
    .order('created_at', { ascending: false })

  return (
    <>
      <Hero />

      
      <main id="projects" className="bg-[#0B0E1B] text-white min-h-screen px-8 md:px-16 lg:px-24 py-16 font-sans border-t border-[#1E2545]">
        <div className="max-w-7xl mx-auto flex justify-between items-end mb-10 border-b border-[#1E2545] pb-4">
          <ScrollReveal preset="fadeUp">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Featured <span className="text-[#00F0FF]">Projects</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.1}>
            <a href="#" className="text-[#00F0FF] hover:text-cyan-300 text-sm md:text-[15px] font-bold transition-colors pb-1 flex items-center gap-1">
              See More Projects →
            </a>
          </ScrollReveal>
        </div>
      
      {error && (
        <div style={{ color: '#ef4444', padding: '1rem', border: '1px solid #ef4444', borderRadius: '8px', marginBottom: '2rem' }}>
          <p>Database Error:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      {projects && projects.length === 0 ? (
        <div className="empty-state">
          <h2>No projects yet</h2>
          <p>Check back later when I've added some work.</p>
        </div>
      ) : (
        <ProjectGrid projects={projects ?? []} />
      )}
    </main>
    <Profile />
    <Stack skills={skills?.length ? skills : undefined} />
    <Contact />
    <Footer />
    </>
  )
}
