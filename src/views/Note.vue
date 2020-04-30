<template>
  <div>
    <h1>Редактировать заметку</h1>
    <todoList :allTodo="getTodoLists" />


  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "note",
  /* data() {
    return {
      showModal: false
    };
  }, */
  components: {
    TodoList
  },
  /* methods: {
    changeTodolist(ev) {
      if (ev === "yes") {
        this.$store.dispatch("del", this.allTodo.id);
        this.showModal = false;
      } else if (ev === "no") {
        this.showModal = false;
      }
    }
  }, */
  computed: {
    getTodoLists() {
      return this.$store.getters["getTodoLists"][0];
    }
  }
};
</script>

<style lang="scss" scoped>
 @import "../assets/styles/pages/note.scss";
</style>
