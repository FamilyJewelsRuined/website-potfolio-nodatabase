import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { signOut } from '../login/actions'

export default async function AdminDashboard() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: projects } = await supabase
    .from('projects')
    .select()
    .order('created_at', { ascending: false })

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Admin Dashboard</h1>
        <Link href="/admin/new" style={{ padding: '0.5rem 1rem', backgroundColor: '#0066cc', color: 'white', textDecoration: 'none', borderRadius: '4px' }}>
          + Add Project
        </Link>
      </div>
      
      <p style={{ marginBottom: '2rem', color: '#666' }}>Welcome, {user.email}. You are securely authenticated.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {projects?.map(project => (
          <div key={project.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <div>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              <span style={{ fontSize: '0.85rem', color: project.published ? 'green' : 'gray' }}>
                {project.published ? 'Published' : 'Draft'}
              </span>
            </div>
            <Link href={`/admin/edit/${project.id}`} style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none', color: '#333' }}>
              Edit
            </Link>
          </div>
        ))}
        {projects?.length === 0 && (
          <p>No projects found. Add one above.</p>
        )}
      </div>

      <form action={signOut} style={{ marginTop: '3rem' }}>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Sign Out
        </button>
      </form>
    </div>
  )
}
