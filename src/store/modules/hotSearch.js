import { getSearchList } from '@/api/hotSearch.js';
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
		setTotal(state,payload){
			state.searchTotal = payload
		}
  },
  actions: {
    getSearchList(store, payload) {
      getSearchList(payload).then((res) => {
        store.commit('setSearchList', res.data.result);
				store.commit('setTotal',res.data.total)
      });
    },
  },
};
