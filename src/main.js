/*
 * @Author: xiekc
 * @Date: 2021-09-15 21:21:35
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-15 22:53:06
 * @FilePath: /vue-demo-project/src/main.js
 */
import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import store from '@/store';
import request from '@/utils/axios';
import CKEditor from 'ckeditor4-vue';

// 引入css样式
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';
import './permission.js';
Vue.config.productionTip = false;
Vue.prototype.$request = request;
// 引入elementUI
Vue.use(ElementUI);
// 引入富文本编辑器
Vue.use(CKEditor);
import router from '@/router';
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
