<template>

  <div class="todolist" v-if="allTodo || 0">
    <input type="text" class="todolist__title" :value="allTodo.title" disabled="disabled">
    <div class="todo" v-for="(i, idx) in allTodo.todo.slice(0, 2)" :key="i.id">
      <label class="checkbox-label">
        <input class="checkbox-input" type="checkbox" disabled="disabled" :checked="allTodo.todo[idx].checked">
        <span class="checkmark"></span>
      </label>
      <input type="text" :value="allTodo.todo[idx].description" disabled="disabled">
    </div>

    <div class="todolist__buttons">
      <router-link tag="button" class="edit-todolist" to="/note">
        <font-awesome-icon class="ic-edit" icon="edit" size="2x" />
      </router-link>
      <router-link  tag="button" class="del-todolist" to="#">
        <font-awesome-icon @click.prevent="delTodolist" class="ic-del" icon="times" size="2x" />
      </router-link>
    </div>
  </div>
  <div class="todolist empty" v-else>
  </div>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    open() {

    }
  }
};
</script>

<style lang="scss" scoped>
 @import "../assets/styles/components/modal.scss";
</style>
