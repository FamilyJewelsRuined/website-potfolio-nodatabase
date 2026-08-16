"use client";

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import type { Skill } from '@/components/Stack';

export default function AdminSkillsPage() {
  const supabase = createClient();
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [editingId, setEditingId] = useState<string | number | null>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('skills').select().order('created_at', { ascending: false });
    if (error) {
      console.error('Error fetching skills:', error);
    } else if (data) {
      setSkills(data);
    }
    setLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      // Update
      const { error } = await supabase.from('skills').update({ title, description, image_url: imageUrl }).eq('id', editingId);
      if (!error) {
        setEditingId(null);
        resetForm();
        fetchSkills();
      } else {
        alert(`Error updating skill: ${error.message}`);
      }
    } else {
      // Insert
      const { error } = await supabase.from('skills').insert([{ title, description, image_url: imageUrl }]);
      if (!error) {
        resetForm();
        fetchSkills();
      } else {
        alert(`Error adding skill: ${error.message}`);
      }
    }
  };

  const handleDelete = async (id: string | number) => {
    if (confirm("Are you sure you want to delete this skill?")) {
      const { error } = await supabase.from('skills').delete().eq('id', id);
      if (!error) {
        fetchSkills();
      } else {
        alert(`Error deleting skill: ${error.message}`);
      }
    }
  };

  const handleEdit = (skill: Skill) => {
    setEditingId(skill.id);
    setTitle(skill.title);
    setDescription(skill.description || '');
    setImageUrl(skill.image_url || '');
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setImageUrl('');
    setEditingId(null);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-8">Manage Skills</h1>
      
      <form onSubmit={handleSubmit} className="mb-12 bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Skill' : 'Add New Skill'}</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Skill Category / Title</label>
          <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border p-2 rounded" placeholder="e.g. Frontend" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea required value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border p-2 rounded h-24" placeholder="Describe your experience in this category..." />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Image URL (Optional)</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full border p-2 rounded" placeholder="https://..." />
        </div>
        
        <div className="flex gap-4">
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700">
            {editingId ? 'Update Skill' : 'Add Skill'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="bg-gray-300 text-black px-6 py-2 rounded font-medium hover:bg-gray-400">
              Cancel
            </button>
          )}
        </div>
      </form>

      {loading ? (
        <p className="text-gray-500">Loading skills from database...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map(skill => (
            <div key={skill.id} className="border p-4 rounded-lg bg-white shadow-sm flex flex-col">
              {skill.image_url && (
                <div className="h-32 mb-4 bg-gray-100 rounded overflow-hidden">
                  <img src={skill.image_url} alt={skill.title} className="w-full h-full object-cover" />
                </div>
              )}
              <h3 className="font-bold text-lg mb-2">{skill.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{skill.description}</p>
              <div className="flex gap-4 mt-auto pt-4 border-t">
                <button onClick={() => handleEdit(skill)} className="text-blue-600 font-medium hover:underline">Edit</button>
                <button onClick={() => handleDelete(skill.id)} className="text-red-600 font-medium hover:underline">Delete</button>
              </div>
            </div>
          ))}
          
          {skills.length === 0 && <p className="text-gray-500 col-span-2">No skills found in the database. Add one using the form above. The main page will use dummy placeholder data until you add your first skill.</p>}
        </div>
      )}
    </div>
  );
}
