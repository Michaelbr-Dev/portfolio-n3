<template>
  <section class="d-flex justify-center px-12 pt-12 pb-0 bg-grey-lighten-5 mx-auto">
    <div class="d-flex w-90 justify-space-between">
      <div class="pr-5">
        <h2 class="text-h4 mb-1">Michaël Briquet</h2>
        <p class="text-h5 mb-3">Développeur Web Front</p>
        <p class="mb-4 text-body-2">
          Après une formation de <strong>Développeur Web</strong>, j'ai acquis de nombreuses
          compétences et connaissances grâce à des projets réalisés dans différents langages de
          programmation. Je suis un <strong>développeur web front-end</strong> et
          <strong>back-end</strong> de <strong>sites</strong> et
          <strong>d'applications web évolutives</strong>. Vous voulez savoir comment je peux aider
          votre projet ? Consultez mon portfolio !
        </p>
        <nav class="mb-4 d-flex justify-end ga-7">
          <v-btn class="text-none ma-2" color="deep-purple" rounded="md" to="/projects">
            Mon Portfolio
            <v-icon icon="mdi-arrow-right-thin-circle-outline pl-3"></v-icon>
          </v-btn>
          <!-- 
              // Boutton pour accéder au CV en ligne
              <v-btn class="text-none ma-2" color="deep-purple" rounded="md" to="#">
              Mon CV
              <v-icon icon="mdi-file-document-outline pl-3"></v-icon>
            </v-btn> -->
        </nav>
      </div>
      <figure class="align-self-center pa-3 d-none d-md-block">
        <v-img
          :width="400"
          aspect-ratio="1/1"
          cover
          rounded="lg"
          src="@/public/images/code.jpg"
          alt="Vscode example"
        />
      </figure>
    </div>
  </section>
</template>

<style scoped>
.w-80 {
  width: 80% !important;
}

.w-90 {
  width: 90% !important;
}
</style>
