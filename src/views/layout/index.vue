<template>
  <el-container>
    <el-aside width="200px;height:100%">
      <SiderBar />
    </el-aside>
    <el-container>
      <el-header><my-header /></el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// import SiderBar from '@/views/layout/SiderBar';
import Header from '@/views/layout/Header';
import SiderBar from './SiderBar';
export default {
  components: { SiderBar, 'my-header': Header },
};
</script>

<style lang="scss" scoped></style>
