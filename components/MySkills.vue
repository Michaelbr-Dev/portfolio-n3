<template>
  <section class="w-90 mx-auto pa-12">
    <h2 class="text-h4 pb-3">Ce que je fais</h2>
    <p class="text-body-2 mb-3">
      Vous trouverez ci-dessous un bref aperçu de mes principaux ensembles de compétences techniques
      et des technologies que j'utilise. Envie d'en savoir plus sur mon expérience ?
      <br />
      Consultez mon CV en ligne et mon portfolio !
    </p>
    <v-container class="w-90">
      <v-row class="ga-3 w-100">
        <v-col class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7">
          <v-sheet class="bg-grey-lighten-4 text-h6 text-center font-weight-bold mb-5">
            Front-End
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
        <v-col class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7">
          <v-sheet class="bg-grey-lighten-4 text-h6 text-center font-weight-bold mb-5">
            Back-End
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
        <v-col class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7">
          <v-sheet class="bg-grey-lighten-4 text-h6 text-center font-weight-bold mb-5">
            Tools
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
        <v-col class="bg-grey-lighten-4 rounded-lg mx-auto elevation-1 pb-7">
          <v-sheet class="bg-grey-lighten-4 text-h6 text-center font-weight-bold mb-5">
            Utils
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
    </v-container>
  </section>
</template>

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
</style>
