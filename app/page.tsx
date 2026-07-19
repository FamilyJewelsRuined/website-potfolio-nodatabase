import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: projects, error } = await supabase.from('projects').select()

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>My Portfolio Projects</h1>
      
      {error && (
        <div style={{ color: 'red', padding: '1rem', border: '1px solid red' }}>
          <p>Error connecting to Supabase or fetching projects:</p>
          <pre>{JSON.stringify(error, null, 2)}</pre>
        </div>
      )}

      {projects && projects.length === 0 && (
        <p>No projects found. Have you added any to Supabase?</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {projects?.map((project: any) => (
          <li key={project.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
