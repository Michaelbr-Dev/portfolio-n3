<template>
  <section class="w-90 mx-auto pa-12">
    <h2 class="text-h4 pb-3 text-center">Contact</h2>
    <p class="w-100 text-center">
      Envi de m'engager pour votre projet ou juste envie de me dire bonjour ?<br />
      Vous pouvez remplir le formulaire de contact ci-dessous.<br />
      Vous voulez vous connecter ? Suivez-moi sur les réseaux sociaux ci-dessous.
    </p>
    <nav class="mt-3 d-flex justify-center">
      <v-hover>
        <template #default="{ isHovering, props }">
          <NuxtLink
            title="linkedin"
            v-bind="props"
            class="mx-1 social-link"
            :class="{ 'text-purple-lighten-4': isHovering, 'text-purple': !isHovering }"
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
            :class="{ 'text-purple-lighten-4': isHovering, 'text-purple': !isHovering }"
            to="https://github.com/Michaelbr-Dev"
            target="_blank"
          >
            <v-icon icon="mdi-github" />
          </NuxtLink>
        </template>
      </v-hover>
    </nav>
  </section>
</template>
<script>
export default {};
</script>

<style scoped>
.social-link {
  transition: all 0.3s ease-in-out;
}
</style>
