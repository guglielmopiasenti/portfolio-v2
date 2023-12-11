// Imports
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
// setting supabase
const supabaseUrl = 'https://sbktanpofjpexaclmbbm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNia3RhbnBvZmpwZXhhY2xtYmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MDA5MzAsImV4cCI6MjAxNjA3NjkzMH0.iQeW6Fqe3uTq0DDuD9wIxJH7KwykguS6xyx5lDuHNws"
const supabase = createClient(supabaseUrl, supabaseKey)

// Fetching projects
export default function useSupabase() {
  const projectList = ref([])

  onMounted(async () => {
    const { data: projects, error } = await supabase
      .from('projects')
      .select('*')

    if (error) {
      console.error(error)
    } else {
      projectList.value = projects;
    }
  })

  // Function to fetch a single project by ID
  async function fetchProjectById(id) {
    const { data: project, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching project:', error)
      return null
    }
    return project
  }

  return {
    projectList,
    fetchProjectById
  }
}