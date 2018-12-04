import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from './router';
import VueSpeech from 'vue-speech';


Vue.use(Vuex);

Vue.use(VueSpeech);

export default new Vuex.Store({
  state: {
    clients: [],
    searchResults: [],
    client: {}
  },
  mutations: {
    setClientList: (state, payload) => {
      state.clients = payload;
    },
    setClient: (state, payload) => {
      state.client = payload;
    },
    setSearchResults: (state, payload) => {
      state.searchResults = payload;
    },
    clearSearchResults: state => {
      state.searchResults = [];
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
    getClient: ({
      commit
    }, payload) => {
      const currentToken = localStorage.getItem("access_token");
      Axios.get(`https://api-test.gestionix.com/api/v3/clients/${payload}`, {
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
    searchItem: ({
      commit
    }, {
      searchString
    }) => {
      const currentToken = localStorage.getItem("access_token");
      Axios.get("https://api-test.gestionix.com/api/v3/clients/table", {
          headers: {
            Company: 17,
            Authorization: `Bearer ${currentToken}`
          }
        })
        .then(resp => {
          console.log(searchString);
          const results = resp.data.filter(item => item.business_name.includes(searchString) || item.status.includes(searchString));
          console.log(results);
          commit('setSearchResults', results);
        })
    },
  },
  getters: {
    clients: state => state.clients,
    searchResults: state => state.searchResults,
    client: state => state.client
  }
});
