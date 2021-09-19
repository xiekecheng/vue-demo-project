import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () => import("@/views/home/Home");

const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/home", components: Home }],
});

export default router;
