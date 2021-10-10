import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const Home = () => import("@/views/home/Home");
const Goods = () => import("@/views/goods/Goods");
const GoodsAdd = () => import("@/views/goods/GoodsAdd");
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
  { path: "/goods", name: "goods", component: Goods },
  { path: "/goodsAdd", name: "goodsAdd", component: GoodsAdd },
  { path: "/home", name: "home", component: Home },
  { path: "/charts", name: "charts", component: Charts },
];
const router = new VueRouter({
  mode: "history",
  routes,
});
export default router;
