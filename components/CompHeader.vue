<script lang="ts" setup>
import LogoDark from "assets/img/LogoDark.svg?skipsvgo";
import { mainNav, phoneNumber } from "~/constants/constants";

</script>

<template>
  <header>
    <div class="nav">
      <div class="left">
        <a href="/"><LogoDark /></a>
        <ul class="left_links">
          <li v-for="item in mainNav" :key="item">
            <a :href="item.url">
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
      <div class="right">
        <a class="phone" :href="`tel:${phoneNumber.simple}`">
          <SvgoPhone />
          {{ phoneNumber.fancy }}
        </a>
        <UiRequestButton class="req_button" />
        <UiDrawerButton class="draw_button" />
      </div>
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
  padding: var(--main-padding);
  max-height: 50px;

  background-color: white;

  font-family: var(--font-title);
  font-size: 16px;
  font-weight: 400;

  text-wrap: nowrap;
}

header > div {
  max-width: 1920px;
  margin: 0 auto;
}

.nav {
  @include flex_gap(10px);
  justify-content: space-between;
}

.left {
  @include flex_gap(80px, center);
  color: #666;
}

.left_links {
  @include flex_gap(10px 24px, center);
  list-style: none;
  flex-wrap: wrap;
}

.right {
  @include flex_gap(24px, center);
  color: var(--active-color-dark);
}

.phone {
  @include flex_gap(8px, center);

  & .nuxt-icon {
    color: var(--color-primary);
  }
}

a {
  text-decoration: none;
  color: inherit;
}

.req_button {
  display: initial;
}

.draw_button {
  display: none;
}

@media screen and (max-width: 1100px) {
  .left {
    gap: 40px;
  }
}

@media screen and (max-width: 900px) {
  .left_links {
    display: none;
  }
}

@media screen and (max-width: 700px) {
  .phone {
    display: none;
  }

  .req_button {
    display: none;
  }

  .draw_button {
    display: initial;
  }
}
</style>
