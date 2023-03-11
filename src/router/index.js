import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const Layout = () => import('@/views/layout');

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
  },
  {
    path: '/dashboard', // DashBoard
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
  // 登录
  { path: '/login', component: () => import('@/views/login') },
  // 注册
  { path: '/login/register', component: () => import('@/views/login/register') },
  {
    path: '/form', // 表单页
    component: Layout,
    children: [
      { path: 'basic-form', component: () => import('@/views/form/basic-form') },
      { path: 'advanced-form', component: () => import('@/views/form/advanced-form') },
      { path: 'step-form', component: () => import('@/views/form/step-form') },
    ],
  },
  {
    path: '/list', // 列表页
    component: Layout,
    children: [
      { path: 'table-list', component: () => import('@/views/list/table-list') },
      { path: 'basic-list', component: () => import('@/views/list/basic-list') },
      { path: 'card-list', component: () => import('@/views/list/card-list') },
      { path: 'search-list-article', component: () => import('@/views/list/search/article') },
      { path: 'search-list-project', component: () => import('@/views/list/search/projects') },
      { path: 'search-list-application', component: () => import('@/views/list/search/applications') },
    ],
  },
  {
    path: '/profile', // 详情页
    component: Layout,
    children: [
      { path: 'basic', component: () => import('@/views/profile/basic') },
      { path: 'advanced', component: () => import('@/views/profile/advanced') },
    ],
  },
  {
    path: '/result', // 结果页
    component: Layout,
    children: [
      { path: 'fail', component: () => import('@/views/result/fail') },
      { path: 'success', component: () => import('@/views/result/success') },
    ],
  },
  {
    path: '/exception', // 异常页
    component: Layout,
    children: [
      { path: '403', component: () => import('@/views/exception/403') },
      { path: '404', component: () => import('@/views/exception/404') },
      { path: '500', component: () => import('@/views/exception/500') },
    ],
  },
  {
    path: '/account', // 个人页
    component: Layout,
    children: [
      { path: 'center', component: () => import('@/views/account/center') },
      { path: 'settings', component: () => import('@/views/account/settings') },
      { path: 'addUser', component: () => import('@/views/account/addUser') },
    ],
  },
  {
    path: '/editor', // 图形编辑器
    component: Layout,
    children: [
      { path: 'flow', component: () => import('@/views/editor/flow') },
      { path: 'mind', component: () => import('@/views/editor/mind') },
      { path: 'koni', component: () => import('@/views/editor/koni') },
    ],
  },
  {
    path: '/component', // 组件
    component: Layout,
    children: [
      { path: 'richtext', component: () => import('@/views/component/richtext') },
      { path: 'tree', component: () => import('@/views/component/tree') },
      { path: 'split-pane', component: () => import('@/views/component/split-pane') },
      { path: 'file-upload', component: () => import('@/views/component/file-upload') },
    ],
  },
  // 页面不存在
  { path: '*', component: () => import('@/views/error/404') },
];
const router = new VueRouter({
  mode: 'history',
  routes,
});
export default router;
