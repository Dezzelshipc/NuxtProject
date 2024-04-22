<script lang="ts" setup>
</script>

<template>
  <main>
    <div>
      <UiSlider/>
      <UiSiteDescriprtion/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: var(--main-padding);
  font-size: 1.5em;
  display: flex;
  flex-flow: column;
  align-items: center;
}

main > div {
  max-width: 1920px;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  gap: 120px;
}
</style>
