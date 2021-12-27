import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
   // STORE_URL: process.env.STORE_URL || "http://localhost:1337",
  },
  css: ["~/assets/css/tailwind.css"],
  buildModules: [
    '@pinia/nuxt',
  ],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  meta: {
    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=2",
      },
      {
        name: "description",
        content: "e-commerce starter using Strapi, Nuxt.js and Snipcart",
      },
    ],
  },
});
