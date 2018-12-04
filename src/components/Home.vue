<template>
  <div>
    <h1>Home</h1>
    <div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",
  data() {
    return {
      status: ""
    };
  },
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
