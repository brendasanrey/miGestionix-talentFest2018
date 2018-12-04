<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad">

              <div class="panel panel-info">
                <div class="panel-heading">
                  <h3 class="panel-title">{{client.business_name}}</h3>
                </div>
                <div class="panel-body">
                  <div class="row">
                    <div class=" col-md-9 col-lg-12 text-center">
                      <table class="table table-user-information">
                        <tbody>
                          <tr>
                            <td>RFC:</td>
                            <td>Status:</td>
                            <td>Ultima Actividad:</td>
                          </tr>
                          <tr>
                            <td>{{client.tax_id}}</td>
                            <td>{{client.status}}</td>
                            <td>{{client.last_activity}}</td>
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

