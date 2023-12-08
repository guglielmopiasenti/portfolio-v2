<script setup>
import useSupabase from "@/composables/useSupabase";

const { projectList } = useSupabase();
</script>

<template>
  <div
    class="antialiased mx-auto"
    v-for="project in projectList"
    :key="project.id"
  >
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
