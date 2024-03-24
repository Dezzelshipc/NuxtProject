<script lang="ts" setup>
import LogoBright from 'assets/img/LogoBright.svg?skipsvgo';
import { mainNav, contactsNav } from '~/constants/constants';

</script>

<template>
  <footer class="grid_wrapper">
    <LogoBright />
    <ul class="links flex_down">
      <li v-for='item in mainNav' :key="item">
        <a :href='item.url'>
          {{ item.label }}
        </a>
      </li>
    </ul>
    <ul class="addresses flex_down">
      <li v-for="item in contactsNav" :key="item">
        <a :href="item.url">
          <SvgoPhoneIcon v-if="item.id == 'P'"/>
          <SvgoEmailIcon v-else-if="item.id == 'M'"/>
          <SvgoPointIcon v-else-if="item.id == 'A'"/>
          {{ item.text }}
        </a>
      </li>
    </ul>
    <div class="button_wrapper">
      <UiButton>Оставить заявку</UiButton>
    </div>
    <div class="pale">© Загдом, 2024</div>
    <a class="pale" href="#">Политика конфиденциальности</a>
    <a class="pale" href="#">Пользовательское соглашение</a>
  </footer>
</template>

<style lang="scss" scoped>
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
  gap: 32px;
}

.flex_down {
  list-style: none;
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.links, .addresses {
  padding-top: 12px;
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
