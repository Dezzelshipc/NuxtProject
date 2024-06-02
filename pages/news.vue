<template>
  <section class="news">
    <div>
      <div class="route">
        <UiPathNav :names="['Главная', 'Новости']" />
      </div>
      <div class="news_header">
        <h1>Новости</h1>
      </div>
      <div class="news_cards">
        <UiNewsCard
          v-for="n in more_news"
          :key="n"
          :image="n.image"
          :date="n.date"
          :title="n.title"
          :description="n.description"
        />
      </div>
    </div>
  </section>
  <section class="pagination">
    <div>
      <UiPagination />
    </div>
  </section>
</template>

<script setup>
import { news } from "~/constants/mock_news";

let more_news = Array.from([]);
for (let i = 0; i < 3; i++) more_news.push(...news);
</script>

<style lang="scss" scoped>
section {
  padding: var(--main-padding);
}

section > div {
  max-width: 1920px;
}

.news > div {
  width: 100%;
}

.route {
  margin-bottom: 30px;
}

.news_header {
  margin-bottom: 30px;
}

.news_cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
  align-items: center;
  gap: 32px 16px;

  max-width: var(--width-dynamic);
}
</style>
