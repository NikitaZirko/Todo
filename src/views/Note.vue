<template>
  <div class="note">
    <h1 class="note__title">Редактировать заметку</h1>
    <todoList :editTodo="getTodoLists" @clickTodo="clickTodo($event)" />

    <app-modal
      v-show="showModal"
      @clickModal="clickModal($event)"
      @click.self.native="showModal = false"
    >
      <template v-slot:title>
        ВЫ ДЕСТВИТЕЛЬНО ХОТИТЕ <span class="col-red">УДАЛИТЬ</span> ЗАМЕТКУ?
      </template>
    </app-modal>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "note",
  data() {
    return {
      showModal: false,
      idTodoList: null
    };
  },
  components: {
    TodoList
  },
  methods: {
    clickModal(ev) {
      if (ev.name === "yes") {
        this.$store.dispatch("del", this.idTodoList);
        this.showModal = false;
      } else if (ev.name === "no") {
        this.showModal = false;
      }
    },
    clickTodo(ev) {
      this.idTodoList = ev.id;
      if (ev.name === "del") {
        this.showModal = true;
      } else if (ev.name === "save") {
        console.log("пупу");
        // дополнить передачу id в vuex
      }
    }
  },
  computed: {
    getTodoLists() {
      let last = this.$store.getters["getTodoLists"].length - 1
      return this.$store.getters["getTodoLists"][last];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/pages/note.scss";
</style>
