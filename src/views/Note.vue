<template>
  <div class="note">
    <h1 class="note__title">Редактировать заметку</h1>

    <todoList @clickTodo="clickTodo($event)" />

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
    clickTodo(ev) {
      // click on todolist
      this.idTodoList = ev.json().id;
      if (ev.name === "del") {
        this.showModal = true;
      } else if (ev.name === "save") {
        this.$store.dispatch("createTodoList", ev.json());
        this.$router.push('/')
      }
    },
    clickModal(ev) {
      // click on modal
      if (ev === "yes") {
        //this.$store.dispatch("del", this.idTodoList);
        this.showModal = false;
        this.$router.push('/')
      } else if (ev === "no") {
        this.showModal = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/pages/note.scss";
</style>
