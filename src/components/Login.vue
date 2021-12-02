<template>
  <div class="container">
    <div class="login-wrap">
      <div class="login-html">
        <input
          id="tab-1"
          type="radio"
          name="tab"
          class="sign-in"
          checked
        /><label for="tab-1" class="tab">Sign In</label>
        <input id="tab-2" type="radio" name="tab" class="sign-up" /><label
          for="tab-2"
          class="tab"
          >Sign Up</label
        >
        <div class="login-form">
          <div class="sign-in-htm">
            <div class="group">
              <label for="email-in" class="label">Email</label>
              <input id="email-in" type="email" class="input" />
            </div>
            <div class="group">
              <label for="pass" class="label">Password</label>
              <input
                id="pass"
                type="password"
                class="input"
                data-type="password"
              />
            </div>
            <div class="group">
              <input id="check" type="checkbox" class="check" checked />
              <label for="check"><span class="icon"></span> Remember me</label>
            </div>
            <div class="group">
              <button class="button">Sign In</button>
            </div>
          </div>
          <div class="sign-up-htm">
            <div class="group">
              <label for="name" class="label">Name</label>
              <input id="name" type="text" class="input" />
            </div>
            <div class="group">
              <label for="email-up" class="label">Email</label>
              <input id="email-up" type="email" class="input" />
            </div>
            <div class="group">
              <label for="password" class="label">Password</label>
              <input
                id="password"
                type="password"
                class="input"
                data-type="password"
              />
            </div>
            <div class="group">
              <button class="button mt-20">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  width: 100%;
  height: 100vh;
  background: #2a3a66;
}
.login-wrap {
  color: rgb(168, 168, 168);
  height: 100%;
  margin: auto;
  max-width: 525px;
  position: relative;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
}
.login-html {
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, 0.9);
}
.login-html .sign-in-htm,
.login-html .sign-up-htm {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check {
  display: none;
}
.login-html .tab {
  font-size: 22px;
  padding-bottom: 5px;
  margin: 0 20px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab {
  color: #fff;
  border-color: #1161ee;
}
.login-form {
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
}
.login-form .group {
  margin-bottom: 15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button {
  width: 100%;
  color: #fff;
  display: block;
}
.login-form .group .input,
.login-form .group .button {
  border: none;
  padding: 15px 20px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group input[data-type="password"] {
  -webkit-text-security: circle;
}
.login-form .group .label {
  font-weight: 500;
  font-size: 16px;
  margin-bottom: 5px;
  padding-inline-start: 10px;
  color: rgb(209, 209, 209);
  text-align: start;
}
.login-form .group .button {
  background: #1161ee;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.login-form .group .button:hover {
  background: #0d49b1;
}
.login-form .group label .icon {
  width: 15px;
  height: 15px;
  border-radius: 2px;
  position: relative;
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after {
  content: "";
  width: 10px;
  height: 2px;
  background: #fff;
  position: absolute;
  transition: all 0.2s ease-in-out 0s;
}
.login-form .group label .icon:before {
  left: 3px;
  width: 5px;
  bottom: 6px;
  transform: scale(0) rotate(0);
}
.login-form .group label .icon:after {
  top: 6px;
  right: 0;
  transform: scale(0) rotate(0);
}
.login-form .group .check:checked + label {
  color: #fff;
}
.login-form .group .check:checked + label .icon {
  background: #1161ee;
}
.login-form .group .check:checked + label .icon:before {
  transform: scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after {
  transform: scale(1) rotate(-45deg);
}
.login-html
  .sign-in:checked
  + .tab
  + .sign-up
  + .tab
  + .login-form
  .sign-in-htm {
  transform: rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm {
  transform: rotate(0);
}
.foot-lnk {
  text-align: center;
}
.login-form {
  margin-top: 20px;
}
.mt-20 {
  margin-top: 40px;
}
</style>
