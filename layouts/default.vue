<template>
  <v-app>
    <v-navigation-drawer class="bg-deep-purple">
      <div class="text-center my-3">
        <p class="text-h5 font-weight-bold">Michaël Briquet</p>
        <h1 class="text-subtitle-1">Développeur Web Front</h1>
      </div>
      <v-img class="mx-auto mb-3" :width="160" src="@/public/images/profile_bw.png" />
      <v-divider />
      <v-list class="mx-auto my-2">
        <v-list-item prepend-icon="mdi-home" link to="/" title="Accueil" />

        <v-list-item
          class="mx-auto"
          prepend-icon="mdi-folder"
          link
          title="Portfolio"
          to="/projects"
        />

        <v-list-item class="mx-auto" prepend-icon="mdi-email" link title="Contact" />
      </v-list>
      <v-divider />
      <div class="my-3">
        <p class="px-3 mb-3 text-body-2">
          Bonjour, je m'appel Michaël et je suis un <strong>développeur web front-end</strong> de
          <strong>sites</strong> et <strong>d'applications évolutives</strong>. <br />Bienvenue sur
          mon portfolio !
        </p>
        <v-divider />
        <div class="mt-3 d-flex justify-center">
          <v-hover>
            <template #default="{ isHovering, props }">
              <NuxtLink
                title="linkedin"
                v-bind="props"
                class="mx-1 social-link"
                :class="{ 'text-grey-lighten-1': isHovering, 'text-white': !isHovering }"
                to="https://www.linkedin.com/in/michael-briquet/"
                target="_blank"
              >
                <v-icon icon="mdi-linkedin" />
              </NuxtLink>
            </template>
          </v-hover>
          <v-hover>
            <template #default="{ isHovering, props }">
              <NuxtLink
                title="github"
                v-bind="props"
                class="mx-1 social-link"
                :class="{ 'text-grey-lighten-1': isHovering, 'text-white': !isHovering }"
                to="https://github.com/Michaelbr-Dev"
                target="_blank"
              >
                <v-icon icon="mdi-github" />
              </NuxtLink>
            </template>
          </v-hover>
        </div>
      </div>
    </v-navigation-drawer>
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<style scoped>
.social-link {
  transition: all 0.3s ease-in-out;
}
</style>
