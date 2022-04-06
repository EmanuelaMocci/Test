<template>
  <div id="app">
    <HTTPDetails />
    <Chart />
  </div>
</template>

<script>
import HTTPDetails from "./components/HTTPDetails.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "App",
  components: {
    HTTPDetails,
    Chart,
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
