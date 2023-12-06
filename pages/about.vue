<script setup></script>

<template>
  <!-- background -->
  <div class="relative bg-[url('/gradient-1.png')] bg-cover">
    <div class="antialiased">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div
        class="container relative grid grid-cols-2 mx-auto pt-40 "
      >
        <div class="grid grid-cols-1">
          <h1 class="text-7xl font-extrabold">About Me.</h1>
          <h1 class="text-5xl">
            I'm a full stack developer based in Rotterdam.
          </h1>
          <p class="text-2xl font-light">
            Since 2023, I've enjoyed turning complex problems into simple,
            beautiful and intuitive websites. When I'm not behind a screen
            coding, you'll find me thinkering with hardware, training or
            capturing moments with a camera.
          </p>
        </div>
        <!-- Displaying projects -->
        <div class="flex flex-col text-end">
          <img width="2581" height="2579" src="/me-no-background.png"  class="justify-self-end"/>
        </div>
      </div>
    </div>
  </div>
</template>
