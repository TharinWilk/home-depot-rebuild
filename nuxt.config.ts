export default defineNuxtConfig({
  modules: ["nuxt-icon"],
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/styles/main.scss"],
  script: [
    {
      src: [
        // "bootstrap/dist/js/bootstrap.bundle.min.js",
        // "bootstrap/dist/js/bootstrap.min.js",
      ],
    },
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
