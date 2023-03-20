import * as Vue from 'vue';
import App from './App.vue';
import Element from 'element-plus';
import store from '@/store';
import request from '@/utils/axios';
import CKEditor from 'ckeditor4-vue';

// 引入css样式
import 'element-plus/theme-chalk/index.css';

// import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css';
import './permission.js';
import router from '@/router';

window.$vueApp = Vue.createApp(App);

window.$vueApp.config.globalProperties.$request = request;
// 引入elementUI
window.$vueApp.use(Element);
// 引入富文本编辑器
window.$vueApp.use(CKEditor);
// window.$vueApp.use(store)
window.$vueApp.use(router);
window.$vueApp.mount('#app');
window.$vueApp.config.globalProperties.routerAppend = (path, pathToAppend) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend;
};
window.$vueApp.use(store);
// window.$vueApp.use(router)
