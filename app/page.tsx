import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Hero from '@/components/Hero'
import Stack from '@/components/Stack'
import Profile from '@/components/Profile'
import Experience from "@/components/Experience";
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
        <h1 className="text-[#5170FF] text-[60px] font-bold text-center mb-4"> Projects </h1> 
        <p className="text-gray-600 text-[20px] text-center mb-16">A collection of my recent projects and experiments.</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project: any) => (
            <article key={project.id} className="bg-white border-2 border-blue-100 rounded-2xl overflow-hidden shadow-sm flex flex-col">
              <div className="w-full h-48 relative border-b-2 border-gray-100">
                {project.thumbnail_url ? (
                  <img 
                    src={project.thumbnail_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
                    No Image
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-[#5170FF] text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">{project.short_description}</p>
                
                {(project.github_url || project.demo_url) && (
                  <div style={{ color: '#5170FF', display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                    {project.github_url && (
                      <a href={project.github_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                        GitHub ↗
                      </a>
                    )}
                    {project.demo_url && (
                      <a href={project.demo_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' }}>
                        Live Demo ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
    </>
  )
}
