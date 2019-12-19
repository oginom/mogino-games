import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/ogipa",
    name: "ogipa",
    component: () => import("../views/Ogipa.vue")
  },
  {
    path: "/ogipa/privacypolicy",
    name: "ogipa-privacy-policy",
    component: () => import("../views/OgipaPrivacyPolicy.vue")
  },
  {
    path: "/hardle",
    name: "hardle",
    component: () => import("../views/Hardle.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
