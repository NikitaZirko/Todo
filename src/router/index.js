import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFoundComponent from "../views/NotFoundComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: NotFoundComponent
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/note",
    name: "Note",
    component: () => import("../views/Note.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
