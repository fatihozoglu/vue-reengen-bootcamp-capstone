<template>
  <div class="home">
    <div class="home-text">
      <h1>
        Take control of your energy with <span class="brand">Electrica</span>
      </h1>
      <p>
        Monitor your energy usage with our smart platform and make data-driven
        decisions.
      </p>
      <div class="btn-container">
        <router-link class="btn" :to="{ name: 'Login' }">Log in</router-link>
        <router-link class="btn" :to="{ name: 'Register' }"
          >Register</router-link
        >
      </div>
    </div>
    <img class="home-image" src="../assets/landing.png" alt="land" />
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  align-items: center;
  padding-inline: 80px;
}
h1 {
  font-size: 3rem;
  font-weight: 600;
}
p {
  font-size: 1.2rem;
  font-weight: 200;
}
.brand {
  color: var(--secondary);
}
.home-text {
  height: 70%;
  grid-column-start: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.btn-container {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}
.btn {
  color: white;
  padding: 15px 30px;
  border: 1px solid var(--secondary);
  border-radius: 50px;
  font-weight: 600;
  transition: 0.5s;
}
.btn:hover {
  background-color: var(--secondary);
}
.home-image {
  width: 100%;
  height: auto;
  grid-column-start: 2;
}
</style>
