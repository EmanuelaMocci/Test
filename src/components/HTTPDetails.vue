<template>
  <div class="container">
    <!-- HTTP url -->
    <div class="row">
      <div class="col-12 d-flex flex-column order-1 order-md-0">
        <h1 class="mt-5">200</h1>
        <p class="fs-5">Everything is fine!</p>
      </div>

      <!-- input -->
      <div
        class="col-xs-12 col-lg-7 input p-2 rounded-3 mx-auto my-2 d-flex justify-content-between order-0 order-md-1"
      >
        <select
          name="HTTP methods"
          id=""
          class="py-2 px-3 fs-5 border-0 rounded-3 text-center"
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
          class="p-2 px-4 rounded-3 border-0 bg-primary text-white fs-5"
        >
          <span class="d-none d-md-block">SEND</span>
          <font-awesome-icon
            icon="fa-solid fa-search"
            class="d-block d-md-none"
          />
        </button>
      </div>
    </div>
    <!-- /input -->

    <!-- /HTTP url -->

    <!-- cards -->
    <div class="row">
      <div class="d-flex cards mt-4 text-start gap-3">
        <!-- left card -->
        <div class="col-4 border left-card rounded-3">
          <div class="fs-5 pb-4 p-2">URL INFO</div>
          <div class="p-2">
            <h5 class="fw-bold">DOMAIN</h5>
            <span>www.yoursite.com</span>
          </div>
          <div class="p-2">
            <h5 class="fw-bold">SCHEME</h5>
            <span>HTTP</span>
          </div>
          <div class="p-2">
            <h5 class="fw-bold">PATH</h5>
            <span>home</span>
          </div>
        </div>
        <!-- /left card -->

        <!-- middle card -->
        <div class="col-4 border middle-card rounded-3">
          <div class="fs-5 ps-3 p-2">RESPONSE</div>
          <div class="fs-5 p-3">HTTP/1. 2 302</div>
          <div class="fs-5 p-3">Location:/newpage.php</div>
          <div class="fs-5 p-3">Server: Apache/2.2.14(Win32)</div>
        </div>
        <!-- /middle card -->

        <!-- right card -->
        <div class="col-4 border right-card rounded-3">
          <div class="fs-5 ps-3 p-2">RESPONSE</div>
          <div class="fs-5 p-3">HTTP/1. 1 200 OK</div>
          <div class="fs-5 p-3">Date: Mon, 27 Jul 2009</div>
          <div class="fs-5 p-3">Server: Apache/2.2.14(Win32)</div>
        </div>
        <!-- /right card -->
      </div>
    </div>

    <!-- /cards -->

    <!-- share -->
    <div class="row">
      <div class="share">
        <h2 class="mt-4">SHARE</h2>
        <div class="mx-auto fw-bold rounded-pill py-1 my-3">
          httprequest.com/a23a8473a
        </div>
      </div>
    </div>
    <!-- /share -->
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
@import "../style/app.scss";

h1 {
  font-size: 60px !important;
}
.input {
  background-color: $bg-color-light-grey;
  height: 70px;

  input {
    background-color: $bg-color-light-grey;
    width: 70%;
  }
  select {
    appearance: none;
  }
}
.cards {
  height: 500px;
  overflow-x: scroll;
  .left-card {
    background-color: $bg-color-light-grey;
    width: 400px;
    div:first-child {
      background-color: $bg-color-light-grey;
    }
    div {
      background-color: $bg-color-dark-grey;
      margin-bottom: 1px;
    }
  }
  .middle-card,
  .right-card {
    width: 400px;
    div:not(:first-child) {
      background-color: $bg-color-light-grey;
    }
    div {
      margin-bottom: 1px;
    }
  }
}
.share {
  div {
    background-color: $bg-color-light-grey;
    width: 300px;
  }
}
</style>
