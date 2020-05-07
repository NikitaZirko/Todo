<template>
  <div class="note">
    <router-link tag="div" class="link-home" to="/">
      <font-awesome-icon
        class="ic-arrow-left"
        :icon="['fas', 'long-arrow-alt-left']"
        size="2x"
      />
      <h2 class="note__title">
        на главную
      </h2>
    </router-link>

    <todoList @clickTodo="clickTodo($event)" />

    <app-modal
      v-show="showModal"
      @clickModal="clickModal($event)"
      @click.self.native="showModal = false"
    >
      <template v-slot:title v-if="optModal == 'del'">
        ВЫ ДЕСТВИТЕЛЬНО ХОТИТЕ <span class="col-red">УДАЛИТЬ</span> ЗАМЕТКУ?
      </template>
      <template v-slot:title v-else>
        ВЫ ХОТИТЕ <span class="col-red">ОТМЕНИТЬ</span> ВНЕСЁННЫЕ ИЗМЕНЕННИЯ?
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
      optModal: null,
      idTodoList: null
    };
  },
  components: {
    TodoList
  },
  methods: {
    clickTodo(ev) {
      // click on todolist
      this.idTodoList = ev.idTitleTodo().id;
      if (ev.name === "save") {
        this.$store.dispatch("createTodoList", ev.idTitleTodo());
        this.$router.push("/");
      } else {
        this.optModal = ev.name;
        this.showModal = true;
      }
    },
    clickModal(ev) {
      // click on modal
      if (ev === "yes" && this.optModal === "del") {
        this.$store.dispatch("removeTodoList", this.idTodoList);
        this.showModal = false;
        this.$router.push("/");
      } else if (ev === "yes" && this.optModal === "cancel") {
        this.showModal = false;
        this.$router.go();
      } else {
        this.showModal = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/pages/note.scss";
</style>
