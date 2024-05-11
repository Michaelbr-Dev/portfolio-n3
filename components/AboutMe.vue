<template>
  <section class="pa-12 bg-grey-lighten-5">
    <div class="d-flex w-75 mx-auto">
      <div class="pr-5">
        <h2 class="text-h4 mb-1">Michaël Briquet</h2>
        <p class="text-h5 mb-3">Développeur Web Front</p>
        <p class="mb-4 text-body-2">
          Après une formation de <strong>Développeur Web</strong>, j'ai acquis de nombreuses
          compétences et connaissances grâce à des projets réalisés dans différents langages de
          programmation. Je suis un <strong>développeur web front-end</strong> et
          <strong>back-end</strong> de <strong>sites</strong> et
          <strong>d'applications web évolutives</strong>. Vous voulez savoir comment je peux aider
          votre projet ? Consultez mon portfolio et mon CV en ligne !
        </p>
        <nav class="mb-4 d-flex justify-end ga-7">
          <v-btn class="text-none" color="deep-purple" rounded="md" href="#">
            Mon Portfolio
            <v-icon icon="mdi-arrow-right-thin-circle-outline pl-3"></v-icon>
          </v-btn>
          <v-btn class="text-none" color="deep-purple" rounded="md" href="#">
            Mon CV
            <v-icon icon="mdi-file-document-outline pl-3"></v-icon>
          </v-btn>
        </nav>
      </div>
      <div class="align-self-center pa-3">
        <v-img
          :width="400"
          aspect-ratio="1/1"
          cover
          rounded="lg"
          src="/assets/images/code.jpg"
          alt="Vscode example"
        />
      </div>
    </div>
  </section>
</template>
