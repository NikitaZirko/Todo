<template>
  <div class="todolists">
    <h1 class="todolist__title">
      <font-awesome-icon class="ic-note" :icon="[ 'fas', 'sticky-note' ]" size="xl" />
      <br>Мои заметки
    </h1>
    <p class="todolist__sup-title">Ваш персональный<br>помощник</p>
    <button class="add-todolist">
      <font-awesome-icon class="ic-add" icon="plus-circle" size="5x" />
    </button>
    <TodoList v-for="item in 5" :key="item.id" msg="" />
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "Home",
  components: {
    TodoList
  },
  computed: {
    /* films() {
      return this.$store.getters["films/films"];
    } */
  }
};
</script>

<style lang="scss" scoped>
 @import '../assets/styles/pages/home.scss';
</style>
