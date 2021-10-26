/*
 * @Author: xiekc
 * @Date: 2021-09-15 21:21:35
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-15 22:53:06
 * @FilePath: /vue-demo-project/src/main.js
 */
import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import store from "@/store";
// 引入css样式
import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;

// 引入elementUI
Vue.use(ElementUI);
import router from "@/router";
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
