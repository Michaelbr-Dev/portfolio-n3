<template>
  <section class="w-90 mx-auto pa-12">
    <h2 class="text-h4 pb-3 text-center">Portfolio</h2>
    <p class="w-100 text-center">
      Bienvenue sur mon portfolio en ligne.<br />
      Vous trouverez toutes mes réalisations sur cette page !<br />
      Je travaille en freelance. Vous voulez de l'aide pour créer votre site ou application ?
    </p>
    <nav class="w-100 mx-auto text-center ma-3">
      <nuxt-link to="/contact">
        <v-btn class="text-none" color="deep-purple" rounded="md"
          ><v-icon icon="mdi-email-fast-outline pr-3"></v-icon>
          Contactez moi !
        </v-btn>
      </nuxt-link>
    </nav>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.w-90 {
  width: 90% !important;
}
</style>
