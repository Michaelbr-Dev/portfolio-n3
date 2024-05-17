<template>
  <section class="main-container w-90 mx-auto">
    <h2 class="w-90 pl-10 mb-5">Mes derniers projets :</h2>
    <v-row class="flex-wrap ga-3 px-3">
      <v-card
        v-for="project in projects"
        :key="project.id"
        class="ma-3 mx-auto d-flex flex-column ga-3"
        width="100%"
        max-width="400"
        elevation="1"
        hover
      >
        <v-img
          :src="project.img"
          class="align-end"
          gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,.1)"
          height="200px"
          cover
        ></v-img>
        <v-card-title> {{ project.name }}</v-card-title>
        <v-card-text class="flex-grow-1"> {{ project.description }} </v-card-text>
        <v-row
          class="button mb-3 align-end"
          justify="space-evenly"
          :class="[
            project.url.length <= 2 ? 'w-100 d-flex justify-space-evenly' : 'link ga-3 mx-auto',
          ]"
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
