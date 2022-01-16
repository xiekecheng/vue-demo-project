import { getSearchList, getListFilterByPage } from '@/api/hotSearch.js';
export default {
  namespaced: true,
  state: {
    searchList: [],
    searchTotal: 0,
  },
  mutations: {
    setSearchList(state, payload) {
      state.searchList = payload;
    },
    setTotal(state, payload) {
      state.searchTotal = payload;
    },
  },
  actions: {
    getSearchList(store, payload) {
      return new Promise((resolve, reject) => {
        getSearchList(payload)
          .then((res) => {
            // store.commit('setSearchList', res.data.result);
            // store.commit('setTotal',res.data.total)
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    // 分页筛选数据
    getListFilterByPage(store, payload) {
      return new Promise((resolve, reject) => {
        getListFilterByPage(payload)
          .then((res) => {
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
  },
};
