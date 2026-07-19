'use server'

import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function updateProject(formData: FormData) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  // 1. Verify user is logged in
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const id = formData.get('id') as string
  const title = formData.get('title') as string
  const short_description = formData.get('short_description') as string
  const file = formData.get('thumbnail') as File | null
  const github_url = formData.get('github_url') as string
  const demo_url = formData.get('demo_url') as string

  const updateData: any = {
    title,
    short_description,
    github_url,
    demo_url,
  }

  // 2. Handle Image Upload if a new file was provided
  if (file && file.size > 0) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    
    const { error: uploadError } = await supabase.storage
      .from('portfolio-images')
      .upload(fileName, file)

    if (uploadError) {
      console.error('Upload error:', uploadError)
      throw new Error('Failed to upload new image')
    }

    const { data: { publicUrl } } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(fileName)
      
    updateData.thumbnail_url = publicUrl
  }

  // 3. Generate a new slug just in case title changed
  updateData.slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

  // 4. Update the database
  const { error } = await supabase
    .from('projects')
    .update(updateData)
    .eq('id', id)

  if (error) {
    console.error('Database error:', error)
    throw new Error('Database Error: ' + error.message)
  }

  // 5. Redirect back to admin dashboard
  redirect('/admin')
}
