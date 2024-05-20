<template>
  <PaginationRoot
    v-model:page="page"
    :total="100"
    :sibling-count="0"
    show-edges
  >
    <PaginationList v-slot="{ items }" class="PaginationList">
      <PaginationPrev :style="{ marginRight: 16 }" class="Button">
        <Icon icon="radix-icons:chevron-left" />
      </PaginationPrev>
      <div />
      <template v-for="(page, index) in items">
        <PaginationListItem
          v-if="page.type === 'page'"
          :key="index"
          class="Button"
          :value="page.value"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          :key="page.type"
          :index="index"
          class="PaginationEllipsis Button"
        >
          &#8230;
        </PaginationEllipsis>
      </template>
      <div />
      <PaginationNext :style="{ marginLeft: 16 }" class="Button">
        <Icon icon="radix-icons:chevron-right" />
      </PaginationNext>
    </PaginationList>
  </PaginationRoot>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import {
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
  PaginationRoot,
} from "radix-vue";

let page = ref(1);
</script>

<style lang="scss" scoped>
@import url(~/assets/styles/button.scss);

.PaginationList {
  display: flex;
  gap: 8px;
}

.Button {
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  border: none;
  outline: 1px solid var(--color-disabled-dark);

  font-family: var(--font-title);
  font-size: 16px;
  font-weight: 600;

  color: var(--color-secondary);
  background-color: white;

  &[data-selected="true"] {
    color: white;
    outline: none;
    background-color: var(--color-secondary);
  }

  &:disabled {
    color: var(--color-disabled-bright);
    outline-color: var(--color-disabled-bright);
    background-color: white;
  }
}
</style>
