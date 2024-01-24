<script setup></script>

<template>
  <!-- background -->
  <div class="antialiased">
    <div class="relative bg-[url('/gradient-1.png')] bg-cover">
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

    <!-- darkening gradient -->

    <!-- technologies section -->
    <div class="container py-20 mx-auto flex flex-col items-center">
      <h1 class="text-7xl font-semibold">Technologies I use</h1>
      <div class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
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
              src="/logos/mysql-official.svg"
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
              height="88"
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

    <!-- Me in a nutshell -->
    <div
      class="container flex flex-col justify-center items-center mx-auto gap-28 py-10"
    >
      <div class="grid grid-cols-1 gap-5">
        <h1 class="text-5xl font-semibold text-center">Me in a Nutshell</h1>
        <p class="text-xl text-center">
          My fascination with technology sparked at the age of three, as I found
          myself fascinated by the inner workings of personal computers. This
          early curiosity flourished into a lifelong journey of exploring the
          latest advancements in tech. My professional path has been varied, yet
          technology remained the steadfast pulse beneath it all. Today, I
          channel this enduring passion into my role as a junior full-stack
          developer, where I deftly navigate the complexities of both front-end
          and back-end landscapes. Photography, another fervent pursuit,
          complements my technical acumen, granting me a distinctive edge in
          design and user experience (UX). This creative outlet enhances my
          ability to envision and cultivate digital environments that are not
          only functional but also visually captivating. Throughout my diverse
          career, my heart has always been anchored in the digital realm. Agile
          and adaptive, I am poised to make a meaningful impact in the tech
          industry, blending innovation with intuitive design.
        </p>
      </div>

      <!-- experiences -->
      <div class="grid grid-cols-1 gap-5">
        <h1 class="text-5xl font-semibold text-center">Experiences</h1>
        <h2 class="text-3xl font-semibold">Php developer</h2>
        <h3 class="text-2xl">ReloAdvisor | 2023</h3>
        <p class="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          expedita iusto temporibus dolores architecto, omnis ullam assumenda.
          Nemo architecto enim assumenda provident, ipsam quod, quibusdam animi
          corporis quasi ea incidunt?
        </p>
        <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-black" />
        <h2 class="text-3xl font-semibold">Full stack web developer</h2>
        <h3 class="text-2xl">Fiverr | different platforms | 2023</h3>
        <p class="text-xl">
          As part of a team of four developers on Fiverr, I work in both
          front-end and back-end development. We deliver a wide range of website
          projects to clients, ranging from simple static websites like
          portfolios and restaurant sites, to more complex, dynamic platforms
          including e-commerce sites. We use a variety of technologies including
          Vue.js, Nuxt.js, Laravel, PHP, JavaScript, Bootstrap, Tailwind CSS.
        </p>
        <p class="text-xl">
          I oversaw the development of a restaurant's website, using Vue.js and
          Laravel for front-end attractiveness and back-end functionality,
          featuring an easily navigable menu, a visual gallery, and a detailed
          "About Us" page, all styled with Tailwind CSS for a cohesive
          experience.
        </p>
        <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-black" />
        <h2 class="text-3xl font-semibold">
          JR full stack web developer trainee
        </h2>
        <h3 class="text-2xl">Boolean | 2023</h3>
        <p class="text-xl">
          As part of a team, I played a significant role in completing a final
          project. I took charge of 80% of the website's styling and handled
          various front-end tasks, including ensuring responsiveness,
          implementing JavaScript interactions, creating modals, forms, managing
          routing, and integrating with APIs. Additionally, I contributed to the
          back-end, assisting in developing styles, modals, CRUD operations,
          forms, and reusable components.
        </p>
      </div>

      <!-- studies -->
      <div class="grid grid-cols-1 gap-5">
        <h1 class="text-5xl font-semibold text-center">Education</h1>
        <h2 class="text-3xl font-semibold">
          Boolean | Full stack development course
        </h2>
        <h3 class="text-2xl">Boolean | 12 October 2023</h3>
        <p class="text-xl">
          I completed a full-time six-month Full-Stack Web Development Bootcamp
          at Boolean Academy. I created web projects independently and with a
          team and successfully delivered a functional website. I gained
          proficiency in front-end and back-end technologies such as JavaScript,
          Vue, Node.js, PHP, Laravel, HTML, CSS, SASS, and MySQL. I also learned
          to use Bootstrap, Vite, Postman, npm, Composer, PhpMyAdmin, and Mamp
          for efficient web application development.
        </p>
        <hr class="h-px my-8 bg-gray-100 border-0 dark:bg-black" />
        <h2 class="text-3xl font-semibold">
          Bologna University | Bachelor in sociology
        </h2>
        <h3 class="text-2xl">12 October 2019</h3>
      </div>

      <!-- previous experiences -->
      <div class="grid grid-cols-1 gap-5">
        <h1 class="text-5xl font-semibold text-center">Previous experiences</h1>
        <h2 class="text-3xl font-semibold">
          Temporary fleet manager - Mechanic
        </h2>
        <h3 class="text-2xl">Felyx | 2021-2023</h3>
        <p class="text-xl">
          Organizing and supervising operations for installing tracking systems
          on vans and the Rotterdam warehouse. Managing workers' schedules and
          preparing performance evaluations. Training of new mechanics.
          Independently took care of street repair operations for the scooter
          fleet in Rotterdam as a mechanic. Organized tasks division between
          Transport operations agents and Street Repair Mechanics. International
          and National transport of moped parts and scooters across Felyx
          warehouses. Coordinating research operations for missing scooters.
        </p>
      </div>
    </div>
  </div>
</template>
