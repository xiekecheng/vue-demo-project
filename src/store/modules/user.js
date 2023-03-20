import { register, uploadAvatar } from '@/api/user'

export default {
  namespaced: true,
  state: {
    count: 0,
    userInfo: JSON.parse(localStorage.getItem('userInfo')),
  },
  mutations: {
    increment(state) {
      state.count++
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
    },
  },
  actions: {
    // 用户登陆
    login({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        login(payload)
          .then((res) => {
            commit('setUserInfo', res.data)
            // 将用户信息保存在localStorage
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
    // 添加用户
    register({ commit, state }, payload) {
      return register(payload)
    },
    // 上传头像
    uploadAvatar({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        uploadAvatar(payload)
          .then((res) => {
            resolve(res)
          })
          .catch((e) => {
            reject(e)
          })
      })
    },
  },
  // getters: { ... }
}
// export default moduleA
