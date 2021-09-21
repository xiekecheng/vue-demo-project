import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
// const Home = () => import("@/views/home/Home");
const Goods = () => import("@/views/goods/Goods");
const Charts = () => import("@/views/chart/Charts");
// const router = new VueRouter({
//   mode: "hash",
//   routes: [
//     {
//       path: "/home",
//       components: Home,
//     },
//     {
//       path: "/goods",
//       components: Goods,
//     },
//     {
//       path: "/chart",
//       components: Charts,
//     },
//   ],
// });
// const Foo = { template: "<div>foo</div>" };
// const Bar = { template: "<div>bar</div>" };

const routes = [
  { path: "/goods", component: Goods },
  { path: "/bar", component: Charts },
];
const router = new VueRouter({
  routes,
});
export default router;
