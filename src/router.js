import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
import Clients from "./components/Clients.vue";
import Client from "./components/Client.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/clients",
      name: "clients",
      component: Clients
    },
    {
      path: "/clients/:clientID",
      name: "client",
      component: Client,
      props: true
    }
  ]
});
