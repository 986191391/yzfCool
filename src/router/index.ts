import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Zing from "../views/zing.vue";
import Kyomika from "../views/kyomika.vue";
import Jacket from "../views/jacket.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/zing",
    name: "zing",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Zing
  },
  {
    path: "/kyomika",
    name: "kyomika",
    component: Kyomika
  },
  {
    path: "/jacket",
    name: "jacket",
    component: Jacket
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
