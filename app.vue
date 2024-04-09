<template>
  <div class="root">
    <CompHeader />
    <CompMain />
    <CompFooter />
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
@import "@csstools/normalize.css";

:root {
  --color-primary: #029f59;
  --color-secondary: #254741;
  --color-hover: #2b2f34;
  
  --color-bone: #F5F7F3;

  --color-disabled-dark: #9d9c9c;
  --color-disabled-bright: #d7d7d7;

  --font-text: "Open Sans", sans-serif;
  --font-title: Montserrat, sans-serif;

  font-family: var(--font-text);
}

* {
  margin: 0;
  padding: 0;
}

html,
body,
#__nuxt,
.root {
  height: 100%;
}

.root {
  display: grid;
  grid-template-rows: min-content auto min-content;
  max-width: 1920px;
  margin: auto;
}
</style>
