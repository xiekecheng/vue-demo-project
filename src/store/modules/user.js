const moduleA = {
	namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count ++;
    },
  },
  // actions: { ... },
  // getters: { ... }
};
export default moduleA