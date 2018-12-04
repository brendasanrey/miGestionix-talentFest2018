<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a
        class="navbar-brand"
        href="#"
      >MiGestionix</a>
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

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <form class="form-inline my-2 my-lg-0 ml-auto">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          >
          <button
            class="btn btn-outline-success my-2 my-sm-0 mr-2"
            type="submit"
          >Buscar</button>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >Cerrar Sesión</button>
        </form>
      </div>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Compañía</th>
                <th scope="col">RFC</th>
                <th scope="col">Ultima Actividad</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody
              v-for="client in clients.slice(0,8)"
              :key="client.tax_id"
            >
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
