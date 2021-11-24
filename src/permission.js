import router from './router';
import { getToken } from '@/utils/auth';
const whiteList = ['/login', '/auth-redirect']; // no redirect whitelist
router.beforeEach((to, from, next) => {
  const hasToken = getToken();
  console.log('token', hasToken);
  // console.log('to,from,next');
  // console.log(to, from, next);
  if (!hasToken) {
    // 没有token
    console.log('to.path', to.path);
    // 属于白名单内,则可以跳转
    console.log('whiteList.includes(to.path)', whiteList.includes(to.path));
    if (whiteList.includes(to.path)) {
      next();
    } else {
      // 否则跳转到登录页
      console.log('去登录');
      next('/login');
    }
  } else {
    // 有token
    console.log('已登录');
    next();
  }
});
