import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import Profile from '@/components/Profile'
import ProjectGrid from "@/components/ProjectGrid";
import ProjectsHeader from "@/components/ProjectsHeader";
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
        <ProjectsHeader />
      
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
