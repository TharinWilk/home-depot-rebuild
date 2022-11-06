export default defineNuxtConfig({
  target: "static",

  router: {
    base: "/home-depot-rebuild/",
  },

  app: {
    baseURL: "/home-depot-rebuild/",
    buildAssetsDir: "/home-depot-rebuild/_nuxt/",
  },

  modules: ["nuxt-icon"],

  css: ["~/assets/styles/main.scss"],

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
