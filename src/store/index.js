import { createStore } from "vuex";
import omdbApi from "../api/omdb";

const SETMORIES = "SETMORIES";
const CLEARMORIES = "CLEARMORIES";

export default createStore({
  state: {
    mories: [],
    query: "",
  },
  mutations: {
    [SETMORIES](state, mories) {
      state.mories = mories;
    },
    [CLEARMORIES](state) {
      state.mories = [];
    },
  },
  actions: {
    search({ commit }, q) {
      omdbApi.getMories(q).then((response) => {
        commit(SETMORIES, response);
      });
    },
    clear({ commit }) {
      commit(CLEARMORIES);
    },
  },
  getters: {
    getMories: (state) => {
      return state.mories;
    },
  },
  modules: {},
});
