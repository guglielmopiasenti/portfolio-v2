<script setup></script>

<template>
  <!-- background -->
  <div class="relative bg-[url('/gradient-1.png')] bg-cover">
    <div class="antialiased">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container relative grid grid-cols-2 mx-auto pt-40">
        <div class="flex flex-col gap-20">
          <h1 class="text-7xl font-extrabold">About Me.</h1>
          <h1 class="text-3xl">
            I'm a full stack developer based in Rotterdam.
          </h1>
          <p class="text-2xl font-light">
            Since 2023, I've enjoyed turning complex problems into simple,
            beautiful and intuitive websites. When I'm not behind a screen
            coding, you'll find me thinkering with hardware, training or
            capturing moments with a camera.
          </p>
        </div>
        <!-- Displaying picture -->
        <div class="flex align-bottom justify-end">
          <img src="/me-no-background.png" class="h-[29rem] w-fit" />
        </div>
      </div>
    </div>
  </div>
  <!-- darkening gradient -->

  <!-- technologies section -->
  <div class="container py-20">
    <h1 class="text-7xl font-semibold">Technologies I use</h1>
    <div class="py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logos/tailwind-css-wordmark-seeklogo.com.svg"
            alt="Transistor"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logos/bootstrap-seeklogo.com_1.svg"
            alt="Reform"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="/logos/bun-seeklogo.com.svg"
            alt="Tuple"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="/logos/css3_1.svg"
            alt="SavvyCal"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/html5-seeklogo.com_1.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/javascript-js-seeklogo.com.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/laravel-seeklogo.com.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/MySQL_1.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/nodejs-seeklogo.com.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/npm-node-package-manager.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/nuxt-seeklogo.com.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/PHP.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/vite-seeklogo.com.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
          <img
            class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="/logos/vue-js-seeklogo.com.svg"
            alt="Statamic"
            width="158"
            height="48"
          />
        </div>
      </div>
    </div>
  </div>
</template>
