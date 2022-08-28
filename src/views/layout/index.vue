<template>
  <el-container>
    <el-aside width="200px;height:100%">
      <sider-bar></sider-bar>
    </el-aside>
    <el-container>
      <el-header height="48px">
        <my-header />
      </el-header>
      <el-main>
        <router-view />
        <div>
          <ul style="display: flex">
            <li>Vue Design Pro</li>
            <li></li>
            <li>Element UI</li>
          </ul>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SiderBar from '@/views/layout/SiderBar';
import Header from '@/views/layout/Header';
export default {
  components: {
    SiderBar,
    'my-header': Header,
  },
};
</script>

<style lang="scss" scoped></style>
