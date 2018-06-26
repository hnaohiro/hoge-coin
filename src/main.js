import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { getWeb3 } from "./api/getWeb3";

window.web3 = getWeb3();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
