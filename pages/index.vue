<script setup>
// import useSupabase from "@/composables/useSupabase";

// const { projectList } = useSupabase();

useHead({
  title: "Home",
});
</script>

<template>
  <!-- background -->
  <div class="relative bg-[url('public/gradient-1.png')] bg-cover bg-no-repeat">
    <div class="antialiased">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="container relative grid grid-cols-2 h-screen mx-auto pt-40 pb-8"
      >
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
                <font-awesome-icon
                  :icon="['fab', 'github']"
                  size="2xl"
                ></font-awesome-icon>
              </NuxtLink>
              <NuxtLink
                to="https://www.linkedin.com/in/guglielmo-piasenti-749122186/"
              >
                <font-awesome-icon
                  :icon="['fab', 'linkedin']"
                  size="2xl"
                ></font-awesome-icon>
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/guglielmo_piasenti/">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  size="2xl"
                ></font-awesome-icon>
              </NuxtLink>
            </div>
          </div>
        </div>
        <!-- Displaying projects -->
        <div class="flex flex-col text-end">
          <h1 class="text-6xl font-extrabold pb-24">Projects</h1>
          <!-- <div v-for="project in projectList" :key="project.id">
            <NuxtLink :to="{ name: 'projects-id', params: { id: project.id } }">
              <h1 class="text-5xl pb-12">{{ project.title }}</h1></NuxtLink
            >
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
