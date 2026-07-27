import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import Profile from '@/components/Profile'
import Experience from "@/components/Experience";
import ProjectGrid from "@/components/ProjectGrid";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
//import Contact from "@/components/Contact";

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: projects, error } = await supabase
    .from('projects')
    .select()
    .order('created_at', { ascending: false })

  return (
    <>
      <Hero />
      <Profile />
      <Stack />
      <Experience />
      {/* <Contact /> */}
      
      <main className="bg-[#F3F3F3] min-h-screen px-[50px] py-16 font-['segoe_ui']">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal preset="fadeUp">
            <h1 className="text-[#5170FF] text-[60px] font-bold text-center mb-4"> Projects </h1>
          </ScrollReveal>
          <ScrollReveal preset="fadeUp" delay={0.1}>
            <p className="text-gray-600 text-[20px] text-center mb-16">A collection of my recent projects and experiments.</p>
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
    <Footer />
    </>
  )
}
