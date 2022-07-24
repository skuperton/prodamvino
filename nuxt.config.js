export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ProdamVino - Продажа или обмен вашего алкоголя',
    htmlAttrs: {
      lang: 'ru'
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

  // Global name
  globalName: 'prodamVino',
  globals: {
    id: globalName => `__${globalName}`,
    nuxt: globalName => `$${globalName}`
  },

  // Font Awesome Icons
  fontawesome: {
    icons: {
      solid: true,
      regular: true
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/aos', mode: 'client' }
  ],

  // Custom loading
  // loadingIndicator: {
  //   name: '~/assets/loading.html',
  //   img: '/images/loading.gif'
  // },
  loading: '@/components/blanks/loading.vue',

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
    '@nuxtjs/device'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.pug$/,
        loader: 'pug-bem-plain-loader',
        options: {
          b: true
        }
      })
    }
  }
}
