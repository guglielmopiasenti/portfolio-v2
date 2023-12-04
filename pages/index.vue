<script setup>

// Imports
import { ref, onMounted } from 'vue'
import { createClient } from '@supabase/supabase-js'

useHead({
  title: "Home",
});

// Fetching projects
const supabaseUrl = 'https://sbktanpofjpexaclmbbm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNia3RhbnBvZmpwZXhhY2xtYmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1MDA5MzAsImV4cCI6MjAxNjA3NjkzMH0.iQeW6Fqe3uTq0DDuD9wIxJH7KwykguS6xyx5lDuHNws"
const supabase = createClient(supabaseUrl, supabaseKey)

const projectList = ref([])

onMounted(async () => {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')

  if (error) {
    console.error(error)
  } else {
    projectList.value = projects;
    console.log(projectList.value)

  }
})

</script>

<template>
  <!-- background -->
  <div class="relative bg-[url('public/gradient-1.png')] bg-cover bg-no-repeat">
    <div class="antialiased">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container relative grid grid-cols-2 h-screen mx-auto pt-40 pb-8">
        <div class="grid grid-cols-1">
          <h1 class="text-5xl">Hello, I'm Guglielmo.</h1>
          <h1 class="text-7xl font-extrabold">A Full Stack Developer.</h1>
          <p class="text-2xl font-light">
            Hooked on technology since I was three, I couldn't resist tinkering
            with PCs. I had many roles, but my heart always belonged to tech.
            That's why I made the switch to coding, turning my passion into a
            career. Now I create innovative websites and software solutions for
            you.
          </p>
          <div class="flex flex-col gap-5">
            <div class="text-lg font-light">you can find me on:</div>
            <div class="flex gap-7">
              <NuxtLink to="https://github.com/guglielmopiasenti">
                <font-awesome-icon :icon="['fab', 'github']" size="2xl"></font-awesome-icon>
              </NuxtLink>
              <NuxtLink to="https://www.linkedin.com/in/guglielmo-piasenti-749122186/">
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl"></font-awesome-icon>
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/guglielmo_piasenti/">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2xl"></font-awesome-icon>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Displaying projects -->
        <div class="flex flex-col text-end">
          <h1 class="text-6xl font-extrabold pb-24">Projects</h1>
          <div v-for="project in projectList" :key="project.id">
            <h2>{{ project.title }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
