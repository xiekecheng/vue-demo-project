<template>
  <footer>
    <div style="display: flex; justify-content: center">
      <span>Vue Design Pro</span>
      <span>
        <!--<el-icon>-->
        <!--  <el-icon-platform-eleme />-->
        <!--</el-icon>-->
      </span>
      <span>Element UI</span>
    </div>
    <p style="display: flex; justify-content: center">
      <!--<el-icon><el-icon-star-off /></el-icon>-->
      <span>2023 Vue体验技术部出品</span>
    </p>
  </footer>
</template>

<script>
// import { PlatformEleme as ElIconPlatformEleme, StarOff as ElIconStarOff } from '@element-plus/icons';
export default {
  components: {
    // ElIconPlatformEleme,
    // ElIconStarOff,
  },
  name: 'MyFooter',
};
</script>

<style scoped>
footer {
  margin: 48px 0 24px;
}
</style>
