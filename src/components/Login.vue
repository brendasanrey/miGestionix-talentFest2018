<template>
  <div class="container fluid">
    <div class="row">
      <div class="col sm-12 md-12 lg-12">
        <div class="row">
          <div class="sm-12 md-8 lg-8 offset-md-4 lg-4 mt-3">
            <center>
              <img
                src="../assets/logo_gestionix.png"
                class="img-fluid"
                width="330"
                alt="Responsive image"
              >
            </center>

          </div>
        </div>
        <form
          @submit.prevent="handleSigninUser"
          class=" text-center mt-3"
        >
          <div class="row">
            <div class="col-12 col-md-8 col-lg-8 offset-lg-2">
              <h2 class="text-white mt-3">Inicia sesión y comienza a controlar tu negocio</h2>
            </div>
            <div class="col-12 col-md-8 col-lg-6 offset-lg-3">
              <p class="text-white mt-3">Usuario</p>
              <input
                class="w-100 input-login"
                type="email"
                v-model="username"
              >
            </div>
            <div class="col-12 col-md-8 col-lg-6 offset-lg-3">
              <p class="text-white mt-3">Contraseña</p>
              <input
                class="w-100 input-login"
                type="password"
                v-model="password"
              >
            </div>
            <div class="col-12 col-md-8 col-lg-6 offset-lg-3">
              <button class="w-70 btn-large mt-3">Entrar</button>
            </div>
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

p {
  text-align: left;
}
.input-login {
  border-radius: 10px !important;
  border: 1px solid #fff !important;
  background-color: #fff !important;
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
