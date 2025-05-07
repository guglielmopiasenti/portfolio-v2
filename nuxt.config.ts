// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image"],
  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  // supabase: {
  //   redirect: false,
  //   url: process.env.SUPABASE_URL,
  //   key: process.env.SUPABASE_KEY,
  // },
}) 