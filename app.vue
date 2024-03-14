<template>
  <CompHeader />
  <CompBody />
  <CompFooter />
</template>

<script>
import CompHeader from "~/components/CompHeader.vue";
import CompBody from "~/components/CompBody.vue";
import CompFooter from "~/components/CompFooter.vue";
</script>

<style lang="scss">
:root {
  --active-color-dark: #254741;
  --active-color-bright: #029f59;
  --disabled-color-dark: #9d9c9c;
  --disabled-color-bright: #d7d7d7;

  --font-text: "Open Sans", sans-serif;
  --font-title: Montserrat, sans-serif;

  --padding-normal: 1.5rem;

  font-family: var(--font-text);
}

* {
  margin: 0;
  padding: 0;
}
</style>
