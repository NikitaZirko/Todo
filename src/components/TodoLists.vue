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
          :class="{through: allTodo.todo[idx].checked}"
        />
      </div>

      <div class="todolist__buttons">
        <button
          @click="$emit('clickTodo', { name: 'edit', id: allTodo.id })"
          class="edit-todolist"
          title="Редактировать"
        >
          <font-awesome-icon class="ic-edit" icon="edit" size="2x" />
        </button>
        <button
          @click="$emit('clickTodo', { name: 'del', id: allTodo.id })"
          class="del-todolist"
          title="Удалить заметку"
        >
          <font-awesome-icon class="ic-del" icon="times" size="2x" />
        </button>
      </div>
    </div>
    <div class="todolist empty" v-else></div>
  </div>
</template>

<script>
export default {
  name: "todoLists",
  props: {
    allTodo: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/components/todolists.scss";
</style>
