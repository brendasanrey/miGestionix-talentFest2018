import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients: [],
    searchResponses: []
  },
  mutations: {
    setClientList: (state, payload) => {
      state.clients = payload;
    },
    searchResponse: (state, payload) => {
      state.searched = payload;
    }
  },
  actions: {
    signinUser: ({ commit }, { username, password }) => {
      Axios.post("https://api-test.gestionix.com/api/v3/users/authentication", {
        user: username,
        password: password
      })
        .then(resp => {
          localStorage.setItem("access_token", resp.data.access_token);
          router.push("/home");
        })
        .catch(err => console.log(err));
    },
    signoutUser: async ({ commit }) => {
      localStorage.setItem("access_token", "");
      router.push("/");
    },
    getList: ({ commit }) => {
      const currentToken = localStorage.getItem("access_token");
      Axios.get("https://api-test.gestionix.com/api/v3/clients/table", {
        headers: {
          Company: 17,
          Authorization: `Bearer ${currentToken}`
        }
      })
        .then(resp => {
          commit("setClientList", resp.data);
        })
        .catch(err => console.log(err));
    },
    getClient: ({
      commit
    }) => {
      const currentToken = localStorage.getItem("access_token");
      Axios.get("https://api-test.gestionix.com/api/v3/clients/:id", {
          headers: {
            Company: 17,
            Authorization: `Bearer ${currentToken}`
          }
        })
        .then(resp => {
          commit('setClient', resp.data);
        })
        .catch(err => console.log(err));
    },
    searchInput: ({
      commit
    }, payload) => {
      const currentToken = localStorage.getItem("access_token");
      Axios.get("https://api-test.gestionix.com/api/v3/clients/table", {
        headers: {
          Company: 17,
          Authorization: `Bearer ${currentToken}`
        }
      })
        .then(resp => {
          commit("searchResponse", resp.data);
        })
        .catch(err => console.log(err));
    }
  },
  getters: {
    clients: state => state.clients,
    search: state => state.search
  }
});
