<!--
 * @Author: xiekc
 * @Date: 2021-09-15 21:21:35
 * @LastEditors: xkccoding@gmail.com
 * @LastEditTime: 2021-09-15 23:29:21
 * @FilePath: /vue-demo-project/src/App.vue
-->
<template>
  <div id="app">
    <el-container>
      <el-aside width="200px"> <Sider /> </el-aside>
      <el-container>
        <el-header>这里是头部</el-header>
        <el-main>
          <!-- <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
          </el-row> -->
          <!--  -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入组件
// import HelloWorld from "./components/HelloWorld.vue";
import Sider from "@/views/layout/Sider";
export default {
  name: "App",
  // 挂载组件
  components: {
    // HelloWorld,
    Sider,
  },
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  /* text-align: center; */
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
</style>
