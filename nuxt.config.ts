export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
  ],
  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY,
  },
});
