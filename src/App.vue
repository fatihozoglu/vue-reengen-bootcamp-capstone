<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapMutations(["SET_USER"]),
  },
  created() {
    if (localStorage.getItem("user")) {
      this.SET_USER(JSON.parse(localStorage.getItem("user")));
      this.$router.push({ name: "Dashboard" });
    }
    if (sessionStorage.getItem("user")) {
      this.SET_USER(JSON.parse(sessionStorage.getItem("user")));
      this.$router.push({ name: "Dashboard" });
    }
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
