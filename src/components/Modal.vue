<template>
  <transition name="fade">
    <div class="modal">
      <div class="modal__block">
        <h1 class="modal__title">
          <slot name="title"></slot>
        </h1>
        <div class="modal__buttons">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "app-modal"
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/modal.scss";
</style>
