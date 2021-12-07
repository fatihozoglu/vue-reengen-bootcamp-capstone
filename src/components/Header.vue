<template>
  <header>
    <router-link class="link" :to="{ name: 'Login' }">Login</router-link>
    <router-link class="link" :to="{ name: 'Register' }">Register</router-link>
    <select name="language" id="language">
      <option value="en">en</option>
      <option value="tr">tr</option>
    </select>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 50px;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
}
.link {
  text-decoration: none;
  color: #fff;
  padding: 8px 15px;
  border: 1px solid white;
  border-radius: 8px;
  transition: 0.5s;
}
.link:hover {
  background: var(--secondary);
}
#language {
  font-size: 0.8rem;
  padding: 5px 5px;
  border: 1px solid #fff;
  border-radius: 8px;
  background: var(--primary);
  color: #fff;
  cursor: pointer;
}
</style>
