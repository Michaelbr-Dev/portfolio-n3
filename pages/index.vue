<template>
  <div>
    <AboutMe />
    <MySkills />
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
      .then((projects) => {
        const filteredProjects = projects
          .filter((project) => project.homepage)
          .slice(-3)
          .reverse();
        this.projects = filteredProjects;
      });
  },
};
</script>
