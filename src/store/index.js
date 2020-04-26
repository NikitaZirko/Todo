import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoLists: []
  },
  mutations: {
    setTodoLists(state, todoLists) {
      state.todoLists = todoLists;
    }
  },
  actions: {
    /* addTodoLists({ commit }, payload) {
      commit("setTodoLists", todoLists);
    } */
  },
  getters: {},
  modules: {}
});
