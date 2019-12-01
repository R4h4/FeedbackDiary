// nuxt.config.ts
import { Configuration } from '@nuxt/types'

const nuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: 'src',
  env: {},
  head: {
    title: '{{ name }}',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '{{ description }}'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  loading: { color: '#3B8070' },
  css: [],
  plugins: [
    { src: '~/plugins/vuetify.options' },
    { src: '~/plugins/aws-amplify', ssr: false }
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/eslint-module'
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    optionsPath: '~/plugins/vuetify.options.ts'
  },
  serverMiddleware: [
    { path: '/api', handler: '~/server/index.ts' }
  ],
  axios: {},
  build: {
    /**
     * You can extend webpack config here
     */
    extend (config, ctx): void {
      // Run ESLint on save
      if (ctx.isDev && process.client) {
        if (config.module) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
      }
    }
  }
}

module.exports = nuxtConfig
