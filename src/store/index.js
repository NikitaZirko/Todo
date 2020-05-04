import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoLists: [
      {
        id: 1,
        title: "Заметка 1",
        todo: [
          {
            checked: true,
            description: "Пункт 1"
          },
          {
            checked: false,
            description: "Пункт 2"
          },
          {
            checked: true,
            description: "Пункт 3"
          }
        ]
      },
      {
        id: 2,
        title: "Заметка 2",
        todo: [
          {
            checked: true,
            description: "Пункт 4"
          },
          {
            checked: false,
            description: "Пункт 5"
          },
          {
            checked: true,
            description: "Пункт 6"
          }
        ]
      }
    ]
  },
  mutations: {
    SETTODOLIST(state, todoLists) {
      state.todoLists = todoLists;
    },
    REMOVETODOLIST(state, idTodo) {
      let filtered = state.todoLists.filter(function(todo) {
        return todo.id == idTodo;
      });
      state.todoLists.splice((filtered), 1);
    },
    CREATETODOLIST(state, newTodo) {
      state.todoLists.push(newTodo);
    }
  },
  actions: {
    removeTodoList({ commit }, idTodo) {
      commit("REMOVETODOLIST", idTodo);
    },
    createTodoList({ commit }, newTodo) {
      commit("CREATETODOLIST", newTodo);
    }
  },
  getters: {
    getTodoLists: st => st.todoLists
  },
  modules: {}
});
