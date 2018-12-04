<template>
  <div class="container">
    <div class="row">
      <div class="col s12 m6 l6 offset-m4 offset-l4">
        <div class="row">
          <div class="col s12 m12 l12 mt center-align">
            <img class="materialboxed" width="300" src="../assets/logogestionix.png" alt="logogestionix">
          </div>
        </div>
        <form @submit.prevent="handleSigninUser">
          <div class="row">
            <div class="col s12 m12 l12">
              <h6 class="white-text">Inicia sesión y comienza a controlar tu negocio</h6>
            </div>
          </div>
          <p class="white-text">Usuario</p>
          <input class="input-login" type="email" v-model="username">
          <p class="white-text">Contraseña</p>
          <input class="input-login" type="password" v-model="password">
          <div class="center-align">
            <button class="btn-large mt">Entrar</button>
          </div>
          
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
body {
  background-color: #37323f;
}
.mt {
  margin-top: 3em;
}

.input-login {
  border-radius: 10px!important;
  border: 1px solid #fff !important;
  background-color: #fff!important;
}

.btn-large {
  background-color: inherit;
  border: 2px solid #e98823;
  color: #e98823;
}

.btn-large:hover {
  background-color: #e98823;
  color: #ffff;
}
</style>
