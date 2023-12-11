<script setup>
import { ref, onMounted } from "vue";
import useSupabase from "@/composables/useSupabase";
import { useRoute } from "vue-router";

const { fetchProjectById } = useSupabase();
const route = useRoute();
const project = ref(null);

onMounted(async () => {
  const projectId = route.params.id;
  try {
    const fetchedProject = await fetchProjectById(projectId);
    if (fetchedProject) {
      project.value = fetchedProject;
    } else {
      console.error("Project not found");
      // Handle the case where the project is not found, e.g., redirect to a 'not found' page or display a message
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    // Handle any errors that occur during fetching
  }
});
</script>

<template>
  <div class="antialiased mx-auto" v-if="project" :key="project.id">
    <section class="hero pt-32 pb-20 mx-auto border-red-500 border-2">
      <div class="container mx-auto">
        <h1>{{ project.title }}</h1>
      </div>
    </section>
    <main class="py-20 container mx-auto border-blue-500 border-2">
      <!-- Company description -->
      <section class="border-red-500 border-2 py-20">
        <div>
          <h1>Company description</h1>
        </div>
        <div>
          {{ project.company_description }}
        </div>
      </section>
      <!-- Carousel -->
      <section class="py-20">
        <div class="h-80 w-80 border-red-500 border-2">Carousel</div>
      </section>
      <!-- project description -->
      <section class="border-red-500 border-2 py-20">
        <div>
          <h1>Project Description</h1>
          <div>
            {{ project.description }}
          </div>
        </div>
      </section>
      <!-- mockup -->
      <section class="py-20">
        <div class="h-80 w-80 border-red-500 border-2">Mockup</div>
      </section>
      <!-- next/previous project -->
      <div></div>
    </main>
  </div>
</template>
