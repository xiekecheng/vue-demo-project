<!--
 * @Author: xiekc
 * @Date: 2021-09-15 21:21:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-05-18 23:03:07
 * @FilePath: /vue-demo-project/src/App.vue
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #f0f2f5;
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

/* 侧边栏 开始 */
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
} */
/* 侧边栏 结束 */

/* 布局 */
html {
  height: 100%;
}

body {
  height: 100%;
}
#app {
  height: 100%;
}
.el-container {
  height: 100%;
}
/* 布局 */
</style>
