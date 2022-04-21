<template>
  <div class="container d-block d-md-none">
    <div class="row">
      <div class="col">
        <!-- button swipe -->
        <div
          class="swipe-button-container"
          v-touch:swipe="swipeHandler"
          v-touch="$emit('swipe', swiped)"
        >
          <div class="swipe-button"></div>
        </div>
        <!-- /button swipe -->
        <div :class="swiped == true ? 'd-block' : 'd-none'">
          <h1 class="title text-start mx-2 my-3 fw-bold fs-3">
            Timing Analysis
          </h1>

          <!-- chart -->
          <div class="chart-container">
            <div
              class="chart d-flex justify-content-center align-items-center mx-auto mt-5"
            >
              <!-- chart values -->
              <div class="values top fw-bold">600</div>
              <div class="values middle fw-bold">700</div>
              <div class="values bottom fw-bold">800</div>
              <!-- /chart values -->

              <div class="top">
                <div class="chart-middle">
                  <h3 class="pt-5 fs-1">720</h3>
                  <h4 class="fs-4">Great!</h4>
                </div>
                <div class="circle"></div>
              </div>

              <div class="bottom">
                <div class="chart-middle"></div>
                <div class="circle"></div>
              </div>
            </div>
            <!-- /chart -->

            <!-- text -->
            <div>
              <h2 class="text-top fw-bold">Page Load</h2>
              <h3 class="text-bottom fw-bold" v-if="responseTime">
                {{ responseTime }}s
              </h3>
            </div>
            <!-- /text -->

            <div
              class="chart d-flex justify-content-center align-items-center mx-auto mt-5"
            >
              <!-- chart values -->
              <div class="values top fw-bold">600</div>
              <div class="values middle fw-bold">700</div>
              <div class="values bottom fw-bold">800</div>
              <!-- /chart values -->

              <div class="top">
                <div class="chart-middle">
                  <h3 class="pt-5 fs-1">720</h3>
                  <h4 class="fs-4">Great!</h4>
                </div>
                <div class="circle"></div>
              </div>

              <div class="bottom">
                <div class="chart-middle"></div>
                <div class="circle"></div>
              </div>
            </div>
            <!-- /chart -->

            <!-- text -->
            <div>
              <h2 class="text-top fw-bold">First Interaction</h2>
              <h3 class="text-bottom fw-bold" v-if="responseTime">
                {{ responseTime }}s
              </h3>
            </div>
            <!-- /text -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: {
    responseTime: {
      type: [Number, String],
    },
  },
  data() {
    return {
      swiped: false,
    };
  },
  methods: {
    swipeHandler(direction) {
      if (direction == "top") {
        this.swiped = true;
      } else if (direction == "bottom") {
        this.swiped = false;
      }
      console.log(direction);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/partials/variables.scss";
@import "../style/app.scss";

.container {
  position: relative;
  .swipe-button-container {
    margin-top: 15px;
    border-top: 1px solid $chart-text2;
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
  .title {
    color: $chart-text1;
  }
  .chart {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: conic-gradient(
      $chart-color1 -150deg,
      $chart-color2 54deg,
      $chart-color1 53deg,
      $chart-color1 55deg,
      $chart-color1 56deg,
      $chart-color3 0 105deg,
      $chart-color1 104deg,
      $chart-color1 107deg,
      $chart-color4 0 140deg,
      $chart-color1 0 218deg,
      $chart-color5 0
    );
    .top {
      .chart-middle {
        height: 180px;
        width: 180px;
        background-color: $chart-color1;
        border-radius: 50%;
      }
      .circle {
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 4px solid $chart-color3;
        background-color: $chart-color1;
        right: 4px;
        top: 50px;
      }
    }
  }
  .text-top {
    color: $chart-text2;
  }
  .text-bottom {
    color: $chart-text3;
  }
  .values.top {
    position: absolute;
    top: -20px;
    font-size: 10px;
  }
  .values.middle {
    position: absolute;
    top: 30px;
    right: -10px;
    font-size: 10px;
  }
  .values.bottom {
    position: absolute;
    top: 120px;
    right: -25px;
    font-size: 10px;
  }
}
</style>
