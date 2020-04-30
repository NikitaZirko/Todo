<template>
  <div>
    <div class="todolist" v-if="allTodo || 0">
      <input
        type="text"
        class="todolist__title"
        :value="allTodo.title"
        disabled="disabled"
      />
      <div
        class="todo"
        v-for="(i, idx) in allTodo.todo.slice(0, 2)"
        :key="i.id"
      >
        <label class="checkbox-label">
          <input
            class="checkbox-input"
            type="checkbox"
            disabled="disabled"
            :checked="allTodo.todo[idx].checked"
          />
          <span class="checkmark"></span>
        </label>
        <input
          type="text"
          :value="allTodo.todo[idx].description"
          disabled="disabled"
        />
      </div>

      <div class="todolist__buttons">
        <router-link tag="button" class="edit-todolist" to="/note">
          <font-awesome-icon class="ic-edit" icon="edit" size="2x" />
        </router-link>
        <router-link tag="button" class="del-todolist" to="#">
          <font-awesome-icon
            @click.prevent="modalOpen = true"
            class="ic-del"
            icon="times"
            size="2x"
          />
        </router-link>
      </div>
    </div>
    <div class="todolist empty" v-else></div>

    <app-modal v-show="modalOpen" @click.self.native="modalOpen = false">
        <template v-slot:title>
          ВЫ ДЕСТВИТЕЛЬНО ХОТИТЕ <span class="col-red">УДАЛИТЬ</span> ЗАМЕТКУ?
        </template>
        <template v-slot:buttons>
          <button class="button-agree">Да</button>
          <button class="button-disagree">Нет</button><!-- @click.self.native="modalOpen = false" -->
        </template>
    </app-modal>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      modalOpen: false
    };
  },
  props: {
    allTodo: Object
  },
  methods: {
    delTodolist() {
      this.modalOpen = true;
      /* this.$store.dispatch("del", this.allTodo.id); */
    }
  },
  computed: {
    changeTodoLists() {
      return console.log("sdsds");
      /* return this.$store.getters["getTodoLists"]; */
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/todolist.scss";
@import "../assets/styles/components/modal.scss";
</style>
