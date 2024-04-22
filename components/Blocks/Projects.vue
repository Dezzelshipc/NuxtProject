<template>
  <div>
    <h1>Реализованные проекты</h1>
    <div class="list">
      <UiProject
        v-for="project in projects"
        :key="project"
        :title="project.title"
        :description="project.description"
        :image="project.image"
      />
    </div>
  </div>
</template>

<script>
import { projects } from "~/constants/mock_projects";

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-x: scroll;

  gap: 16px;

  max-width: var(--width-dynamic);
}

h1 {
  margin-bottom: 32px;
}
</style>
