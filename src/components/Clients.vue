<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/home"> <img src="../assets/icono.png" height="35" class="d-inline-block align-top">
      MiGestionix</a>
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
                class="list-group-item pointer"
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
        <div class="table-responsive col-md-9 mx-auto">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Compañía</th>
                <th scope="col">RFC</th>
                <th scope="col">Ultima Actividad</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody v-for="client in clients" :key="client.tax_id">
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
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "clients",
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
    handleSignOutUser() {
      this.$store.dispatch("signoutUser");
    },
    getListOfClients() {
      this.$store.dispatch("getList");
    },
    handleSearchItem() {
      if (this.searchString !== "") {
        this.$store.dispatch("searchItem", {
          searchString: this.searchString
        });
      }
    }
  }
};
</script>

<style scoped>
.table {
  background-color: #ffffff;
  height: 100vh;
}
thead {
  background-color: #e98823;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 28px;
  margin: 0.5em 0em 0.5em 1.5em;
  color: #fff;
}
</style>
