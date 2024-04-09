<script lang="ts">
import Sidebar from "primevue/sidebar";
import { mainNav, contactsNav } from "~/constants/constants";

export default {
  data() {
    return {
      isSidebarVisible: false,
      mainNav,
      contactsNav,
    };
  },
};
</script>

<template>
  <div>
    <Sidebar
      v-model:visible="isSidebarVisible"
      position="right"
      @wheel.prevent
      @touchmove.prevent
      @scroll.prevent
    >
    <template #header>
      <UiRequestButton bclass="secondary" />
    </template>

      <ul class="links flex_down">
        <li v-for="item in mainNav" :key="item">
          <a :href="item.url">
            {{ item.label }}
          </a>
        </li>
      </ul>
      <ul class="addresses flex_down">
        <li v-for="item in contactsNav" :key="item">
          <a :href="item.url">
            <SvgoPhone v-if="item.id == 'P'" />
            <SvgoEmail v-else-if="item.id == 'M'" />
            <SvgoPoint v-else-if="item.id == 'A'" />
            {{ item.text }}
          </a>
        </li>
      </ul>
    </Sidebar>
    <Button class="button" @click="isSidebarVisible = true">
      <SvgoLines class="lines_icon" />
    </Button>
  </div>
</template>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: inherit;
}

.flex_down {
  list-style: none;
  display: flex;
  gap: 24px;
  flex-direction: column;
}

.links {
  font-size: 18px;
}

.lines_icon {
  width: 24px;
  height: 14px;
}

.button {
  padding: 16px;
}
@import url(~/assets/styles/button.scss);
</style>

<!-- For sidebar -->
<style lang="scss">
.p-sidebar {
  background-color: var(--color-primary);
  height: -webkit-fill-available;
  display: flex;
  flex-flow: column;
  width: 300px;
  color: white;

  transform: translate3d(0px, 0px, 0px);
  position: relative;
  transition: transform 0.3s;
}

.p-sidebar-header {
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 50px;
  justify-items: left;
  align-items: center;
}

.p-sidebar-close {
  justify-self: center;
  display: grid;

  font-size: 16px;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 0;
  color: white;
  background-color: rgba(#fff, 0.2);
}

.p-sidebar-close-icon {
  justify-self: center;
  align-self: center;
}

.p-sidebar-content {
  flex-grow: 1;
  padding: 0 21px 54px 21px;

  display: flex;
  flex-flow: column;
  justify-content: space-between;
}

.p-sidebar-enter-from,
.p-sidebar-leave-to {
  transform: translateX(300px);
}

.p-sidebar-enter-active,
.p-sidebar-leave-active {
  transition: transform 150ms;
}

.p-component-overlay-enter {
  animation: p-component-overlay-enter-animation 150ms forwards;
}

.p-component-overlay-leave {
  animation: p-component-overlay-leave-animation 150ms forwards;
}

.p-component-overlay {
  transition-duration: 0.2s;
}

@keyframes p-component-overlay-enter-animation {
  0% {
    background-color: transparent;
  }

  100% {
    background-color: rgba(#000, 0.4);
  }
}

@keyframes p-component-overlay-leave-animation {
  100% {
    background-color: transparent;
  }

  0% {
    background-color: rgba(#000, 0.4);
  }
}
</style>
