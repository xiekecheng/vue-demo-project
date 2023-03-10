<!-- 主页面左侧菜单栏 -->
<template>
  <div class="my-siderbar">
    <el-menu
      default-active="2-1-1"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      :collapse="isCollapse"
    >
      <el-submenu v-for="(item, index) in routes" :key="index" :index="item.index">
        <template #title>
          <i :class="item.iconClass" />
          <span slot="title">{{ item.menu }}</span>
        </template>
        <!-- 子级列表 -->
        <el-submenu v-for="subItem in item.subMenu" :key="subItem.index" :index="subItem.index">
          <template #title>
            <span slot="title">{{subItem.menu}}</span>
          </template>
          <router-link v-for="(route, routeIdx) in subItem.content" :key="routeIdx" :to="route.to">
            <el-menu-item :index="route.index"> {{ route.menu }} </el-menu-item>
          </router-link>
        </el-submenu>
        <!-- 子级列表 -->
        <router-link v-for="(route, routeIdx) in item.content" :key="routeIdx" :to="route.to">
          <el-menu-item :index="route.index"> {{ route.menu }} </el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>
    <!-- 侧边栏 结束 -->
  </div>
</template>

<script>
import routes from '@/router/routes';
export default {
  data() {
    return {
      isCollapse: false,
      routes: routes,
    };
  },
};
</script>

<style lang="scss" scoped>
/* 侧边栏 开始 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 208px;
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
