import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients: []
  },
  mutations: {
    setClientList: (state, payload) => {
      state.clients = payload;
    }
  },
  actions: {
    signinUser: ({
      commit
    }, {
      username,
      password
    }) => {
      Axios.post("https://api-test.gestionix.com/api/v3/users/authentication", {
          user: username,
          password: password
        })
        .then(resp => {
          localStorage.setItem("access_token", resp.data.access_token);
          router.push('/home');
        })
        .catch(err => console.log(err));
    },
    getList: ({
      commit
    }) => {
      const currentToken = localStorage.getItem("access_token");
      Axios.get("https://api-test.gestionix.com/api/v3/clients/table", {
          headers: {
            Company: 17,
            Authorization: `Bearer ${currentToken}`
          }
        })
        .then(resp => {
          console.log(resp.data);
          commit('setClientList', resp.data);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    clients: state => state.clients
  }

});

