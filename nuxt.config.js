export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'vue-education',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/colors.css',
    {
      src: '~/node_modules/highlight.js/styles/github-dark.css',
      lang: 'css',
    },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vue-scrollto', mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    'nuxt-fontawesome'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  // SSR & CSR両方で使用可能
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
    serviceId: process.env.SERVICE_ID
  },
  // SSR で使用可能
  privateRuntimeConfig: {
    serviceId: process.env.SERVICE_ID
  },
  fontawesome: {
    component: 'FontAwesome',
  },
}
