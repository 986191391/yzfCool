import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Participate from "../views/myParticipate/myParticipate.vue";
import Article from "../views/article/article.vue";
import MyBro from "../views/myBro/myBro.vue";
import AboutMe from "../views/aboutMe/aboutMe.vue";
import Introduction from "../views/myParticipate/introduction/introduction.vue";
import YzfInput from "../views/myParticipate/components/yzfInput.vue";
import YzfSelect from "../views/myParticipate/components/yzfSelect.vue";
import YzfSearch from "../views/myParticipate/components/yzfSearch.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/participate",
    name: "Participate",
    component: Participate,
    props: true,
    children: [
      {
        path: "/participate/introduction",
        name: "Introduction",
        component: Introduction,
        props: true
      },
      {
        path: "/participate/yzfInput",
        name: "YzfInput",
        component: YzfInput,
        props: true
      },
      {
        path: "/participate/yzfSelect",
        name: "YzfSelect",
        component: YzfSelect,
        props: true
      },
      {
        path: "/participate/yzfSearch",
        name: "YzfSearch",
        component: YzfSearch,
        props: true
      }
    ]
  },
  {
    path: "/article",
    name: "Article",
    component: Article,
    props: true
  },
  {
    path: "/myBro",
    name: "MyBro",
    component: MyBro,
    props: true
  },
  {
    path: "/aboutme",
    name: "AboutMe",
    component: AboutMe,
    props: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
