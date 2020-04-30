<template>
  <div>
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
      <template v-for="(i, idx) in getTodoListsLength">
        <todoList :allTodo="getTodoLists[idx]" :i="i" :key="i.id" @clickTodo="clickTodo($event)" />
      </template>
    </div>
    <app-modal v-show="showModal" @clickModal="clickModal($event)" @click.self.native="showModal = false">
      <template v-slot:title>
        ВЫ ДЕСТВИТЕЛЬНО ХОТИТЕ <span class="col-red">УДАЛИТЬ</span> ЗАМЕТКУ?
      </template>
    </app-modal>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";

export default {
  name: "home",
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
      if (ev.name === "del") {
        this.showModal = true;
      } else if (ev.name === "edit") {
        console.log("пупу")
        // дополнить передачу id в vuex
      }
      this.idTodoList = ev.id;
    },
    clickModal(ev) {
      if (ev === "yes") {
        this.$store.dispatch("del", this.idTodoList);
        this.showModal = false;
      } else if (ev === "no") {
        this.showModal = false;
      }
    }
  },
  computed: {
    getTodoLists() {
      return this.$store.getters["getTodoLists"];
    },
    getTodoListsLength() {
      // add 5 sceleton-blocks if > todolists
      if (this.$store.getters["getTodoLists"].length < 5) {
        return 5;
      } else {
        return this.$store.getters["getTodoLists"].length;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/pages/home.scss";
</style>
