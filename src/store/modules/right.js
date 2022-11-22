export default {
  namespaced: true,
  state: () => ({
    isReadOnly: {},
  }),
  getters:{
    isRight(){

    }
  },
  mutations: {
    setIsReadOnly(state, payload) {
      console.log('mutations=>更改isReadOnly值', payload);
      const { key, value } = payload;
      state.isReadOnly[key] = value;
    },
  },
  actions: {
    // 调用接口获取是否是只读状态
    fetchReadOnlyData({ commit, state }, payload) {
      // 如果已存在值,不需要再调用接口
      if(state.isReadOnly[payload]){
        return
      }

      setTimeout(() => {
        console.log('actions=>更改isReadOnly值', true);
        commit('setIsReadOnly', payload,true);
      }, 150);
    },
  },
};