<!-- 侧边栏Menu -->
<template>
  <div class="my-siderbar">
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      background-color="#ffffff"
      :collapse="isCollapse"
    >
      <el-sub-menu v-for="(item, index) in routes" :key="index" :index="item.to || item.index">
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.menu }}</span>
        </template>
        <!-- 子级列表 -->
        <el-sub-menu v-for="subItem in item.subMenu" :key="subItem.index" :index="subItem.to || item.index">
          <template #title>
            <span>{{ subItem.menu }}</span>
          </template>
          <router-link v-for="(route, routeIdx) in subItem.content" :key="routeIdx" :to="route.to || item.index">
            <el-menu-item :index="route.to"> {{ route.menu }}</el-menu-item>
          </router-link>
        </el-sub-menu>
        <!-- 子级列表 -->
        <router-link v-for="(route, routeIdx) in item.content" :key="routeIdx" :to="route.to || item.index">
          <el-menu-item :index="route.to"> {{ route.menu }}</el-menu-item>
        </router-link>
      </el-sub-menu>
    </el-menu>
    <!-- 侧边栏 结束 -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import routes from '@/router/routes';

const route = useRoute();

const isCollapse = ref(false);

const activeMenu = computed(() => {
  return route.path;
});
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 208px;
  min-height: 100%;
}

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
