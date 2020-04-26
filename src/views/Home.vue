<template>
  <div class="home">
    <font-awesome-icon icon="plus-circle" size="5x" />
    <TodoList v-for="item in 6" :key="item.message" msg="Добавьте вашу заметку" />
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
