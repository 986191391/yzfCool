import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Participate from "../views/myParticipate/myParticipate.vue";
import Article from "../components/article/article.vue";
import AboutMe from "../components/aboutMe/aboutMe.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/participate",
    name: "Participate",
    component: Participate
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
