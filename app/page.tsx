import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import './portfolio.css'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: projects, error } = await supabase
    .from('projects')
    .select()
    .order('created_at', { ascending: false })

  return (
    <main className="container">
      <header className="header">
        <h1>Selected Works</h1>
        <p>A collection of my recent projects and experiments.</p>
      </header>
      
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
        <div className="grid">
          {projects?.map((project: any) => (
            <article key={project.id} className="card">
              <div className="card-image-container">
                {project.thumbnail_url ? (
                  <img 
                    src={project.thumbnail_url} 
                    alt={project.title} 
                    className="card-image"
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#52525b' }}>
                    No Image
                  </div>
                )}
              </div>
              <div className="card-content">
                <h2 className="card-title">{project.title}</h2>
                <p className="card-description">{project.short_description}</p>
                
                {(project.github_url || project.demo_url) && (
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
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
  )
}
