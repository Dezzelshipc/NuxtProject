<template>
  <header>
    <div class="left">
      <img src="/pictures/LogoDark.svg" alt="Zagdom" />
      <div class="left_links">
        <a>Реализованные проекты</a>
        <a>Новости</a>
        <a>Контакты</a>
      </div>
    </div>

    <div class="right">
      <div>
        <img src="/pictures/PhoneIcon.svg" />
        +7 (900) 900-90-90
      </div>
      <button>Оставить заявку</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@mixin flex_gap($gap, $align: initial) {
  display: flex;
  gap: $gap;
  align-items: $align;
}

@mixin outline($color, $width) {
  outline-color: $color;
  outline-width: $width;
  outline-offset: -$width;
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

button {
  border-radius: 10px;
  border: none;
  outline: 0 solid;

  padding: 16px 40px;

  font-family: var(--font-title);
  font-size: 14px;
  font-weight: 400;

  color: white;
  background: #2b2f34;

  &:disabled {
    background: white;

    color: var(--disabled-color-dark);

    @include outline(var(--disabled-color-dark), 1px);
  }

  &:focus {
    background: var(--active-color-dark);

    @include outline(var(--active-color-bright), 2px);
  }

  &:hover {
    background: var(--active-color-dark);
  }

  &:active {
    background: var(--active-color-bright);
  }
}
</style>
