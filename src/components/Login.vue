<template>
  <div class="container fluid">
    <div class="row mt-5">
      <div class="col sm-12 md-12 lg-12">
        <div class="row">
          <div class="sm-12 md-8 lg-8 offset-md-4 lg-4 mt-3 mx-auto">
            <center>
              <img
                src="../assets/logo.png"
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
              <h4 class="text-white mt-3">Inicia sesión y comienza a controlar tu negocio</h4>
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
              <button class="w-30 mt-3 btn-large btn-orange mx-auto">Entrar</button>
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
  height:40px;
}

.btn-large {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  border: 2px solid;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
}
.btn-large:hover,
.btn-large:focus {
  color: #37323f;
  outline: 0;
}
.btn-orange {
  border: 2px solid #e98823;
  color: #e98823;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-orange:hover {
  box-shadow: 0 0 40px 40px #e98823 inset;
}
.btn-blue {
  border: 2px solid #3c91e6;
  color: #3c91e6;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-blue:hover {
  box-shadow: 0 0 40px 40px #3c91e6 inset;
}
.btn-green {
  border: 2px solid #9fd356;
  color: #9fd356;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-blue:hover {
  box-shadow: 0 0 40px 40px #9fd356 inset;
}
</style>
