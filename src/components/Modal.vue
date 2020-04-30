<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__block">
        <h1 class="modal__title">
          <slot name="title"></slot>
        </h1>
        <div class="modal__buttons">
          <button @click="modalConfirm('yes')" class="button-agree">Да</button>
          <button @click="modalConfirm('no')" class="button-disagree">Нет</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "app-modal",
  methods: {
    modalConfirm(ev) {
      this.$emit("modalConfirm", ev);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/modal.scss";
</style>
