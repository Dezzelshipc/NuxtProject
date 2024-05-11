<template>
  <div class="card">
    <div class="pic">
      <picture>
        <source :srcset="`${image.x2} 2x, ${image.x1}`" />
        <img :src="image.x1" :alt="title" class="image" />
      </picture>
    </div>
    <div class="text">
      <p>
        {{ date.toLocaleDateString("ru", { day:'numeric', month: "short" }) }}
        {{ date.getFullYear() }}
      </p>
      <h4 v-html="title" />
      <p class="text2" v-html="truncate(description, 10, { byWords: true })" />
    </div>
  </div>
</template>

<script>
import truncate from 'truncate-html'

export default {
  data() {
    return {
      truncate,
    }
  },
  props: {
    image: {
      x1: String,
      x2: String,
    },
    date: Date,
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 500px;
  min-width: 300px;

  border-radius: 20px;
  overflow: hidden;

  background-color: var(--color-bone);
}

.text {
  display: flex;
  flex-flow: column;
  gap: 16px;

  padding: 16px;
}

.text2 {
  color: #666;
}

h4 {
  font-weight: 500;
  font-size: 20px;
}

p {
  font-weight: 400;
  font-size: 16px;
}

img {
  max-height: 200px;
  height: 200px;
  min-width: 300px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
