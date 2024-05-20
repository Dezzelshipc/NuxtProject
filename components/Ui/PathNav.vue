<template>
  <div class="crums">
    <span v-for="(path, i) in getPaths()" :key="path">
      <NuxtLink v-if="i < getLength()" :to="path">{{ names[i] }}</NuxtLink>
      <span v-if="i < getLength()"> / {{ names.at(-1) }}</span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  names: Array,
});
const route = useRoute();

function getPaths() {
  const path = route.path.split("/");

  const cumulativeSum = (
    (sum) => (value) =>
      (sum += value + "/")
  )("");
  return path.map(cumulativeSum);
}

function getLength() {
  return route.path.split("/").length - 1;
}
</script>

<style scoped lang="scss">
.crums {
  width: fit-content;

  color: #969595;
  align-self: flex-start;

  font-size: 20px;
}

.crums a {
  text-decoration: none;
  color: var(--color-primary);

  &:hover {
    text-decoration: underline;
  }
}
</style>
