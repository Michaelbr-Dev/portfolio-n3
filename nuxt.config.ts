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
  ],
  svgo: {
    autoImportPath: './assets/icons/',
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
});
