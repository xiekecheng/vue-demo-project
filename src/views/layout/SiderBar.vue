<template>
  <div class="my-siderbar">
    <!-- 侧边栏 开始 -->
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-submenu index="0">
        <template #title>
          <i class="el-icon-odometer"></i>
          <span slot="title">DashBoard</span>
        </template>
        <router-link to="/dashboard/analysis">
          <el-menu-item index="0-1"> 分析页 </el-menu-item>
        </router-link>
        <router-link to="/dashboard/monitor">
          <el-menu-item index="0-2"> 监控页 </el-menu-item>
        </router-link>
        <router-link to="/dashboard/workplace">
          <el-menu-item index="0-3"> 工作台 </el-menu-item>
        </router-link>
      </el-submenu>
      <el-submenu index="1">
        <template #title>
          <i class="el-icon-location"></i>
          <span slot="title">商品管理</span>
        </template>
        <router-link to="/goods/goodsHome" tag="span">
          <el-menu-item index="1-1">商品列表</el-menu-item>
        </router-link>
        <router-link to="/goods/goodsAdd" tag="span">
          <el-menu-item index="1-2">发布商品</el-menu-item>
        </router-link>
        <router-link to="/goods/goodsList" tag="span">
          <el-menu-item index="1-3">CNode论坛</el-menu-item>
        </router-link>
        <router-link to="/goods/goodsData" tag="span">
          <el-menu-item index="1-4">数据</el-menu-item>
        </router-link>
        <router-link to="/goods/goodsData2" tag="span">
          <el-menu-item index="1-5">数据2</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="2">
        <template #title>
          <i class="el-icon-menu"></i>
          <span slot="title">图表管理</span>
        </template>
        <router-link :to="{ name: 'charts' }" tag="span">
          <el-menu-item index="2-1">图表</el-menu-item>
        </router-link>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template #title>
          <i class="el-icon-document"></i>
          <span slot="title">商品管理</span>
        </template>
        <router-link :to="{ name: 'home' }" tag="span">
          <el-menu-item index="3-1">首页</el-menu-item>
        </router-link>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template #title>
          <i class="el-icon-setting"></i>
          <span slot="title">测试页面</span>
        </template>
        <router-link :to="{ name: 'test1' }" tag="span">
          <el-menu-item index="4-1">测试页面1</el-menu-item>
        </router-link>
        <router-link :to="{ name: 'test2' }" tag="span">
          <el-menu-item index="4-2">测试页面2</el-menu-item>
        </router-link>
        <router-link :to="{ name: 'test3' }" tag="span">
          <el-menu-item index="4-3">测试页面3</el-menu-item>
        </router-link>
        <router-link :to="{ name: 'test4' }" tag="span">
          <el-menu-item index="4-4">测试页面4</el-menu-item>
        </router-link>
        <router-link :to="{ name: 'test5' }" tag="span">
          <el-menu-item index="4-5">测试页面5</el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
    <!-- 侧边栏 结束 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
    };
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

<style lang="scss" scoped>
/* 侧边栏 开始 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
  min-height: 100%;
}
/* 侧边栏 结束 */

.my-siderbar {
  height: 100%;
}
* {
  text-decoration: none;
}
</style>
