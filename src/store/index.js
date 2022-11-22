import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import hotSearch from './modules/hotSearch';
import account from './modules/account';
import right from "./modules/right";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    user,
    hotSearch,
    account,
    right,
  }
});

export default store;
