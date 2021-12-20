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

      <el-submenu index="3">
        <template #title>
          <i class="el-icon-edit-outline"></i>
          <span slot="title">表单页</span>
        </template>
        <router-link to="/form/basic-form" tag="span">
          <el-menu-item index="3-1">基础表单</el-menu-item>
        </router-link>
        <router-link to="/form/step-form">
          <el-menu-item index="3-2">分步表单</el-menu-item>
        </router-link>
        <router-link to="/form/advanced-form">
          <el-menu-item index="3-2">高级表单</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="5">
        <template #title>
          <i class="el-icon-s-grid"></i>
          <span slot="title">列表页</span>
        </template>
        <el-submenu index="6">
          <template #title>
            <i class="el-icon-edit-outline"></i>
            <span slot="title">搜索列表</span>
          </template>
          <router-link to="/list/basic-list" tag="span">
            <el-menu-item index="6-1">搜索列表（文章）</el-menu-item>
          </router-link>
          <router-link to="/list/table-list">
            <el-menu-item index="6-2">搜索列表（项目）</el-menu-item>
          </router-link>
          <router-link to="/list/card-list">
            <el-menu-item index="6-3">搜索列表（应用）</el-menu-item>
          </router-link>
        </el-submenu>
        <router-link to="/list/table-list" tag="span">
          <el-menu-item index="5-1">查询列表</el-menu-item>
        </router-link>
        <router-link to="/list/basic-list">
          <el-menu-item index="5-2">标准列表</el-menu-item>
        </router-link>
        <router-link to="/list/card-list">
          <el-menu-item index="5-3">卡片列表</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="6">
        <template #title>
          <i class="el-icon-c-scale-to-original"></i>
          <span slot="title">详情页</span>
        </template>
        <router-link to="/profile/basic" tag="span">
          <el-menu-item index="6-1">基础详情页</el-menu-item>
        </router-link>
        <router-link to="/profile/advanced">
          <el-menu-item index="6-2">高级详情页</el-menu-item>
        </router-link>
        <!-- <router-link to="/goods/goodsData2">
          <el-menu-item index="3-2">高级表单</el-menu-item>
        </router-link> -->
      </el-submenu>

      <el-submenu index="7">
        <template #title>
          <i class="el-icon-circle-check"></i>
          <span slot="title">结果页</span>
        </template>
        <router-link to="/profile/basic" tag="span">
          <el-menu-item index="7-1">成功页</el-menu-item>
        </router-link>
        <router-link to="/result/fail">
          <el-menu-item index="7-2">失败页</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="8">
        <template #title>
          <i class="el-icon-warning-outline"></i>
          <span slot="title">异常页</span>
        </template>
        <router-link to="/exception/403" tag="span">
          <el-menu-item index="8-1">403</el-menu-item>
        </router-link>
        <router-link to="/exception/404">
          <el-menu-item index="8-2">404</el-menu-item>
        </router-link>
        <router-link to="/exception/500">
          <el-menu-item index="8-3">500</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="9">
        <template #title>
          <i class="el-icon-user"></i>
          <span slot="title">个人页</span>
        </template>
        <router-link to="/account/center" tag="span">
          <el-menu-item index="9-1">个人中心</el-menu-item>
        </router-link>
        <router-link to="/account/settings">
          <el-menu-item index="9-2">个人设置</el-menu-item>
        </router-link>
      </el-submenu>

      <el-submenu index="10">
        <template #title>
          <i class="el-icon-edit"></i>
          <span slot="title">图形编辑器</span>
        </template>
        <router-link to="/editor/flow" tag="span">
          <el-menu-item index="10-1">流程编辑器</el-menu-item>
        </router-link>
        <router-link to="/editor/mind">
          <el-menu-item index="10-2">脑图编辑器</el-menu-item>
        </router-link>
        <router-link to="/editor/koni">
          <el-menu-item index="10-3">拓扑编辑器</el-menu-item>
        </router-link>
      </el-submenu>

      <!-- <el-submenu index="1">
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
      </el-submenu> -->

      <!-- <el-submenu index="2">
        <template #title>
          <i class="el-icon-menu"></i>
          <span slot="title">图表管理</span>
        </template>
        <router-link :to="{ name: 'charts' }" tag="span">
          <el-menu-item index="2-1">图表</el-menu-item>
        </router-link>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-submenu> -->

      <!-- <el-submenu index="4">
        <template #title>
          <i class="el-icon-setting"></i>
          <span slot="title">测试页面</span>
        </template>
        <router-link to="/test/test1" tag="span">
          <el-menu-item index="4-1">测试页面1</el-menu-item>
        </router-link>
        <router-link to="/test/test2" tag="span">
          <el-menu-item index="4-2">测试页面2</el-menu-item>
        </router-link>
        <router-link to="/test/test3" tag="span">
          <el-menu-item index="4-3">测试页面3</el-menu-item>
        </router-link>
        <router-link to="/test/test4" tag="span">
          <el-menu-item index="4-4">测试页面4</el-menu-item>
        </router-link>
        <router-link to="/test/test5" tag="span">
          <el-menu-item index="4-5">测试页面5</el-menu-item>
        </router-link>
      </el-submenu> -->
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
  width: 208px;
  // min-height: 400px;
  min-height: 100%;
}
/* 侧边栏 结束 */

.my-siderbar {
  height: 100%;
}
::v-deep .el-submenu__title {
  text-align: left;
}
::v-deep .el-menu-item {
  text-align: left;
}
* {
  text-decoration: none;
}
</style>
