<script lang="ts" setup>

import LogoBright from 'assets/pictures/LogoBright.svg?skipsvgo';
import { mainNav, phoneNumber, email, address } from '~/constants/constants';


</script>

<template>
  <footer class="grid_wrapper">
    <LogoBright class="logo"/>
    <ul class="links flex_down">
      <li v-for='item in mainNav' :key="item">
        <a :href='item.url'>
          {{ item.label }}
        </a>
      </li>
    </ul>
    <ul class="addresses flex_down">
      <li>
        <a :href="`tel:${phoneNumber.simple}`">
          <SvgoPhoneIcon/>
          {{ phoneNumber.fancy }}
        </a>
      </li>
      <li>
        <a :href="`mailto:${email}`">
          <SvgoEmailIcon/>
          {{ email }}
        </a>
      </li>
      <li>
        <a>
          <SvgoPointIcon/>
          {{ address }}
        </a>
      </li>
    </ul>
    <div class="button_wrapper">
      <UiButton>Оставить заявку</UiButton>
    </div>
    <span class="pale">© Загдом, 2024</span>
    <span class="pale">Политика конфиденциальности</span>
    <span class="pale">Пользовательское соглашение</span>
  </footer>
</template>

<style lang="scss" scoped>
@mixin grid($row, $col) {
  grid-row: $row;
  grid-column: $col;
}

footer {
  background-color: var(--color-secondary);
  padding: 24px 88px;

  color: white;
  font-size: 16px;
  font-weight: 100;
}

a {
  text-decoration: none;
  color: inherit;
}

.grid_wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 42px;
}

.flex_down {
  list-style: none;
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.links {
  align-self: center;
}

.addresses {
  white-space: pre-line;
  font-family: var(--font-title);

  & a {
    display: flex;
    gap: 8px;
  }

  & .nuxt-icon {
    color: var(--color-primary);
  }
}

.button_wrapper {
  justify-self: end;
}

.pale {
  opacity: .6;
  font-size: 14px;
}

</style>
