<template>
  <div>
    <h1>Home</h1>
    <div>
      {{status}}
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return{
    status: ""
    }
  },
  created() {
    this.getListOfClients();
  },
  methods: {
    getListOfClients() {
      this.status = "Loading...";
      this.$store.dispatch("getList");
    }
  }
};
</script>
