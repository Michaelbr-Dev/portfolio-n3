<template>
  <div>
    <ProjectsHero />
    <MyProjects :projects="projects" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  created() {
    fetch(`/projects.json`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.projects = response.reverse();
      });
  },
};
</script>
