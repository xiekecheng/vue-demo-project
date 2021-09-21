import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    // 增加
    increment(state) {
      state.count++;
    },
    // 减少
    decrement(state) {
      state.count--;
    },
  },
});

export default store;
