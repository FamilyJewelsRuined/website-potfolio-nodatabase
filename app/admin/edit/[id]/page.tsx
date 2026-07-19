import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { updateProject } from './actions'

export default async function EditProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const resolvedParams = await params
  const { id } = resolvedParams

  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', id)
    .single()

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Edit Project</h1>
        <Link href="/admin" style={{ textDecoration: 'none', color: '#0066cc' }}>← Back to Dashboard</Link>
      </div>

      <form action={updateProject} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <input type="hidden" name="id" value={project.id} />
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="title" style={{ fontWeight: 'bold' }}>Project Title</label>
          <input id="title" name="title" type="text" required defaultValue={project.title} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="short_description" style={{ fontWeight: 'bold' }}>Short Description</label>
          <textarea id="short_description" name="short_description" required rows={4} defaultValue={project.short_description} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="thumbnail" style={{ fontWeight: 'bold' }}>Thumbnail Image (Leave empty to keep current)</label>
          {project.thumbnail_url && (
            <img src={project.thumbnail_url} alt="Current thumbnail" style={{ width: '100px', borderRadius: '4px', marginBottom: '0.5rem' }} />
          )}
          <input id="thumbnail" name="thumbnail" type="file" accept="image/*" style={{ padding: '0.5rem' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="github_url" style={{ fontWeight: 'bold' }}>GitHub URL (Optional)</label>
          <input id="github_url" name="github_url" type="url" defaultValue={project.github_url || ''} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="demo_url" style={{ fontWeight: 'bold' }}>Live Demo URL (Optional)</label>
          <input id="demo_url" name="demo_url" type="url" defaultValue={project.demo_url || ''} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Update Project
        </button>
      </form>
    </div>
  )
}
