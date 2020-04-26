<template>
  <div class="todolist">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
 @import '../assets/styles/components/todolist.scss';
</style>
