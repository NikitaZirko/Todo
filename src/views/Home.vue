<template>
  <div class="todolists">
    <h1 class="todolist__title">
      <font-awesome-icon
        class="ic-note"
        :icon="['fas', 'sticky-note']"
        size="1x"
      />
      <br />
      Мои заметки
    </h1>
    <p class="todolist__sup-title">Ваш персональный<br />помощник</p>
    <router-link tag="button" class="add-todolist" to="/note">
      <font-awesome-icon class="ic-add" icon="plus-circle" size="5x" />
    </router-link>
    <template v-for="(i, idx) in getTodoListsLength" >
      <TodoList :allTodo="getTodoLists[idx]" :i="i" :key="i.id"/>
    </template>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import TodoList from "@/components/Modal.vue";

export default {
  components: {
    TodoList
  },
  computed: {
    getTodoLists() {
      return this.$store.getters["getTodoLists"];
    },
    getTodoListsLength() {
      // adding 5 sceleton-blocks if there are no todolists
      if (this.$store.getters["getTodoLists"].length < 5) {
        return 5
      } else {
        return this.$store.getters["getTodoLists"].length
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/pages/home.scss";
</style>
