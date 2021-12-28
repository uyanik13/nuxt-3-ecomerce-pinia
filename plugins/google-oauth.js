import { defineNuxtPlugin } from '#app'


import GAuth from 'vue3-google-oauth2'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GAuth, {
       clientId: nuxtApp.$config.GOOGLE_OAUTH_CLIENT_ID,
       scope: 'profile email',
       prompt: 'select_account',
       fetch_basic_profile: false
  // prompt: 'consent',
  })
  
 
  
})


