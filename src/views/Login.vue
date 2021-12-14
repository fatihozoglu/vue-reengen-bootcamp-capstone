<template>
  <div class="login-container">
    <form @submit.prevent="submit">
      <h3></h3>

      <label for="email">Email</label>
      <input v-model="user.email" type="email" placeholder="Email" id="email" />

      <label for="password">Password</label>
      <input
        v-model="user.password"
        type="password"
        placeholder="Password"
        id="password"
      />

      <label for="remember" class="textbox-label">
        <input v-model="remember" type="checkbox" id="remember" />
        <span>Remember me</span>
      </label>

      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: null,
        password: null,
      },
      remember: false,
    };
  },
  methods: {
    ...mapActions(["login"]),
    ...mapMutations(["SET_REMEMBER"]),
    submit() {
      this.login(this.user).then(() => {
        this.SET_REMEMBER(this.remember);
        this.$router.push({ name: "Home" });
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-container {
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  flex-basis: 350px;
  background-color: rgba(255, 255, 255, 0.13);
  border-radius: 8px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  padding: 50px 30px;
}
form * {
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}
form h3 {
  font-size: 28px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}
label {
  display: block;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 500;
}
input {
  display: block;
  height: 40px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 300;
}
::placeholder {
  color: #e5e5e5;
}
button {
  margin-top: 40px;
  width: 100%;
  background-color: var(--light);
  color: white;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
}
button:hover {
  background-color: var(--primary);
}
.textbox-label {
  width: max-content;
  display: flex;
  align-items: center;
}
.textbox-label > span {
  font-size: 14px;
  font-weight: 300;
  margin-left: 10px;
}
.textbox-label > input {
  margin: 0;
  width: 15px;
  height: 15px;
}
</style>
