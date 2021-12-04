<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
}
</style>
