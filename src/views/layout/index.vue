<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <sider />
      </el-aside>
      <el-container>
        <el-header><my-header /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import SiderBar from '@/views/layout/SiderBar';
import Header from '@/views/layout/Header';
export default {
    SiderBar,
    'my-header': Header,
};
</script>

<style lang="scss" scoped></style>
