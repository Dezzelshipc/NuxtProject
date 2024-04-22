<script lang="ts" setup></script>

<template>
  <main>
    <section class="slider">
      <div>
        <BlocksSlider />
      </div>
    </section>
    <section class="desc">
      <div>
        <BlocksSiteDescriprtion />
      </div>
    </section>
    <section class="projects">
      <div>
        <BlocksProjects />
      </div>
    </section>
    <section class="news">
      <div>
        <BlocksNews />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  font-size: 1.5em;
  display: flex;
  flex-flow: column;
  align-items: center;

  height: 100%;
}

main > section {
  padding: var(--main-padding);
  margin-block: 20px;
}

main > section > div {
  max-width: 1920px;
}

.projects {
  background-color: var(--color-bone);
  padding: var(--main-padding);
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
