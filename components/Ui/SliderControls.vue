<script lang="ts">
export default {
  data() {
    return {
      swiper: useSwiper(),
    };
  },
};
</script>

<template>
  <button @click="swiper.slidePrev()" class="prev-button button pad0">
    <SvgoChevronLeft />
  </button>
  <button @click="swiper.slideNext()" class="next-button button pad0">
    <SvgoChevronRight />
  </button>
  <div class="dots">
    <button
      class="dot"
      v-for="(slide, index) in swiper.slides"
      :key="index"
      @click="swiper.slideTo(index)"
      :title="`Открыть ${index + 1} слайд`"
      :disabled="swiper.activeIndex === index"
    >
      <!-- {{ index + 1 }} -->
    </button>
  </div>
</template>

<style lang="scss" scoped>
.prev-button,
.next-button,
.dots {
  position: absolute;
  z-index: 10;
}

.prev-button,
.next-button {
  width: 48px;
  height: 48px;
  font-size: 24px;

  @media screen and (max-width: 759px) {
    display: none;
  }
}

.prev-button {
  left: 16px;
}

.next-button {
  right: 16px;
}

.dots {
  bottom: 40px;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 759px) {
    display: none;
  }
}

.dot {
  width: 12px;
  height: 12px;
  
  border: 0;
  border-radius: 10px;

  &:disabled {
    background-color: var(--color-primary);
  }
}
@import url(~/assets/styles/button.scss);
</style>
