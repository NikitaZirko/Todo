<template>
  <div class="todolist">
    <input type="text" class="todolist__title" v-model="title" />

    <button @click="addTodo" class="add-todo" to="#">
      <font-awesome-icon class="ic-plus" icon="plus-circle" size="2x" />
    </button>

    <button
      @click="clickTodo({ name: 'del', id: editTodo.id })"
      class="del-todolist"
    >
      <font-awesome-icon class="ic-del" icon="times" size="2x" />
    </button>

    <div class="todo" v-for="(i, idx) in todo" :key="i.id">
      <label class="checkbox-label">
        <input
          class="checkbox-input"
          type="checkbox"
          v-model="todo[idx].checked"
        />
        <span class="checkmark"></span>
      </label>

      <label class="text-label">
        <font-awesome-icon
          @click="delTodo(idx)"
          class="ic-inputDel"
          icon="times"
          size="2x"
        />
        <input type="text" ref="focus" v-model="todo[idx].description" @keyup.enter="addTodo" @change="valid(idx)"/>
      </label>
    </div>

    <div class="footer__buttons">
      <button
        @click="clickTodo({ name: 'save', json: newTodolist })"
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
  data() {
    return {
      id: null,
      title: "Название",
      todo: [
        {
          checked: false,
          description: "nuasdsadll"
        },
        {
          checked: false,
          description: "nuasdsadll"
        },
        {
          checked: false,
          description: "nuasdsadll"
        }
      ]
    };
  },
  created() {
    this.id = this.newTodolistId;
  },
  props: {
    editTodo: Object
  },
  methods: {
    newTodolist() {
      return {
        id: this.id,
        title: this.title.trim(),
        todo: this.todo
      }
    },
    clickTodo(ev) {
      this.$emit("clickTodo", ev);
    },
    addTodo() {
      if(this.$refs.focus[0].value === "") {
        this.$refs.focus[0].focus()
        return
      }
      this.todo.unshift({
        checked: false,
        description: ""
      })
      this.$refs.focus[0].focus()
    },
    valid(idInput) {
      if (event.target.value === "") {
        this.delTodo(idInput)
      }
    },
    delTodo(idInput) {
      this.$delete(this.todo, idInput)
    }
  },
  computed: {
    newTodolistId() {
      return (this.$store.getters["getTodoLists"].length + 1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/todolist.scss";
</style>
