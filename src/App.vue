<template>
  <div id="app">
    <HttpDetails />
  </div>
</template>

<script>
import HttpDetails from "./components/HttpDetails.vue";

export default {
  name: "App",
  components: {
    HttpDetails,
  },
};
</script>

<style lang="scss">
@import "./style/app.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
