import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error is not undefined
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
    [
      '@nuxtjs/robots',
      {
        UserAgent: '*',
        Allow: '/',
      },
    ],
  ],
  svgo: {
    autoImportPath: './assets/icons/',
  },
  runtimeConfig: {
    EMAIL_USER: '',
    APP_PASSWORD: '',
    EMAIL_RECIPIENT: '',
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    // options here
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'fr',
      },
    },
  },
});
