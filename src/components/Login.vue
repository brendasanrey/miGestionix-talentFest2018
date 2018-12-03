<template>
  <div>
    <form @submit.prevent="handleSigninUser">
      <input type="email" placeholder="usuario" v-model="username"> |
      <input type="password" placeholder="contraseña" v-model="password">
      <button>Login</button>
    </form>
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
