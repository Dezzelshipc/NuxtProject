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
  <button @click="swiper.slidePrev()" class="prev button pad0" :disabled="swiper.activeIndex == 0">
    <SvgoChevronLeft />
  </button>
  <button @click="swiper.slideNext()" class="next button pad0" :disabled="swiper.activeIndex == swiper.slides.length - 1">
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
    />
  </div>
</template>

<style lang="scss" scoped>
.prev,
.next,
.dots {
  position: absolute;
  z-index: 10;
}

.prev,
.next {
  width: 48px;
  height: 48px;
  font-size: 24px;

  @media screen and (max-width: 759px) {
    display: none;
  }
}

.prev {
  left: 16px;
}

.next {
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
