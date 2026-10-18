// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', '@nuxt/eslint'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: { wishlistUrl: '' },
  },

  i18n: {
    defaultLocale: 'es',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-GB', name: 'English', file: 'en.json' },
    ],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      title: 'Alimentadoras de San Vicente del Raspeig',
      meta: [
        { name: 'description', content: 'Ayuda a las alimentadoras de gatos de San Vicente del Raspeig donando comida, refugios y material.' },
      ],
    },
  },
})
