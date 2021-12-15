<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  methods: {
    ...mapActions(["checkTokenValidity"]),
  },
  mounted() {
    if (localStorage.getItem("user") || sessionStorage.getItem("user")) {
      this.checkTokenValidity()
        .then(() => {
          this.$router.push({ name: "Dashboard" });
        })
        .catch(() => {
          this.$router.push({ name: "Login" });
        });
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
