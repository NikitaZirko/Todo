<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__block">
        <h1 class="modal__title">
          <slot name="title"></slot>
        </h1>
        <div class="modal__buttons">
          <button @click="clickModal('yes')" class="button-agree">Да</button>
          <button @click="clickModal('no')" class="button-disagree">Нет</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "app-modal",
  methods: {
    clickModal(ev) {
      this.$emit("clickModal", ev);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/modal.scss";
</style>
