import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Modal from "./components/Modal.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fab);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.component("app-modal", Modal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
