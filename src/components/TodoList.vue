<template>
  <div class="todolist">
    <input type="text" class="todolist__title" :value="editTodo.title" />
    <button @click="addTodo" class="add-todolist" to="#">
      <font-awesome-icon class="ic-plus" icon="plus-circle" size="2x" />
    </button>
    <div class="todo" v-for="(i, idx) in editTodo.todo" :key="i.id">
      <label class="checkbox-label">
        <input
          class="checkbox-input"
          type="checkbox"
          :checked="editTodo.todo[idx].checked"
        />
        <span class="checkmark"></span>
      </label>

      <label class="text-label">
        <font-awesome-icon
          @click="delTodo"
          class="ic-inputDel"
          icon="times"
          size="2x"
        />
        <input type="text" :value="editTodo.todo[idx].description" />
      </label>
    </div>

    <button
      @click="clickTodo({ name: 'del', id: editTodo.id })"
      class="del-todolist"
    >
      <font-awesome-icon class="ic-del" icon="times" size="2x" />
    </button>

    <div class="footer__buttons">
      <button
        @click="clickTodo({ name: 'save', id: editTodo.id })"
        class="save-todolist"
      >
        <font-awesome-icon class="ic-check" icon="check" size="2x" />
      </button>
      <button
        @click="clickTodo({ name: 'cancel', id: editTodo.id })"
        class="cancel-todolist"
      >
        <font-awesome-icon class="ic-redo" icon="redo" size="2x" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  // v model добавиииииииииииииииииииииииииииииииТЬ
  /* data() {
    return {
      id: null,
      title: null,
      todo: [{
        checked: null,
        description: null,
      }]
    };
  }, */
  props: {
    editTodo: Object
  },
  methods: {
    newTodolist() {
      const paramTodo = {
        id: this.id,
        title: this.title.trim(),
        todo: [{
          checked: this.checked,
          description: this.description.trim()
        }]
      }
    },
    clickTodo(ev) {
      this.$emit("clickTodo", ev);
    },
    addTodo() {
      console.log("create input");
    },
    delTodo() {
      console.log("delete input");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/todolist.scss";
</style>
