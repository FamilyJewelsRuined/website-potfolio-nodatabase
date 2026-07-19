'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function createProject(formData: FormData) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // 1. Verify user is logged in
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const title = formData.get('title') as string
  const short_description = formData.get('short_description') as string
  const file = formData.get('thumbnail') as File | null
  const github_url = formData.get('github_url') as string
  const demo_url = formData.get('demo_url') as string

  let thumbnail_url = ''

  // 2. Handle Image Upload if a file was provided
  if (file && file.size > 0) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    
    // Upload to 'portfolio-images' bucket
    const { error: uploadError } = await supabase.storage
      .from('portfolio-images')
      .upload(fileName, file)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw new Error('Failed to upload image')
    }

    // Get the public URL of the uploaded image
    const { data: { publicUrl } } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(fileName)
      
    thumbnail_url = publicUrl
  }

  // 3. Generate a simple slug from the title
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

  // 4. Insert into the database
  const { error } = await supabase.from('projects').insert({
    title,
    slug,
    short_description,
    thumbnail_url,
    github_url,
    demo_url,
    published: true,
  })

  if (error) {
    console.error('Database error:', error)
    throw new Error('Database Error: ' + error.message)
  }

  // 5. Redirect back to admin dashboard
  redirect('/admin')
}
