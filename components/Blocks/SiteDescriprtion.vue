<template>
  <div class="desc_wrapper">
    <div class="text">
      <h1>Каждый проект для нас — важный</h1>
      <p>
        Мы строительная компания полного цикла.
      </p>
      <p>
        Вникаем во все детали,
        разрабатываем планировку будущего дома, продумываем конструктивные
        решения и общую архитектурную концепцию
      </p>
    </div>
    <div class="card">
      <SvgoHouse />
      <div>
        <h3>57 домов</h3>
        <p>спроектировали и построили “под ключ”</p>
      </div>
    </div>
    <div class="card">
      <SvgoCalenar />
      <div>
        <h3>14 лет</h3>
        <p>мы на рынке загородного строительства</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.desc_wrapper {
  display: grid;
  grid-template: 1fr / 2fr 1fr 1fr;
  gap: 16px;

  align-items: end;

  @media screen and (max-width: 1100px) {
    grid-template: auto 1fr 1fr / 1fr;
  }
}

.text  {
    display: flex;
    flex-flow: column;
    gap: 32px;
}

.card {
  display: flex;
  flex-flow: column nowrap;

  background-color: var(--color-bone);

  gap: 24px;
  padding: 24px;
  border-radius: 20px;

  & > div {
    display: flex;
    flex-flow: column nowrap;
    gap: 8px;
  }

  .nuxt-icon {
    color: var(--color-primary);
  }
}

p {
    color: #666;
    font-size: 20px;
}
</style>
