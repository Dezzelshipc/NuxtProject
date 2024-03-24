<script lang="ts" setup>
import LogoDark from 'assets/img/LogoDark.svg?skipsvgo';
import { mainNav, phoneNumber } from '~/constants/constants';

</script>

<template>
  <header>
    <div class="left">
      <LogoDark/>
      <ul class="left_links">
        <li v-for='item in mainNav' :key="item">
          <a :href='item.url'>
            {{ item.label }}
          </a>
        </li>
      </ul>
    </div>

    <div class="right">
      <a :href="`tel:${phoneNumber.simple}`">
        <SvgoPhoneIcon class="PhoneIcon" />
        {{ phoneNumber.fancy }}
      </a>
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
  list-style: none;
}

.right {
  @include flex_gap(24px, center);
  color: var(--active-color-dark);
}

.right > a {
  @include flex_gap(8px, center);
}

a {
  text-decoration: none;
  color: inherit;
}

.PhoneIcon {
  color: var(--color-primary);
}

</style>
