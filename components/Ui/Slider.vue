<script lang="ts" setup>

import { slides } from "~/constants/mock_slider";
</script>

<template>
  <div class="wrapper">
    <Swiper>
      <SwiperSlide v-for="slide in slides" :key="slide">
        <figure>
          <picture>
            <source
              :srcset="`${slide.landscape.x2} 2x, ${slide.landscape.x1}`"
              
            />

            <!-- <source
              :srcset="`${slide.portrait.x2} 2x, ${slide.portrait.x1}`"
              media="(max-width: 760px)"
            /> -->
            <img :src="slide.landscape.x1" :alt="slide.title" />
          </picture>
          <figcaption>
            <h1>{{ slide.title }}</h1>
            <p>{{ slide.text }}</p>
          </figcaption>
        </figure>
      </SwiperSlide>
      <UiSliderControls />
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: min(1264px, calc(100vw - 2*var(--main-padding-inline)));
}

img {
  object-fit: cover;
  width: 100%;
  height: 450px;
  border-radius: 30px;
}

figure {
  // max-width: max-content;
  position: relative;
}

figcaption {
  color: white;
  // width: 100%;

  padding: 0 144px 113px;
  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  gap: 12px;
  flex-flow: column;

  p {
    font-size: 16px;
    line-height: 21px;
  }

  p,
  h1 {
    max-width: 460px;
  }

  h1 {
    @media screen and (max-width: 759px) {
      font-size: 1.7em;
    }
  }

  @media screen and (max-width: 759px) {
    padding: 0 30px 40px;
  }
}

.swiper {
  // max-width: 1264px;
  max-height: 450px;
  // width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}
</style>
