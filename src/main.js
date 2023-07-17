import * as Vue from 'vue';
import App from './App.vue';
import Element from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import request from '@/utils/axios';
import CKEditor from '@mayasabha/ckeditor4-vue3';
import pinia from '@/store';
// 引入css样式
import 'element-plus/theme-chalk/index.css';

import 'normalize.css';
// 权限
import './permission';

import router from '@/router';
window.$vueApp = Vue.createApp(App);
window.$vueApp.use(pinia);
window.$vueApp.config.globalProperties.$request = request;
// 引入elementUI
window.$vueApp.use(Element);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  window.$vueApp.component(key, component);
}
// 引入富文本编辑器
window.$vueApp.use(CKEditor);
window.$vueApp.use(router);
window.$vueApp.mount('#app');
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend;
};
