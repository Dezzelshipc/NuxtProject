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

  --main-padding-inline: 88px;
  --main-padding: 24px var(--main-padding-inline);
  @media screen and (max-width: 1100px) {
    --main-padding-inline: 40px;
  }

  @media screen and (max-width: 759px) {
    --main-padding-inline: 16px;
  }
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
}

h1, h2, h3 {
  font-family: var(--font-title);
}
</style>
