import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Home = () => import('@/views/home/Home');
// 商品模块
const Goods = () => import('@/views/goods/Goods');
const GoodsAdd = () => import('@/views/goods/GoodsAdd');
const GoodsList = () => import('@/views/goods/GoodsList');
const GoodsData = () => import('@/views/goods/GoodsData');
const GoodsData2 = () => import('@/views/goods/GoodsData2');
const Charts = () => import('@/views/chart/Charts');
const Layout = () => import('@/views/layout');

// const Dashboard = () => import('@/views/dashboard');
// 测试页面
const Test1 = () => import('@/views/test/Test1');
const Test2 = () => import('@/views/test/Test2');
const Test3 = () => import('@/views/test/Test3');
const Test4 = () => import('@/views/test/Test4');
const Test5 = () => import('@/views/test/Test5');
const Children1 = () => import('@/views/test/components/Children1');
const Children2 = () => import('@/views/test/components/Children2');
const Children3 = () => import('@/views/test/components/Children3');
const Children4 = () => import('@/views/test/components/Children4');

// 登录页面
const Login = () => import('@/views/login');
// 错误页面
const Error = () => import('@/views/error/404');
const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    // children:[
    //   {
    //     path:'dashboard',
    //     component:Dashboard
    //   }
    // ]
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/analysis',
    component: Layout,
    children: [
      {
        path: 'analysis',
        component: () => import('@/views/dashboard/analysis'),
        meta: {
          title: '分析页',
        },
      },
      {
        path: 'monitor',
        component: () => import('@/views/dashboard/monitor'),
        meta: {
          title: '监控页',
        },
      },
      {
        path: 'workplace',
        component: () => import('@/views/dashboard/workplace'),
        meta: {
          title: '工作台',
        },
      },
    ],
  },
  {
    path: '/goods',
    redirect: '/goods/goodsHome',
    component: Layout,
    children: [
      {
        path: 'goodsHome',
        component: Goods,
      },
      {
        path: 'goodsAdd',
        component: GoodsAdd,
      },
      {
        path: 'goodsList',
        component: GoodsList,
      },
      {
        path: 'goodsData',
        component: GoodsData,
      },
      {
        path: 'goodsData2',
        component: GoodsData2,
      },
    ],
  },
  // 商品管理
  { path: '/home', name: 'home', component: Home },
  { path: '/charts', name: 'charts', component: Charts },
  { path: '/test1', name: 'test1', component: Test1 },
  { path: '/test2', name: 'test2', component: Test2 },
  { path: '/test3', name: 'test3', component: Test3 },
  { path: '/test5', name: 'test5', component: Test5 },
  {
    path: '/test4',
    name: 'test4',
    component: Test4,
    children: [
      { path: 'children1', component: Children1 },
      { path: '/test4/children2', name: 'children2', component: Children2 },
      { path: 'children3', component: Children3 },
      { path: 'children4/:id', component: Children4 },
    ],
  },
  { path: '/login', component: Login },
  // 页面不存在
  { path: '*', component: Error },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
