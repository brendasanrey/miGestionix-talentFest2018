<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">MiGestionix</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button class="btn btn-outline-success my-2 my-sm-0 mr-2" type="submit">Buscar</button>
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerrar Sesión</button>
        </form>
      </div>
    </nav>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="table-responsive">
            <table class="table">
              <thead class="text-center">
                <tr>
                  <th scope="col">Compañía</th>
                  <th scope="col">Cantidad</th>
                </tr>
              </thead>
              <tbody class="text-center" v-for="client in clients" :key="client.id">
                <tr
                  v-for="account in client.accounts_pending"
                  v-if="account.total>0"
                  :key="account.id"
                >
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
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "accountsPending",
  computed: {
    ...mapGetters(["clients"])
  },
  created() {
    this.getListOfClients();
  },
  methods: {
    getListOfClients() {
      this.$store.dispatch("getList");
    }
  }
};
</script>

<style scoped>
.table-responsive {
  background-color: #fff;
}

thead {
  background-color: #e98823;
}

</style>


