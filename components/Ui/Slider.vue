<script lang="ts" setup>
import { slides } from "~/constants/mock_slider";
</script>

<template>
  <div class="s_wrapper">
    <Swiper>
      <SwiperSlide v-for="slide in slides" :key="slide">
        <figure>
          <picture>
            <source :srcset="`${slide.x2} 2x, ${slide.x1}`" />
            <img :src="slide.x1" :alt="slide.title" />
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
img {
  object-fit: cover;
  max-width: 100%;
  min-height: 450px;
  // transform: scaleX(-1);

  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.15) 0%,
    rgba(0, 0, 0, 1) 100%
  );
}

figure {
  max-width: max-content;
  position: relative;
  max-width: 1264px;
  max-height: 450px;
  border-radius: 30px;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  background-size: cover;
}

figcaption {
  color: white;

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
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 759px) {
    padding: 0 30px 40px;
  }
}

.swiper {
  max-height: 450px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;

  max-width: min(1264px, calc(100vw - 2 * var(--main-padding-inline)));
}
</style>
