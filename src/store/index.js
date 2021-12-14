import Vue from "vue";
import Vuex from "vuex";
import httpClient from "../services/httpClient";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    remember: false,
  },
  mutations: {
    SET_USER(state, payload) {
      if (payload === null) {
        state.user = null;
      } else {
        state.user = { ...payload };
      }
    },
    SET_REMEMBER(state, payload) {
      state.remember = payload;
    },
  },
  actions: {
    register(context, payload) {
      httpClient
        .post("/register", payload)
        .then((res) => {
          context.commit("SET_USER", res.data);
          if (!context.state.remember) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
        })
        .catch((err) => console.log(err.response));
    },
    login(context, payload) {
      httpClient
        .post("/login", payload)
        .then((res) => {
          context.commit("SET_USER", res.data);
          if (!context.state.remember) {
            sessionStorage.setItem("user", JSON.stringify(res.data));
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
          }
        })
        .catch((err) => console.log(err.response));
    },
  },
  modules: {},
});
