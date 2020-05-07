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
    CREATETODOLIST(state, newTodo) {
      let newData = {
        id: newTodo.id,
        title: newTodo.title,
        todo: newTodo.todo
      }
      // checking - edit or create new todolist
      let objEdit = state.todoLists.find(el => el.id == newTodo.id)

      if (typeof objEdit === 'undefined') {
        // data - new todolist
        state.todoLists.push(newTodo);
      } else {
        // data - edit todolist
        state.todoLists.splice((objEdit.id - 1), 1, newData)
      }
    },
    REMOVETODOLIST(state, idTodo) {
      let objDel = state.todoLists.find(el => el.id == idTodo)
      state.todoLists.splice(objDel.id - 1, 1);
    }
  },
  actions: {
    createTodoList({ commit }, newTodo) {
      commit("CREATETODOLIST", newTodo);
    },
    removeTodoList({ commit }, idTodo) {
      commit("REMOVETODOLIST", idTodo);
    }
  },
  getters: {
    getTodoLists: st => st.todoLists,
    getEditTodoList: (st) => (id) => {
      return st.todoLists.find(el => el.id == id)
    }
  },
  modules: {}
});
