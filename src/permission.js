import router from './router';
import { getToken } from '@/utils/auth';
const whiteList = ['/login', '/auth-redirect', '/login/register']; // no redirect whitelist
router.beforeEach((to, from, next) => {
  const hasToken = getToken();
  if (!hasToken) {
    // 没有token
    // 属于白名单内,则可以跳转
    if (whiteList.includes(to.path)) {
      next();
    } else {
      // 否则跳转到登录页
      next('/login');
    }
  } else {
    // 有token
    next();
  }
});
