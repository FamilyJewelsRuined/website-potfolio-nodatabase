import { createProject } from './actions'
import Link from 'next/link'

export default function NewProjectPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>Add New Project</h1>
        <Link href="/admin" style={{ textDecoration: 'none', color: '#0066cc' }}>← Back to Dashboard</Link>
      </div>

      <form action={createProject} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="title" style={{ fontWeight: 'bold' }}>Project Title</label>
          <input id="title" name="title" type="text" required style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="short_description" style={{ fontWeight: 'bold' }}>Short Description</label>
          <textarea id="short_description" name="short_description" required rows={4} style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="thumbnail" style={{ fontWeight: 'bold' }}>Thumbnail Image</label>
          <input id="thumbnail" name="thumbnail" type="file" accept="image/*" style={{ padding: '0.5rem' }} />
          <small style={{ color: '#666' }}>Make sure you created the 'portfolio-images' public bucket in Supabase first.</small>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="github_url" style={{ fontWeight: 'bold' }}>GitHub URL (Optional)</label>
          <input id="github_url" name="github_url" type="url" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label htmlFor="demo_url" style={{ fontWeight: 'bold' }}>Live Demo URL (Optional)</label>
          <input id="demo_url" name="demo_url" type="url" style={{ padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }} />
        </div>

        <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>
          Save Project
        </button>
      </form>
    </div>
  )
}
