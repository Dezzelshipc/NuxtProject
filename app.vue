<template>
  <Header/>
  <MainBody/>
  <Footer/>
</template>


<script>
import Header from '~/components/Header.vue'
import MainBody from '~/components/MainBody.vue'
import Footer from '~/components/Footer.vue'
</script>


<style lang="scss">
:root {
  --font-text: 'Open Sans', sans-serif;
  --font-title: Montserrat, sans-serif;

  --padding-normal: 1.5rem;

  font-family: var(--font-text);
}

body {
  margin: 0px;
}

</style>
