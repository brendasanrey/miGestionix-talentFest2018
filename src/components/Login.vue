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
            <button class="btn-large btn-orange mt">Entrar</button>
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

/* .btn-large {
  background-color: inherit;
  border: 2px solid #e98823;
  color: #e98823;
}

.btn-large:hover {
  background-color: #e98823;
  color: #ffff;
} */
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
}
.btn-large:hover, .btn-large:focus {
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
.btn-blue {
  border: 2px solid #9fd356;
  color: #9fd356;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-blue:hover {
  box-shadow: 0 0 40px 40px #9fd356 inset;
}


</style>
