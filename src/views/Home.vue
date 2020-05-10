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
      <router-link class="add-todolist" to="/note">
        <font-awesome-icon
          class="ic-add"
          icon="plus-circle"
          size="3x"
          title="Добавить заметку"
        />
      </router-link>
      <template v-for="(i, idx) in getTodoListsLength">
        <todoLists
          :allTodo="getTodoLists[idx]"
          :i="i"
          :key="i.id"
          @clickTodo="clickTodo($event)"
          :style="randomColors()"
        />
      </template>
    </div>
    <app-modal
      v-show="showModal"
      @clickModal="clickModal($event)"
      @click.self.native="showModal = false"
    >
      <template v-slot:title>
        ВЫ ДЕСТВИТЕЛЬНО ХОТИТЕ <span class="col-red">УДАЛИТЬ</span> ЗАМЕТКУ?
      </template>
    </app-modal>
  </div>
</template>

<script>
import TodoLists from "@/components/TodoLists.vue";

export default {
  name: "home",
  data() {
    return {
      showModal: false,
      idTodoList: null,
      colors: [
        "#faebd7",
        "#defad7",
        "#f1d7fa",
        "#fff8c5",
        "#dfe3ff"
      ]
    };
  },
  components: {
    TodoLists
  },
  methods: {
    clickTodo(ev) {
      // click on todolist
      this.idTodoList = ev.id;
      if (ev.name === "del") {
        this.showModal = true;
      } else if (ev.name === "edit") {
        this.$router.push({ path: "/note", query: { id: this.idTodoList } });
      }
    },
    clickModal(ev) {
      // click on modal
      if (ev === "yes") {
        this.$store.dispatch("removeTodoList", this.idTodoList);
        this.showModal = false;
      } else if (ev === "no") {
        this.showModal = false;
      }
    },
    oldColor(col = null) {
      let prev = col;
      return prev
    },
    randomColors() {
      let i = Math.floor(Math.random() * this.colors.length);
      let checkRepeat = () => {
        if (this.oldColor === i) {
          i = Math.floor(Math.random() * this.colors.length);
          checkRepeat();
        } else {
          this.oldColor = i;
        }
      };
      checkRepeat();
      return {
        background: this.colors[i],
        marginBottom: "20px"
      }
    }
  },
  computed: {
    getTodoLists() {
      return this.$store.getters["getTodoLists"];
    },
    getTodoListsLength() {
      // if todolists > 5 add sceleton-blocks
      if (this.$store.getters["getTodoLists"].length < 5) {
        return 5;
        // if todolists > 5 return Todolist length
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
