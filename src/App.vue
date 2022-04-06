<template>
  <div id="app">
    <HTTPDetails />
  </div>
</template>

<script>
import HTTPDetails from "./components/HTTPDetails.vue";

export default {
  name: "App",
  components: {
    HTTPDetails,
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
