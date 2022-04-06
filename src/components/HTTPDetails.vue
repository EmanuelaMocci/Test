<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="mt-5">200</h1>
        <p class="fs-5">Everything is fine!</p>
      </div>
    </div>
    <div class="row">
      <div
        class="col-xs-12 col-md-5 input p-2 rounded-3 m-auto d-flex justify-content-between"
      >
        <select
          name="HTTP methods"
          id=""
          class="p-2 border-0 rounded-3 text-center"
        >
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="HEAD">HEAD</option>
          <option value="DELETE">DELETE</option>
        </select>
        <input
          type="text"
          name=""
          id=""
          placeholder="URL link"
          class="p-2 border-0"
        />
        <button
          type="submit"
          class="p-2 px-4 rounded-3 border-0 bg-primary text-white"
        >
          SEND
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HTTPDetails",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../style/partials/variables.scss";

h1 {
  font-size: 50px;
}
.input {
  background-color: $bg-color-light;

  input {
    background-color: $bg-color-light;
    width: 70%;
  }
  select {
    appearance: none;
  }
}
</style>
