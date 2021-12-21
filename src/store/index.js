import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user';
import hotSearch from './modules/hotSearch';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules:{
    user,
    hotSearch
  }
});

export default store;
