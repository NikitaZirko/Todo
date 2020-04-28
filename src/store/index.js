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
    REMOVETODOLIST(state, id) {
      console.log(id-1)
      Vue.delete(state.todoLists, id-1);
      //state.todoLists.splice((id-1), 1)
    }
  },
  actions: {
    del({commit}, id) {
      commit("REMOVETODOLIST", id);
    }
  },
  getters: {
    getTodoLists: st => st.todoLists
  },
  modules: {}
});
