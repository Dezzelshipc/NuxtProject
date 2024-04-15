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

            <FloatLabel>
              <InputText id="name" v-model="name" class="input-text" />
              <label for="name">Имя</label>
            </FloatLabel>

            <FloatLabel>
              <InputText id="tel" v-model="tel" class="input-text" />
              <label for="tel">Телефон</label>
            </FloatLabel>

            <FloatLabel class="message">
              <TextArea id="message" v-model="message" class="input-text" autoResize />
              <label for="message">Сообщение</label>
            </FloatLabel>

            <DialogClose as-child>
              <button class="button">Оставить заявку</button>
            </DialogClose>

            <p class="info_text">
              Нажимая на кнопку «Отправить», вы принимаете
              <a href="#">пользовательское соглашение</a> и
              <a href="#">политику конфиденциальности</a>.
            </p>
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
import InputText from "primevue/inputtext";
import TextArea from "primevue/textarea";
import FloatLabel from "primevue/floatlabel";

import { Icon } from "@iconify/vue";

export default {
  data() {
    return {
      name: "",
      tel: "",
      message: "",
    };
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
    InputText,
    TextArea,
    FloatLabel,
  },
  props: {
    bclass: String,
  },
};
</script>

<style lang="scss" scoped>
@import url(~/assets/styles/button.scss);
@import url(~/assets/styles/input.scss);

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

  display: flex;
  flex-flow: column;
  gap: 26px;
  align-items: center;
  justify-content: center;
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
  gap: 20px;
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
  background-color: color-mix(in srgb, currentColor 20%, transparent);
}

.p-float-label {
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    margin-top: -0.5em;
  }
}

.info_text {
  max-width: 350px;
  text-align: center;

  a {
    text-decoration: none;
    color: var(--color-primary);
  }
}

.message {

  input {
    min-height: 100px;
    word-wrap: break-word;
    word-break: break-all;
  }
}
</style>
