<template>
  <div class="container">
    <div class="row">
      <div class="col s6 m6 l6">
        <form @submit.prevent="handleSigninUser">
          <img src="../assets/logogestionix.png" alt="logogestionix">
          <h6 class="white-text">Inicia sesión y comienza a controlar tu negocio</h6>
          <p class="white-text">Usuario</p>
          <input type="email" v-model="username">
          <p class="white-text">Contraseña</p>
          <input type="password" v-model="password">
          <button>Login</button>
          </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    handleSigninUser() {
      this.$store.dispatch("signinUser", {
        username: this.username,
        password: this.password
      });
    }
  }
};
</script>

<style>
body{
  background-color: #37323F;
}
</style>
