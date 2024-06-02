<script lang="ts" setup>
import LogoBright from "assets/img/LogoBright.svg?skipsvgo";
import { mainNav, contactsNav } from "~/constants/constants";
</script>

<template>
  <footer>
    <div class="grid_wrapper">
      <NuxtLink class="logo" to="/"><LogoBright /></NuxtLink>
      <section class="upper_padding">
        <ul class="flex_down">
          <li v-for="item in mainNav" :key="item">
            <NuxtLink :to="item.url">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </section>
      <section class="upper_padding">
        <UiContacts />
      </section>
      <div class="button_wrapper">
        <UiRequestButton />
      </div>
      <div class="pale c">© Загдом, 2024</div>
      <NuxtLink class="pale" href="#">Политика конфиденциальности</NuxtLink>
      <NuxtLink class="pale" href="#">Пользовательское соглашение</NuxtLink>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: var(--color-secondary);
  padding: var(--main-padding);

  color: white;
  font-size: 16px;
  font-weight: 100;
}

footer > div {
  max-width: 1920px;
  margin: 0 auto;
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

.logo {
  width: min-content;
  height: min-content;
}

.upper_padding {
  padding-top: 12px;
}

.button_wrapper {
  justify-self: end;
}

.pale {
  opacity: 0.6;
  font-size: 14px;
}

@media screen and (max-width: 1000px) and (min-width: 550px) {
  .grid_wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .button_wrapper {
    grid-area: 1 / 2;
  }

  .addresses {
    justify-self: end;
  }
  .pale:nth-last-of-type(1) {
    justify-self: end;
  }

  .pale.c {
    grid-area: 4 / 2;
  }
}

@media screen and (max-width: 550px) {
  .grid_wrapper {
    grid-template-columns: 1fr;
  }

  .button_wrapper {
    justify-self: start;
  }

  .pale.c {
    grid-area: 7 / 1;
  }
}
</style>
