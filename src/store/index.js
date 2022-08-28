import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import hotSearch from './modules/hotSearch';
import account from './modules/account';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    user,
    hotSearch,
    account
  }
});

export default store;
