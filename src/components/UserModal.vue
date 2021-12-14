<template>
  <div class="user-modal">
    <img
      @click="toggleModal"
      class="modal-avatar"
      src="../assets/user-photo.jpg"
      alt="user avatar"
    />
    <div v-if="isOpen" class="modal-body">
      <div class="header">
        <img
          class="profile-photo"
          src="../assets/user-photo.jpg"
          alt="user avatar"
        />
        <div class="header-side">
          <p class="username">Username</p>
          <p class="email">Email@email.com</p>
          <div @click="goSettings" class="link">Settings</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserModal",
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen;
    },
    goSettings() {
      this.toggleModal();
      this.$router.push({ name: "Settings" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-modal {
  height: 100%;
  position: relative;
}
.modal-avatar {
  border-radius: 50%;
  cursor: pointer;
}
.modal-body {
  position: absolute;
  top: 50px;
  right: -10px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 4px;
}
.header {
  display: flex;
  align-items: center;
  gap: 20px;
}
.profile-photo {
  width: 70px;
  height: auto;
  border-radius: 8px;
}
.header-side {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.username,
.email,
.link {
  margin: 0;
  font-size: 0.8rem;
}
.username {
  font-weight: 500;
}
.email {
  font-weight: 200;
}
.link {
  width: max-content;
  text-decoration: none;
  padding: 5px 10px;
  color: white;
  background-color: var(--secondary);
  border-radius: 4px;
  cursor: pointer;
}
.link:hover {
  background-color: green;
}
</style>
