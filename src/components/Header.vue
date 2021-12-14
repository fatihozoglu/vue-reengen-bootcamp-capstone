<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
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
        <ul class="navbar-nav ms-auto mb-2 mb-sm-0 align-items-sm-center">
          <UserModal v-if="user" />
          <select class="mt-2 mt-sm-0 ms-sm-4" name="language" id="language">
            <option value="en">en</option>
            <option value="tr">tr</option>
          </select>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import UserModal from "./UserModal.vue";

export default {
  name: "Header",
  components: {
    UserModal,
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  background-color: var(--primary);
  min-height: 10vh;
  padding-inline: 30px;
  box-shadow: 0px 2px 0px 0px rgba(73, 73, 73, 0.2);
}
#language {
  height: 25px;
  width: max-content;
  font-size: 0.8rem;
  border: 1px solid #989aa4;
  border-radius: 4px;
  background: var(--light);
  color: #989aa4;
  cursor: pointer;
}
</style>
