<template>
  <ul class="addresses flex_down" :style="styles">
    <li v-for="item in contactsNav" :key="item">
      <NuxtLink :href="item.url" :class="item.id + ' ' + (boldPhone && item.id == 'P' ?'bold' : '')">
        <SvgoPhone v-if="item.id == 'P'" />
        <SvgoEmail v-else-if="item.id == 'M'" />
        <SvgoPoint v-else-if="item.id == 'A'" />
        {{ item.text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { contactsNav } from "~/constants/constants";

defineProps({
    styles: Object,
    boldPhone: Boolean,
})
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
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

.flex_down {
  list-style: none;
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.bold {
    font-weight: bold;
}  
</style>
