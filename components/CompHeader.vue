<template>
  <header>
    <div class="left">
      <img src="~/assets/pictures/LogoDark.svg" alt="Zagdom" />
      <div class="left_links">
        <a>Реализованные проекты</a>
        <a>Новости</a>
        <a>Контакты</a>
      </div>
    </div>

    <div class="right">
      <div>
        <img src="~/assets/pictures/PhoneIcon.svg" />
        +7 (900) 900-90-90
      </div>
      <UiButton>Оставить заявку</UiButton>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin flex_gap($gap, $align: initial) {
  display: flex;
  gap: $gap;
  align-items: $align;
}

header {
  @include flex_gap(10px);
  justify-content: space-between;

  padding: 24px 88px;
  max-height: 50px;

  background-color: white;

  font-family: var(--font-title);
  font-size: 16px;
  font-weight: 400;

  text-wrap: nowrap;
}

.left {
  @include flex_gap(80px);
  color: #666;
}

.left_links {
  @include flex_gap(24px, center);
}

.right {
  @include flex_gap(24px, center);
  color: var(--active-color-dark);
}

.right > div {
  @include flex_gap(8px, center);
}

</style>
