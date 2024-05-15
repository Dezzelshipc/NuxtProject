<template>
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
        <BlocksNews/>
      </div>
    </section>
</template>


<style lang="scss" scoped>

section {
  padding: var(--main-padding);
  margin-block: 20px;
}

section > div {
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
