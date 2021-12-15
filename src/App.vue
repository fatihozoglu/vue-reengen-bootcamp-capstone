<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapMutations(["SET_USER"]),
    ...mapActions(["checkTokenValidity"]),
    clearLocalStorage() {
      localStorage.clear();
      this.SET_USER(null);
    },
  },
  mounted() {
    if (localStorage.getItem("user")) {
      let user = JSON.parse(localStorage.getItem("user"));
      this.checkTokenValidity(user.token)
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch(() => {
          this.$router.push({ name: "Login" });
        });
    }
  },
  destroyed() {
    this.clearLocalStorage();
  },
};
</script>

<style>
:root {
  --primary: #1a2035;
  --secondary: #2bb930;
  --light: #202940;
}
*,
:after,
:before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: var(--primary);
}
#app {
  font-family: "Poppins", sans-serif;
  color: #fff;
}
</style>
