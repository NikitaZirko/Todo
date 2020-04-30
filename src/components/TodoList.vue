<template>
  <div class="todolist">
    <input
      type="text"
      class="todolist__title"
      :value="todo.title"
      disabled="disabled"
    />
    <div
      class="todo"
      v-for="(i, idx) in todo.todo.slice(0, 2)"
      :key="i.id"
    >
      <label class="checkbox-label">
        <input
          class="checkbox-input"
          type="checkbox"
          disabled="disabled"
          :checked="todo.todo[idx].checked"
        />
        <span class="checkmark"></span>
      </label>
      <input
        type="text"
        :value="todo.todo[idx].description"
        disabled="disabled"
      />
    </div>

    <div class="todolist__buttons">
      <router-link @click.native.prevent="clickTodo({name:'edit', id:todo.id})" tag="button" class="edit-todolist" to="/note">
        <font-awesome-icon class="ic-edit" icon="edit" size="2x" />
      </router-link>
      <router-link @click.native.prevent="clickTodo({name:'del', id:todo.id})" tag="button" class="del-todolist" to="#">
        <font-awesome-icon
          class="ic-del"
          icon="times"
          size="2x"
        />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "todoList",
  props: {
    todo: Object
  },
  methods: {
    /* clickTodo(ev) {
      this.$emit("clickTodo", ev);
    } */
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/todolist.scss";
</style>
