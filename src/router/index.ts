import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Participate from "../views/myParticipate/myParticipate.vue";
import Article from "../views/article/article.vue";
import AboutMe from "../views/aboutMe/aboutMe.vue";
import Introduction from "../components/myComponents/introduction.vue";
import YzfInput from "../components/myComponents/yzfInput.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/participate",
    name: "Participate",
    component: Participate,
    props: true,
    children: [
      {
        path: "/participate/introduction",
        name: "Introduction",
        component: Introduction
      },
      {
        path: "/participate/yzfInput",
        name: "YzfInput",
        component: YzfInput
      }
    ]
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
