<template>
  <section class="w-90 mx-auto px-12 pt-6 pb-0">
    <h2 class="text-h4 pb-3">Ce que je fais</h2>
    <p class="text-body-2 mb-3">
      Vous trouverez ci-dessous un bref aperçu de mes principaux ensembles de compétences techniques
      et des technologies que j'utilise. Envie d'en savoir plus sur mon expérience ?
      <br />
      Consultez mon portfolio !
    </p>

    <v-row class="w-100 ga-3 mx-auto">
      <v-col
        tag="article"
        class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7"
        :class="[responsiveClass]"
      >
        <v-sheet tag="header" class="bg-grey-lighten-4 mb-5">
          <h3 class="text-h6 text-center font-weight-bold">Front-End</h3>
        </v-sheet>
        <v-row class="mx-auto d-flex flex-wrap">
          <ul class="d-flex flex-wrap justify-center ga-3">
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-html5 :filled="true" class="icon" />
                <figcaption class="text-center">HTML5</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-css3 :filled="true" class="icon" />
                <figcaption class="text-center">CSS3</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-sass :filled="true" class="icon" />
                <figcaption class="text-center">Sass</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-less :filled="true" class="icon" />
                <figcaption class="text-center">Less</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-javascript :filled="true" class="icon" />
                <figcaption class="text-center">Javascript</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-react :filled="true" class="icon" />
                <figcaption class="text-center">React</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-vuejs :filled="true" class="icon" />
                <figcaption class="text-center">Vue.js</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-nuxt :filled="true" class="icon" />
                <figcaption class="text-center">Nuxt</figcaption>
              </figure>
            </li>
          </ul>
        </v-row>
      </v-col>
      <v-col
        tag="article"
        class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7"
        :class="[responsiveClass]"
      >
        <v-sheet tag="header" class="bg-grey-lighten-4 mb-5">
          <h3 class="text-h6 text-center font-weight-bold">Back-End</h3>
        </v-sheet>
        <v-row class="mx-auto d-flex flex-wrap">
          <ul class="d-flex flex-wrap justify-center ga-3">
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-nodejs :filled="true" class="icon" />
                <figcaption class="text-center">Node.js</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-expressjs :filled="true" class="icon" />
                <figcaption class="text-center">Express.js</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-php :filled="true" class="icon" />
                <figcaption class="text-center">PHP</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-mysql :filled="true" class="icon" />
                <figcaption class="text-center">MYSQL</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-mongodb :filled="true" class="icon" />
                <figcaption class="text-center">MongoDB</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-laravel :filled="true" class="icon" />
                <figcaption class="text-center">laravel</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-symfony :filled="true" class="icon" />
                <figcaption class="text-center">Symfony</figcaption>
              </figure>
            </li>
          </ul>
        </v-row>
      </v-col>
      <v-col
        tag="article"
        class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7"
        :class="[responsiveClass]"
      >
        <v-sheet tag="header" class="bg-grey-lighten-4 mb-5">
          <h3 class="text-h6 text-center font-weight-bold">Tools</h3>
        </v-sheet>
        <v-row class="mx-auto d-flex flex-wrap">
          <ul class="d-flex flex-wrap justify-center ga-3">
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-git :filled="true" class="icon" />
                <figcaption class="text-center">Git</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-jest :filled="true" class="icon" />
                <figcaption class="text-center">Jestjs</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-npm :filled="true" class="icon" />
                <figcaption class="text-center">NPM</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-webpack :filled="true" class="icon" />
                <figcaption class="text-center">Webpack</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-vitejs :filled="true" class="icon" />
                <figcaption class="text-center">Vitejs</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-prettier :filled="true" class="icon" />
                <figcaption class="text-center">Prettier</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-eslint :filled="true" class="icon" />
                <figcaption class="text-center">ESLint</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-airbnb :filled="true" class="icon" />
                <figcaption class="text-center">Airbnb</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-babbel :filled="true" class="icon" />
                <figcaption class="text-center">Babbel</figcaption>
              </figure>
            </li>
          </ul>
        </v-row>
      </v-col>
      <v-col
        tag="article"
        class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7"
        :class="[responsiveClass]"
      >
        <v-sheet tag="header" class="bg-grey-lighten-4 mb-5">
          <h3 class="text-h6 text-center font-weight-bold">Utils</h3>
        </v-sheet>
        <v-row class="mx-auto d-flex flex-wrap">
          <ul class="d-flex flex-wrap justify-center ga-3">
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-github :filled="true" class="icon" />
                <figcaption class="text-center">GitHub</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-figma :filled="true" class="icon" />
                <figcaption class="text-center">Figma</figcaption>
              </figure>
            </li>
            <li>
              <figure class="d-flex flex-column align-center">
                <svgo-logo-notion :filled="true" class="icon" />
                <figcaption class="text-center">Notion</figcaption>
              </figure>
            </li>
          </ul>
        </v-row>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  data() {
    return {
      responsiveClass: '',
    };
  },
  watch: {
    '$vuetify.display.xs'() {
      this.responsiveClass = this.$vuetify?.display?.xs ? 'responsiveSkills' : '';
    },
  },
  mounted() {
    this.responsiveClass = this.$vuetify?.display?.xs ? 'responsiveSkills' : '';
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  width: 100%;
}

li {
  width: 80px;
}

.w-80 {
  width: 80% !important;
}

.w-90 {
  width: 90% !important;
}

.icon {
  width: 48px;
  height: 48px;
}

.responsiveSkills {
  flex-basis: auto;
}
</style>
