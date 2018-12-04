<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
      <a class="navbar-brand" href="/home"> <img src="../assets/icono.png" height="35" class="d-inline-block align-top">
      MiGestionix</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse ml-auto" id="navbarSupportedContent">
        <button class="btn btn-outline-success my-2 my-sm-0 ml-auto" @click="handleSignOutUser">Cerrar Sesión</button>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 mt-5">
          <div class="table-responsive">
          <h3 class="text-white text-center">Empresa >> {{client.business_name}}</h3>
            <table class="table mt-3">
              <thead class="text-center">
                <tr>
                    <td>RFC</td>
                    <td>Fecha de registro</td>
                    <td>Ultima Actividad</td>
                </tr>
              </thead>

              <tbody class="text-center">
                 <td>{{client.tax_id}}</td>
                  <td>{{client.register_date}}</td>
                  <td>{{client.last_activity}}</td>
                </tr>
              </tbody>
            </table>
            <table class="table mt-3">
              <thead class="text-center">
                <tr>
                    <td>Contacto</td>
                    <td>País</td>
                    <td>Status</td>
                </tr>
              </thead>

              <tbody class="text-center">
                <td>{{client.contact.email}}</td>
                 <td>{{client.address.country}}</td>
                  <td v-if="client.active">Activo</td>
                  <td v-if="!client.active">Inactivo</td>
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
  name: "client",
  props: ["clientID"],
  computed: {
    ...mapGetters(["client"])
  },
  created() {
    this.getClient();
  },
  methods: {
    getClient() {
      this.$store.dispatch("getClient", this.clientID);

    },
    handleSignOutUser() {
      this.$store.dispatch("signoutUser");
    }
  }
};
</script>


<style scoped>
.table {
  background-color: #ffffff;
  height:0vh;
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

