<template>
  <div>
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
        <router-link :to="{ name: 'goods' }" tag="span">
          <el-menu-item index="1-1">商品列表</el-menu-item>
        </router-link>
        <router-link :to="{ name: 'goodsAdd' }" tag="span">
          <el-menu-item index="1-2">发布商品</el-menu-item>
        </router-link>
        <router-link :to="{ name: 'goodsList' }" tag="span">
          <el-menu-item index="1-2">CNode论坛</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">图表管理</span>
        </template>
        <router-link :to="{ name: 'charts' }" tag="span">
          <el-menu-item index="2-1">图表</el-menu-item>
        </router-link>
        <!-- <router-link :to="{ name: 'charts' }"> -->
        <el-menu-item index="2-2">选项2</el-menu-item>
        <!-- </router-link> -->
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">商品管理</span>
        </template>
        <router-link :to="{ name: 'home' }" tag="span">
          <el-menu-item index="3-1">首页</el-menu-item>
        </router-link>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
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
  data () {
    return {
      isCollapse: true,
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="scss" scoped>
/* 侧边栏 开始 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/* 侧边栏 结束 */
</style>
