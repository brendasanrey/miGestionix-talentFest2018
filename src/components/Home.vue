<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">MiGestionix</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            @input="handleSearchItem"
            v-model="searchString"
          >
          <div
            class="card list-search mt-0"
            v-if="searchResults.length > 0"
          >
            <ul
              v-for="result in searchResults"
              :key="result.tax_id"
              class="d-block list-group list-group-flush"
            >
              <li
                class="list-group-item"
                @click="goToSearchResult(result.id)"
              >{{result.business_name}} - {{result.status}}</li>
            </ul>
          </div>
        </form>
        <button class="btn btn-outline-success my-2 my-sm-0" @click="handleSignOutUser">Cerrar Sesión</button>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <div class="card-content">
              <div class="card-header card-orange">
                <h1 class="card-heading">Cuentas por Cobrar</h1>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <caption class="btn-card btn-orange-c">
                      <a href="/accountsPending">Ver Más</a>
                    </caption>
                    <thead class="text-left ">
                      <tr>
                        <th scope="col">Compañía</th>
                        <th class="text-center" scope="col">Cantidad</th>
                      </tr>
                    </thead>
                    <tbody class="text-left" v-for="client in clients" :key="client.id">
                      <tr v-for="account in client.accounts_pending" v-if="account.total>0" :key="account.id">
                        <td>{{client.business_name}}</td>
                        <td>
                          <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item text-center">{{account.total}}</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card">
            <div class="card-content">
              <div class="card-header card-green">
                <h1 class="card-heading">Clientes Principales</h1>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <caption class="btn-card btn-green-c">
                      <a href="/topClients">Ver Más</a>
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Compañía</th>
                        <th scope="col">RFC</th>
                        <th scope="col">Ultima Actividad</th>
                      </tr>
                    </thead>
                    <tbody v-for="client in clients.slice(0,6)" :key="client.tax_id">
                      <tr>
                        <td>{{client.business_name}}</td>
                        <td>{{client.tax_id}}</td>
                        <td>{{client.last_activity}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12">
          <div class="card card-mb">
            <div class="card-content">
              <div class="card-header card-blue">
                <h1 class="card-heading">Clientes</h1>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <caption class="btn-card btn-blue-c">
                      <a href="/clients">Ver Más</a>
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Compañía</th>
                        <th scope="col">RFC</th>
                        <th scope="col">Ultima Actividad</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody v-for="client in clients.slice(0,8)" :key="client.tax_id">
                      <tr>
                        <td>{{client.business_name}}</td>
                        <td>{{client.tax_id}}</td>
                        <td>{{client.last_activity}}</td>
                        <td>{{client.status}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      searchString: ""
    };
  },
  computed: {
    ...mapGetters(["clients", "searchResults"])
  },
  created() {
    if (!localStorage.getItem("access_token")) {
      this.$router.push("/");
    } else {
      this.getListOfClients();
    }
  },
  methods: {
    getListOfClients() {
      this.$store.dispatch("getList");
    },
    handleSearchItem() {
      if (this.searchString !== "") {
        this.$store.dispatch("searchItem", {
          searchString: this.searchString
        });
        }
        },
    handleSignOutUser() {
      this.$store.dispatch("signoutUser");
    },
    goToSearchResult(resultId) {
      // Limpiar la variable
      this.searchTerm = "";
      // redireccionar a la vista individual del post
      this.$router.push(`/clients/${resultId}`);
      // Limpiar los resultados de la busqueda
      this.$store.commit("clearSearchResults");
    }
  }
};
</script>

<style scoped>
.card {
  background: #fff;
  display: block;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  border: 1px solid #aaa;
  border-bottom: 3px solid #bbb;
  padding: 0px;
  margin-top: 2em;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-body {
  margin: 1em;
}

.card-mb {
  margin-bottom: 2em;
}

.card-header {
  color: #ffffff;
  border-bottom: 3px solid #bbb;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Roboto", sans-serif;
  padding: 0px;
  margin-top: 0px;
  overflow: hidden;
  -webkit-transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-heading {
  display: block;
  font-size: 24px;
  line-height: 28px;
  margin: 0.5em 0em 0.5em 1.5em;
  border-bottom: 1px #2196f3;
  color: #fff;
}

.card-orange {
  background-color: #e98823;
}
.card-blue {
  background-color: #3c91e6;
}
.card-green {
  background-color: #9fd356;
}

.btn-card {
box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  border: 2px solid;
  cursor: pointer;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin-top: 20px;
  margin-bottom: -10px;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}

.btn-card:hover,
.btn-card:focus {
  color: white;
  outline: 0;
}

.btn-orange-c {
  border: 2px solid #e98823;
  color: #e98823;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-orange-c:hover {
  box-shadow: 0 0 40px 40px #e98823 inset;
}
.btn-blue-c {
  border: 2px solid #3c91e6;
  color: #3c91e6;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-blue-c:hover {
  box-shadow: 0 0 40px 40px #3c91e6 inset;
}

.btn-green-c {
  border: 2px solid #9fd356;
  color: #9fd356;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}
.btn-green-c:hover {
  box-shadow: 0 0 40px 40px #9fd356 inset;
}

.btn-nvb {
  background-color: transparent;
}

.btn-nvb:hover,
.btn-nvb:focus {
  color: #F8F9FA;
  outline: 0;
}

.btn-navbar {
  border: 2px solid #37323f;
  color: #37323f;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.btn-navbar:hover {
  box-shadow: 0 0 40px 40px #37323f inset;
}

a {
  color: inherit;
}

.list-search {
  position: absolute;
  width: 100vw;
  z-index: 8;
  top: 100%;
  left: 0%;
}
</style>
