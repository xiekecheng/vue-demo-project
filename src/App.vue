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
      <el-aside width="200px">
        <!-- <router-link to="/goods">Goods</router-link> -->
        <!-- <Sider /> -->
        <!-- 侧边栏 开始 -->
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">商品管理</span>
            </template>
            <el-menu-item index="1-1">
              <router-link :to="{ name: 'goods' }" tag="span">商品</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">图表管理</span>
            </template>
            <el-menu-item index="2-1">
              <router-link :to="{ name: 'charts' }" tag="span"
                >图表</router-link
              >
            </el-menu-item>
            <!-- <router-link :to="{ name: 'charts' }"> -->
            <el-menu-item index="2-2">选项2</el-menu-item>
            <!-- </router-link> -->
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span slot="title">商品管理</span>
            </template>
            <el-menu-item index="3-1">
              <router-link :to="{ name: 'home' }" tag="span">首页</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span slot="title">设置管理</span>
            </template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
          </el-submenu>
        </el-menu>
        <!-- 侧边栏 结束 -->
      </el-aside>
      <el-container>
        <el-header>这里是头部</el-header>
        <el-main>
          <!-- 这里是椅子 -->
          <!-- <Test /> -->
          <!-- <Parent /> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// 引入组件
// import Counter from "@/views/app/Counter";
// import Test from "@/views/app/Test";
// import Parent from "@/views/app/Parent";
// import Sider from "@/views/layout/Sider";
export default {
  name: "App",
  data() {
    return {
      isCollapse: true,
    };
  },
  watch: {
    $route: function (newVal, oldVal) {
      console.log("newVal, oldVal", newVal, oldVal);
    },
    // question: function (newQuestion, oldQuestion) {
    //   this.answer = "Waiting for you to stop typing...";
    //   this.debouncedGetAnswer();
    // },
  },
  // 挂载组件
  components: {
    // Counter,
    // Test,
    // Parent,
    // Sider,
  },

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
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
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
