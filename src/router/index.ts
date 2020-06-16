import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Component from "../components/myComponent/myComponent.vue";
import Article from "../components/article/article.vue";
import AboutMe from "../components/aboutMe/aboutMe.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/component",
    name: "Component",
    component: Component
  },{
    path: "/article",
    name: "Article",
    component: Article
  },{
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
