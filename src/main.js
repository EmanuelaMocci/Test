import Vue from "vue";
import App from "./App.vue";
// Bootstrap //
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);

// font awesome

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faSearch } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faSearch);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./style/app.scss";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
