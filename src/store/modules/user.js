import { login } from '@/api';
// import { reject, resolve } from 'core-js/fn/promise';
export default {
  namespaced: true,
  state: {
    count: 0,
    userInfo: {
      avatar: '',
      email: '',
      gender: '',
      id: '',
      password: '',
      phone: '',
      role: '',
      username: '',
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUserInfo(state, payload) {
      state.userInfo = payload;
    },
  },
  actions: {
    login({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        login(payload)
          .then((res) => {
            console.log('res', res);
            commit('setUserInfo', res.data);
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
  },
  // getters: { ... }
};
// export default moduleA
