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
        <div class="col-md-6">
          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <h1 class="card-heading">Cuentas por Cobrar</h1>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <caption><a href="/accountsPending">Ver Más</a></caption>
                    <thead class="text-center">
                      <tr>
                        <th scope="col">Compañía</th>
                        <th scope="col">Cantidad</th>
                      </tr>
                    </thead>
                    <tbody
                      class="text-center"
                      v-for="client in clients"
                      :key="client.id"
                    >
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
        <div class="col-md-6">
          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <h1 class="card-heading">Clientes Principales</h1>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <caption><a href="/topClients">Ver Más</a></caption>
                    <thead>
                      <tr>
                        <th scope="col">Compañía</th>
                        <th scope="col">RFC</th>
                        <th scope="col">Ultima Actividad</th>
                      </tr>
                    </thead>
                    <tbody
                      v-for="client in clients.slice(0,6)"
                      :key="client.tax_id"
                    >
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
          <div class="card">
            <div class="card-content">
              <div class="card-header">
                <h1 class="card-heading">Clientes</h1>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
                    <caption><a href="/clients">Ver Más</a></caption>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
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
  margin-top: 5em;
  overflow: hidden;
  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: "Roboto", sans-serif;
  -webkit-transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.card-body {
  margin: 1em;
}

.card-header {
  background-color: #37323f;
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
  margin-bottom: 24px;
  margin-left: 1em;
  border-bottom: 1px #2196f3;
  color: #fff;
}
</style>
