<template>
  <section class="w-90 mx-auto pa-12">
    <h2 class="text-h4 pb-3">Mes derniers projets :</h2>
    <v-row class="flex-wrap ga-3 px-3 mb-5">
      <v-card
        v-for="project in projects"
        :key="project.id"
        class="ma-3 mx-auto d-flex flex-column ga-3"
        width="100%"
        max-width="400"
        elevation="1"
        hover
        tag="article"
      >
        <figure>
          <v-img
            :src="project.img"
            class="align-end"
            gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.1)"
            height="200px"
            cover
            :alt="project.name"
          ></v-img>
        </figure>
        <v-card-title tag="header"
          ><h3 class="text-h6">{{ project.name }}</h3></v-card-title
        >
        <v-card-text class="flex-grow-1" tag="p"> {{ project.description }} </v-card-text>
        <v-row
          class="button mb-3 ga-3 align-end"
          justify="space-evenly"
          :class="[project.url.length <= 2 ? 'w-100 d-flex justify-space-evenly' : 'link mx-auto']"
          tag="footer"
        >
          <v-btn v-for="url in project.url" :key="url.url" :href="url.url" target="blank">
            {{ url.name }}
          </v-btn>
        </v-row>
      </v-card>
    </v-row>
  </section>
</template>

<script>
export default {
  props: {
    projects: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.main-container {
  max-width: 1440px;
  margin: 0 auto;
}

.w-90 {
  width: 90% !important;
}

.button {
  height: 70px;
}

.link {
  display: grid;
  grid-template-areas:
    'a a'
    'b c';
  grid-template-columns: 1fr 1fr;
  width: 90%;
}

.link > :nth-child(1) {
  grid-area: a;
}

.link > :nth-child(2) {
  grid-area: b;
}

.link > :nth-child(3) {
  grid-area: c;
}
</style>
