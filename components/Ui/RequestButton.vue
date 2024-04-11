<template>
  <div>
    <DialogRoot>
      <DialogTrigger :class="`button ${bclass}`">
        Оставить заявку
      </DialogTrigger>
      <DialogPortal>
        <Transition name="fade">
          <DialogOverlay class="DialogOverlay" />
        </Transition>
        <Transition name="fade">
          <DialogContent class="DialogContent">
            <div class="DialogHeader">
              <DialogTitle class="DialogTitle"> Оставить заявку </DialogTitle>
              <DialogClose class="IconButton" aria-label="Close">
                <Icon icon="lucide:x" />
              </DialogClose>
            </div>
            PLACEHOLDER
            <div
              :style="{
                display: 'flex',
                marginTop: 25,
                justifyContent: 'flex-end',
              }"
            >
              <DialogClose as-child>
                <button class="button">Оставить заявку</button>
              </DialogClose>
            </div>
          </DialogContent>
        </Transition>
      </DialogPortal>
    </DialogRoot>
  </div>
</template>

<script>
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "radix-vue";
import { Icon } from "@iconify/vue";

export default {
  data() {
    return {};
  },
  components: {
    DialogClose,
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
    Icon,
  },
  props: {
    bclass: String,
  },
};
</script>

<style scoped>
/* reset */
@import url(~/assets/styles/button.scss);

.DialogOverlay {
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;
  z-index: 10000;
}

.DialogContent {
  background-color: var(--color-bone);
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  z-index: 10001;
}
.DialogContent:focus {
  outline: none;
}

.DialogTitle {
  font-family: var(--font-title);
  font-weight: 700;
  color: #2b2f34;
  font-size: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 300ms;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.DialogHeader {
  display: grid;
  grid-template-columns: 1fr 50px;
}

.IconButton {
  justify-self: center;
  align-self: center;

  justify-content: center;
  align-content: center;
  display: grid;

  width: 32px;
  height: 32px;
  border-radius: 6px;
  border: 0;
  color: var(--color-primary);
  font-size: 20px;
  background-color: color-mix(in srgb, currentColor 20%, transparent)
}
</style>
