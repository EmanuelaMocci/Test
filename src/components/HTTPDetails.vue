<template>
  <div>
    <div class="container" :class="swiped ? 'd-none' : ''">
      <!-- HTTP url -->
      <div class="row">
        <div
          class="col-12 d-flex flex-column order-1 order-md-0"
          v-if="response"
        >
          <h1 class="mt-5">{{ response.status }}</h1>
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
            class="p-2 border-0"
            v-model="api_url"
          />
          <button
            type="submit"
            class="p-2 px-4 rounded-3 border-0 bg-primary text-white fs-5"
            @click="httpCall"
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
      <div :class="response == ture ? 'height-block' : ''"></div>
      <!-- /HTTP url -->

      <!-- cards -->
      <div class="row">
        <div class="d-flex cards mt-4 text-start gap-3" v-if="response">
          <!-- left card -->
          <div class="col-4 border left-card rounded-3">
            <div class="fs-5 pb-4 p-2">URL INFO</div>
            <div class="p-2">
              <h5 class="fw-bold">DOMAIN</h5>
              <span>{{ response.config.url }}</span>
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
            <div class="fs-5 p-3" v-if="response">
              HTTP/1. 1 {{ response.status }} {{ response.statusText }}
            </div>
            <div class="fs-5 p-3">Date: {{ dateBuilder() }}</div>
            <div class="fs-5 p-3">Server: Apache/2.2.14(Win32)</div>
          </div>
          <!-- /right card -->
        </div>
      </div>

      <!-- /cards -->

      <!-- share -->
      <div class="row">
        <div class="share d-none d-md-block" v-if="response">
          <h2 class="mt-4">SHARE</h2>
          <div class="mx-auto fw-bold rounded-pill py-1 my-3">
            {{ response.config.url }}
          </div>
        </div>
      </div>
    </div>
    <!-- /share -->
    <Chart :responseTime="responseTime" @swipe="swipeMethod" />
  </div>
</template>

<script>
import axios from "axios";
import Chart from "../components/Chart.vue";

export default {
  name: "HttpDetails",
  components: { Chart },
  data() {
    return {
      response: null,
      responseTime: null,
      api_url: "http://localhost:3000/dataseries",
      swiped: null,
    };
  },
  methods: {
    swipeMethod(swiped) {
      this.swiped = swiped;
      console.log(swiped);
    },
    async httpCall() {
      try {
        // get start time taken from API call
        const start = Date.now();
        const response = await axios.get(`${this.api_url}`);

        this.response = response;
        console.log(response);

        // get end time taken from API call and calculate it
        const finish = Date.now();
        this.responseTime = ((finish - start) / 1000).toFixed(1);
        console.log(this.responseTime);
      } catch (error) {
        console.log(error);
      }
    },
    dateBuilder() {
      let d = new Date();
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day}, ${date} ${month} ${year}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../style/partials/variables.scss";
@import "../style/app.scss";

.height-block {
  min-height: 80vh;
  background-color: transparent;
}
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
.swipe-button-container {
  border-top: 1px solid $chart-text2;
  margin-top: 15px;
  height: 40px;
  border-radius: 20px;
  .swipe-button {
    height: 5px;
    width: 50%;
    margin: 15px auto;
    background-color: $chart-text2;
    border-radius: 5px;
  }
}
</style>
