<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      :mobile-breakpoint="612"
      class="bg-deep-purple"
      @click="toggleRailMode"
    >
      <div v-if="rail === false" class="text-center mb-3">
        <p class="text-h5 font-weight-bold">Michaël Briquet</p>
        <h1 class="text-subtitle-1">Développeur Web Front</h1>
      </div>
      <v-img
        class="mx-auto mb-3"
        :width="160"
        src="@/public/images/profile_bw.png"
        alt="Michaël Briquet"
      />
      <template #prepend>
        <v-list density="compact" class="menu-wrapper pa-0">
          <v-list-item class="px-0">
            <v-btn
              v-if="rail"
              class="d-none d-sm-flex d-md-none mx-auto"
              icon="mdi-menu"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
            <v-btn
              v-else
              class="d-none d-sm-flex d-md-none ml-auto mr-0"
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </v-list-item>
        </v-list>
      </template>
      <v-divider />

      <v-list class="mx-auto my-2">
        <v-list-item class="mx-auto" prepend-icon="mdi-home" link title="Accueil" to="/" />

        <v-list-item
          class="mx-auto"
          prepend-icon="mdi-folder"
          link
          title="Portfolio"
          to="/projects"
        />

        <v-list-item class="mx-auto" prepend-icon="mdi-email" link title="Contact" to="/contact" />
      </v-list>
      <v-divider />
      <div v-if="rail === false" class="my-3">
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
      <v-btn class="d-sm-none" icon="mdi-menu" elevation="0" @click.stop="drawer = !drawer">
      </v-btn>
      <slot />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      rail: false,
    };
  },
  watch: {
    '$vuetify.display.sm'(isScreenSm) {
      if (isScreenSm) {
        this.rail = true;
      } else {
        this.rail = false;
      }
    },
  },
  mounted() {
    if (this.$vuetify.display.sm) {
      this.rail = true;
    }
  },
  methods: {
    toggleRailMode() {
      if (this.$vuetify.display.sm) {
        this.rail = true;
      }
    },
  },
};
</script>

<style scoped>
.social-link {
  transition: all 0.3s ease-in-out;
}

.menu-wrapper {
  height: 50px;
}
</style>
