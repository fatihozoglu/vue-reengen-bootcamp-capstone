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
    factoryDataType: null,
    unitDataType: null,
    modal: {
      isOpen: false,
      type: null,
      modalData: null,
      name: null,
    },
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
    SET_FACTORY_DATA_TYPE(state, payload) {
      state.factoryDataType = payload;
    },
    SET_UNIT_DATA_TYPE(state, payload) {
      state.unitDataType = payload;
    },
    SET_MODAL(state, payload) {
      state.modal = { ...payload };
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
    getFactoryDataType(context) {
      httpClient
        .get("/factories/type")
        .then((res) => {
          context.commit("SET_FACTORY_DATA_TYPE", res.data);
        })
        .catch((err) => console.log(err));
    },
    getUnitDataType(context) {
      httpClient
        .get("/units/data/type")
        .then((res) => {
          context.commit("SET_UNIT_DATA_TYPE", res.data);
        })
        .catch((err) => console.log(err));
    },
    createNewFactory(context, payload) {
      httpClient
        .post("/factories", payload)
        .then(() => {
          context.dispatch("getAllFactories");
        })
        .catch((err) => console.log(err));
    },
    createNewUnit(context, payload) {
      httpClient
        .post("/units", payload)
        .then(() => {
          context.dispatch("getFactoryUnits", payload.factory_id);
        })
        .catch((err) => console.log(err));
    },
    getAllFactories(context) {
      httpClient
        .get("/factories")
        .then((res) => {
          context.commit("SET_FACTORIES", res.data);
        })
        .catch((err) => console.log(err));
    },
    deleteFactoryById(context, payload) {
      httpClient
        .delete(`/factories/${payload}`)
        .then(() => {
          context.dispatch("getAllFactories");
          context.dispatch("deleteUnitsByFactoryId", payload);
        })
        .catch((err) => console.log(err));
    },
    updateByFactoryId(context, payload) {
      httpClient
        .update(`/factories/${payload.factory_id}`, payload.data)
        .then(() => {
          context.dispatch("getAllFactories");
        })
        .catch((err) => console.log(err));
    },
    getFactoryUnits(context, payload) {
      httpClient
        .get(`/units/${payload}`)
        .then((res) => {
          context.commit("SET_UNITS", res.data);
        })
        .catch((err) => console.log(err));
    },
    deleteUnitById(context, payload) {
      httpClient
        .delete(`/units/${payload.unit_id}`)
        .then(() => {
          context.dispatch("getFactoryUnits", payload.factory_id);
        })
        .catch((err) => console.log(err));
    },
    deleteUnitsByFactoryId(context, payload) {
      httpClient
        .delete(`/units/all/${payload}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
