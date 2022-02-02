<template>
  <div>
    <short-page-container title="Projects">
      <p class="projects-label">
        I love building <span class="blue">side-projects</span>. These are some
        of the ones I've worked on in the past.
      </p>

      <template v-for="(project, index) of projects">
        <ProjectItem
          :key="'project' + project.name"
          :image="project.image"
          :name="project.name"
          :github="project.github"
          :website="project.website"
          :youtube="project.youtube"
          :play="project.play"
          :gplay="project.gplay"
          :keywords="project.keywords"
          :project="project"
        ></ProjectItem>
        <div
          class="divider"
          :key="'divider' + project.name"
          v-if="index !== projects.length - 1"
        ></div>
      </template>
    </short-page-container>
  </div>
</template>

<script>
import { generateTitle } from '~/utils/titleUtils'

export default {
  name: 'ProjectsPage',
  async asyncData({ $content, params }) {
    const projects = await $content('projects')
      .sortBy('priority', 'desc')
      .fetch()

    return {
      projects,
    }
  },
  head() {
    return {
      title: generateTitle('Projects'),
    }
  },
}
</script>

<style scoped>
.divider {
  opacity: 0.1;
  border: 1px solid #1a1a1a;

  margin-top: 28px;
  margin-bottom: 38px;
}

.projects-label {
  font-size: 14px;
  line-height: 17px;
  margin-top: -30px;
  margin-bottom: 50px;
}

.blue {
  font-weight: bold;
  color: var(--accent-secondary);
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
}
</style>