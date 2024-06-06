<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const layout = 'default';

useSeoMeta({
  title: 'Portfolio de Michaël Briquet',
  ogTitle: 'Portfolio de Michaël Briquet',
  description:
    "Michaël Briquet, développeur web junior. Création de sites internet ergonomiques. Développement d'application. Voici mon portfolio où vous retrouverez tous mes projets, ainsi qu'un formulaire pour me contacter",
  ogDescription:
    "Michaël Briquet, développeur web junior. Création de sites internet ergonomiques. Développement d'application. Voici mon portfolio où vous retrouverez tous mes projets, ainsi qu'un formulaire pour me contacter",
});
</script>
