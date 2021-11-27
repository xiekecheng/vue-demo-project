<template>
  <div class="analysis">
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="5"><div class="grid-content bg-purple">New Visits</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple-light">Messages</div></el-col>
      <el-col :span="5"><div class="grid-content bg-purple">Purchases</div> </el-col>
			<el-col :span="5"><div class="grid-content bg-purple">Purchases</div> </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
</style>
