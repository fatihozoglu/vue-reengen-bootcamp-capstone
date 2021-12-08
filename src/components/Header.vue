<template>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link :to="{ name: 'Home' }">
        <img src="../assets/logo.png" alt="Logo" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }"
              >Log in</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Register' }"
              >Register</router-link
            >
          </li>
          <select class="ms-lg-4" name="language" id="language">
            <option value="en">en</option>
            <option value="tr">tr</option>
          </select>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: var(--primary);
  min-height: 10vh;
  padding: 0 30px;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.2);
}
#language {
  height: 25px;
  width: max-content;
  font-size: 0.8rem;
  border: 1px solid #fff;
  border-radius: 4px;
  background: var(--light);
  color: #fff;
  cursor: pointer;
}
</style>
