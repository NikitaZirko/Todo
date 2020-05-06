<template>
  <div class="todolist">
    <input type="text" class="todolist__title" v-model="title" placeholder="введите название заметки"/>

    <button @click="addTodo" class="add-todo" to="#" title="Добавить пункт">
      <font-awesome-icon class="ic-plus" icon="plus-circle" size="2x" />
    </button>

    <button
      title="Удалить заметку"
      @click="clickTodo({ name: 'del', idTitleTodo: newTodolist })"
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
          title="Удалить пункт"
          @click="delTodo(idx)"
          class="ic-inputDel"
          icon="times"
          size="2x"
        />
        <input
          type="text"
          ref="focus"
          v-model.trim="todo[idx].description"
          @keyup.enter="addTodo"
          @keyup.delete="delTodo(idx)"
          placeholder="введите текст"
        />
      </label>
    </div>

    <div class="footer__buttons">
      <button title="Сохранить измененния"
        @click="clickTodo({ name: 'save', idTitleTodo: newTodolist })"
        class="save-todolist"
      >
        <font-awesome-icon icon="check" size="2x" />
      </button>
      <button title="Отменить измененния"
        @click="clickTodo({ name: 'cancel', idTitleTodo: newTodolist })"
        class="cancel-todolist"
      >
        <font-awesome-icon icon="redo" size="2x" />
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
      title: "",
      todo: [
        {
          checked: false,
          description: ""
        }
      ]
    };
  },
  created() {
    // check - create todolist or edit todolist
    if (this.$route.query.id) {
      [this.id, this.title, this.todo] = [this.getEditTodoList.id, this.getEditTodoList.title, this.getEditTodoList.todo]
    } else {
      this.id = this.getNewTodolistId;
    }
  },
  methods: {
    newTodolist() {
      // data for send in state
      return {
        id: this.id,
        title: this.title,
        todo: this.todo
      };
    },
    clickTodo(ev) {
      // click on todolist any button
      if (this.$refs.focus[0].value === "") {
        this.delTodo(0);
      }
      this.$emit("clickTodo", ev);
    },
    addTodo() {
      // add input
      if (this.$refs.focus[0].value === "") {
        this.$refs.focus[0].focus();
        return;
      }
      this.todo.unshift({
        checked: false,
        description: ""
      });
      this.$refs.focus[0].focus();
    },
    delTodo(idInput) {
      // delete input
      this.$delete(this.todo, idInput);
    }
  },
  computed: {
    getNewTodolistId() {
      // get length all todolists for push new todolist
      return this.$store.getters["getTodoLists"].length + 1;
    },
    getEditTodoList() {
      // get edit todolist
      return this.$store.getters["getEditTodoList"](this.$route.query.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/todolist.scss";
</style>
