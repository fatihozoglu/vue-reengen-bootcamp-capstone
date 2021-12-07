<template>
  <div id="app">
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
  props: {},
};
</script>

<style>
:root {
  --primary: #1a2035;
  --secondary: #1163cc;
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
