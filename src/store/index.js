import { createStore } from "vuex";

export default createStore({
  state: {
    backendUrl: "https://api.custx.ru/api",
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getBackendUrl: (state) => {
      return state.backendUrl;
    }
  },
});
