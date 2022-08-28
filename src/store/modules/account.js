import { getInitInfo } from '@/api/account';

export default {
  namespaced: true,
  state: {},
  mutations: {
  },
  actions: {
    // 获取是否登录信息
    async getInitInfo() {
      return getInitInfo()
    },
  },
};
