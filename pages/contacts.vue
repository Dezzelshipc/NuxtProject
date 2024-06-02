<template>
  <section>
    <div class="route">
      <UiPathNav :names="['Главная', 'Контакты']" />
    </div>
    <div class="grid">
      <div class="left">
        <div class="header">
          <h1>Контакты</h1>
        </div>
        <div class="contacts">
          <UiContacts :styles="{ gap: '40px' }" boldPhone />
        </div>
      </div>
      <div class="map">
        <yandex-map
          style="width: min(500px, var(--width-dynamic)); height: 500px"
          :settings="{
            location: {
              center: [131.953129, 43.153141],
              zoom: 11,
            },
          }"
        >
          <yandex-map-default-scheme-layer />
          <yandex-map-default-features-layer />
          <!-- <yandex-map-default-marker :settings="marker" /> -->
          <yandex-map-marker :settings="marker" :position="marker.position">
            <LocationMark/>
          </yandex-map-marker>
          <YandexMapControls :settings="{ position: 'left' }">
            <YandexMapZoomControl />
          </YandexMapControls>
          <YandexMapControls :settings="{ position: 'top left' }">
            <YandexMapOpenMapsButton />
          </YandexMapControls>
        </yandex-map>
      </div>
    </div>
  </section>
</template>

<script setup>
import LocationMark from "assets/icons/LocationMark.svg?skipsvgo";

import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapMarker,
  YandexMapControls,
  YandexMapZoomControl,
  YandexMapOpenMapsButton,
} from "vue-yandex-maps";

const marker = {
  coordinates: [131.953129, 43.153141],
  title: "Title",
  position: "translate(-46%, -88%)"
};
</script>

<style lang="scss" scoped>
section {
  padding: var(--main-padding);
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 30px;
}

section > div {
  max-width: 1920px;
  width: 100%;
}

.contacts {
  font-size: 20px;
}

.header {
  margin-bottom: 32px;
}

@media screen and (min-width: 900px) {
  .grid {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1fr;
  }

  .left {
    grid-column: 2;
    margin-right: 20px;
  }

  .map {
    grid-column: 3;
  }
}

@media screen and (max-width: 899px) {
  .grid {
    display: flex;
    flex-flow: column;
    gap: 32px;
  }

  .left {
    // grid-column: 2;
  }

  .map {
    // grid-column: 3;
  }
}
</style>
