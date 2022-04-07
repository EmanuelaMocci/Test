<template>
  <div class="container d-block d-md-none">
    <div class="row">
      <div class="col">
        <h1 class="title text-start mx-2 my-3 fw-bold fs-3">Timing Analysis</h1>

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
            <h3 class="text-bottom fw-bold">{{ responseTime }}s</h3>
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
            <h2 class="text-top fw-bold">Page Load</h2>
            <h3 class="text-bottom fw-bold">{{ responseTime }}s</h3>
          </div>
          <!-- /text -->
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
};
</script>

<style lang="scss" scoped>
@import "../style/partials/variables.scss";
@import "../style/app.scss";

.container {
  min-height: 100vh;
  .title {
    color: $chart-text1;
  }
  .chart {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-image: conic-gradient(
      white -150deg,
      #ffd222 54deg,
      white 53deg,
      white 55deg,
      white 56deg,
      #77e5b3 0 105deg,
      white 104deg,
      white 107deg,
      #23d683 0 140deg,
      white 0 218deg,
      #ff5353 0
    );
    .top {
      .chart-middle {
        height: 180px;
        width: 180px;
        background-color: white;
        border-radius: 50%;
      }
      .circle {
        position: absolute;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        border: 4px solid #77e5b3;
        background-color: white;
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
