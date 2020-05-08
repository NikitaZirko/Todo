import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoLists: []
  },
  mutations: {
    CREATETODOLIST(state, newTodo) {
      let flag = true;
      // checking - edit or create new todolist
      state.todoLists.filter(function(el, i) {
        if (el.id === newTodo.id) {
          // data - edit todolist
          let newData = {
            id: newTodo.id,
            title: newTodo.title,
            todo: newTodo.todo
          };
          state.todoLists.splice(i, 1, newData);
          flag = false;
        }
      });

      if (flag) {
        // id - new todolist
        state.todoLists.push(newTodo);
      }
    },
    REMOVETODOLIST(state, idTodo) {
      state.todoLists.filter((el, i) => {
        if (el.id === idTodo) {
          state.todoLists.splice(i, 1);
        }
      });
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
    getNewTodolistId: st => {
      if (st.todoLists.length) {
        return st.todoLists[st.todoLists.length - 1].id;
      } else {
        return 0;
      }
    },
    getEditTodoList: st => id => {
      return st.todoLists.find(el => el.id == id);
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
