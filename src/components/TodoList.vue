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
        <router-link tag="button" class="del-todolist" to="#" @click.native.prevent="showModal = true">
          <font-awesome-icon
            class="ic-del"
            icon="times"
            size="2x"
          />
        </router-link>
      </div>
    </div>
    <div class="todolist empty" v-else></div>

    <app-modal v-show="showModal" @modalConfirm="changeTodolist($event)" @click.self.native="showModal = false">
      <template v-slot:title>
        ВЫ ДЕСТВИТЕЛЬНО ХОТИТЕ <span class="col-red">УДАЛИТЬ</span> ЗАМЕТКУ?
      </template>
    </app-modal>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  data() {
    return {
      showModal: false
    };
  },
  props: {
    allTodo: Object
  },
  methods: {
    changeTodolist(ev) {
      if (ev === "yes") {
        this.$store.dispatch("del", this.allTodo.id);
        this.showModal = false;
      } else if (ev === "no") {
        this.showModal = false;
      }
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
