<template>
  <div class="project">
    <div class="pic">
      <picture>
        <source :srcset="`${image.x2} 2x, ${image.x1}`" />
        <img :src="image.x1" :alt="title" class="image" />
      </picture>
    </div>
    <div class="text">
      <h4 v-html="title" />
      <p v-html="description" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      x1: String,
      x2: String,
    },
    title: String,
    description: String,
  },
};
</script>

<style lang="scss" scoped>
.project {
  min-width: 300px;
  min-height: 300px;
  max-height: 350px;

  border-radius: 20px;
  background-color: white;

  display: grid;
  grid-template: 1fr / repeat(2, 1fr);
  align-items: center;
  justify-content: center;

  overflow: hidden;
}

.project img {
  position: absolute;
  object-fit: cover;

  width: 100%;
  height: 100%;
}

.pic {
  width: 100%;
  height: 100%;
  position: relative;
}


.text {
  grid-row: 1;
  display: flex;
  flex-flow: column;
  gap: 16px;

  padding: 32px;
}

@media screen and (max-width: 900px) {
  .project {
    grid-template: 1fr 230px / 1fr;
    max-height: 100%;
    
    .pic {
      height: 200px;
    }
  }

  .text {
    grid-area: 2 / 1;
  }
}

.project p {
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
</style>
