import { defineNuxtConfig } from "nuxt3";

const loadEnvironmentVariables = () => {
  const staging = process.env.NODE_ENV === 'staging'
  const production = process.env.NODE_ENV === 'production'

  if (staging) {
    require('dotenv').config({ path: './.environment/staging' })
  } else if (production) {
    require('dotenv').config({ path: './.environment/production' })
  } else {
    require('dotenv').config({ path: './.environment/local' })
  }
}


loadEnvironmentVariables()


// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  publicRuntimeConfig: {
   // STORE_URL: process.env.STORE_URL || "http://localhost:1337",
    API_URL: process.env.API_URL,
    SITE_URL: process.env.SITE_URL,
    GOOGLE_OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    MIX_PUSHER_APP_KEY: process.env.MIX_PUSHER_APP_KEY,
    MIX_PUSHER_APP_CLUSTER: process.env.MIX_PUSHER_APP_CLUSTER
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
