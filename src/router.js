import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("./views/List.vue"),
    },
    {
      path: "/archive",
      component: () => import("./views/Archive.vue"),
    },
  ],
});
