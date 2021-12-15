import Vue from "vue";
import Vuex from "vuex";
import httpClient from "../services/httpClient";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    remember: false,
    factories: null,
    units: null,
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
    SET_FACTORIES(state, payload) {
      state.factories = payload;
    },
    SET_UNITS(state, payload) {
      state.units = payload;
    },
  },
  actions: {
    register(context, payload) {
      return httpClient
        .post("/register", payload)
        .then((res) => {
          context.commit("SET_USER", res.data);
          sessionStorage.setItem("user", JSON.stringify(res.data));
          return Promise.resolve(res.data);
        })
        .catch((err) => {
          return Promise.reject(err.response.data);
        });
    },
    login(context, payload) {
      return httpClient
        .post("/login", payload)
        .then((res) => {
          context.commit("SET_USER", res.data);
          if (context.state.remember) {
            localStorage.setItem("user", JSON.stringify(res.data));
          } else {
            sessionStorage.setItem("user", JSON.stringify(res.data));
          }
          return Promise.resolve(res.status);
        })
        .catch((err) => {
          return Promise.reject(err.response.data);
        });
    },
    checkTokenValidity(context) {
      return httpClient
        .post("/check")
        .then((res) => {
          context.commit(
            "SET_USER",
            JSON.parse(
              localStorage.getItem("user") || sessionStorage.getItem("user")
            )
          );
          return Promise.resolve(res.status);
        })
        .catch((err) => {
          context.commit("SET_USER", null);
          return Promise.reject(err.response.status);
        });
    },
    getAllFactories(context) {
      httpClient
        .get("/factories")
        .then((res) => {
          context.commit("SET_FACTORIES", res.data);
        })
        .catch((err) => console.log(err));
    },
    getUnits(context) {
      httpClient
        .get(`/units`)
        .then((res) => {
          context.commit("SET_UNITS", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
