# vue-demo-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



脚手架安装

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

创建项目

```bash
vue create vue-demo-project
# OR
vue ui
```

添加eslint校验

```
vue add eslint
```

集成ElementUI框架

```
npm i element-ui -S

或者使用标签引用
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```

引入Element

```js
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

引入Vue-router

```
// 安装
npm install vue-router

// 使用
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```



支持sass

```
npm install -D sass-loader sass
```

