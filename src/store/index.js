// import * as Vue from 'vue'
import * as Vuex from 'vuex'
import user from './modules/user'
import hotSearch from './modules/hotSearch'
import account from './modules/account'
import right from './modules/right'

const store = Vuex.createStore({
  modules: {
    user,
    hotSearch,
    account,
    right,
  },
})

export default store
