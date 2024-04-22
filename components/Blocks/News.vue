<template>
  <div class="wrapper">
    <section class="upper">
      <h1>Новости</h1>
      <a href="/news" class="button transparent pad">Все новости</a>
    </section>
    <section class="news">
      <UiNewsCard
        v-for="n in news"
        :key="n"
        :image="n.image"
        :date="n.date"
        :title="n.title"
        :description="n.description"
      />
    </section>
  </div>
</template>

<script>
import { news } from "~/constants/mock_news";

export default {
  data() {
    return {
      news,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: 32px;
}

.upper {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  & a {
    text-decoration: unset;
  }
}

.news {
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;

  overflow: auto;

  max-width: var(--width-dynamic);
}

@import url(~/assets/styles/button.scss);
</style>
