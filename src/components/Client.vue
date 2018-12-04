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

