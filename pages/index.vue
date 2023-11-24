<script setup>
useHead({
  title: "Home"
})
</script>

<template>
  <div class="relative bg-[url('public/gradient-1.png')] bg-cover bg-no-repeat">
    <div class="antialiased">
      <!-- background -->
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container relative grid grid-cols-2 h-screen mx-auto py-5">
        <div class="border-2 border-green-600 grid grid-cols-1">
          <h1 class="text-5xl">Hello, I'm Guglielmo.</h1>
          <h1 class="text-7xl font-extrabold">A Full Stack Developer.</h1>
          <p class="text-2xl font-light">Hooked on technology since I was three, I couldn't resist tinkering with PCs.
            <br>I had many
            roles, but my heart always belonged to tech. That's why I made the switch to coding, turning my passion into a
            career. <br>Now I create innovative websites and software solutions for you.
          </p>
          <div>
            <div class="text-lg font-light">you can find me on:</div>
            <div></div>
          </div>
        </div>
        <div class="border-2 border-blue-600">
          <h1 class="text-6xl font-extrabold">Projects</h1>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped></style>
