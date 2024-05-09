<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer class="bg-deep-purple" permanent>
        <v-list-item
          lines="two"
          prepend-avatar="/assets/images/profile_bw.png"
          title="Michael Briquet"
          subtitle="Développeur Web Junior"
        ></v-list-item>
        <v-divider></v-divider>
        <v-list-item prepend-icon="mdi-home" link title="Accueil"></v-list-item>
        <v-list-item prepend-icon="mdi-folder" link title="Portfolio"></v-list-item>
        <v-list-item prepend-icon="mdi-email" link title="Contact"></v-list-item>
        <v-divider></v-divider>
        <div>
          <p>
            Bonjour, je m'appel Michaël et je suis un développeur web junior de sites et
            d'applications évolutives. Bienvenue sur mon portfolio !
          </p>
        </div>
      </v-navigation-drawer>
      <v-main>
        <slot />
      </v-main>
    </v-layout>
  </v-card>
</template>
