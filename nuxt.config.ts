// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  css: ['~/assets/css/main.css'],
  supabase: {
    redirect: false,
  },
})