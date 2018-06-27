import Vue from "vue";
import Router from "vue-router";
import Balance from "./views/Balance.vue";
import Transfer from "./views/Transfer.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "balance",
      component: Balance
    },
    {
      path: "/transfer",
      name: "transfer",
      component: Transfer
    }
  ]
});
