<template>
  <el-card class="box-card" shadow="hover">
    <div class="title-wrap">
      <el-tooltip class="item" effect="dark" content="指标说明" placement="top">
        <i class="el-icon-warning-outline" />
      </el-tooltip>
      <slot name="title" />
    </div>
    <div class="number-wrap">
      <slot name="number" />
    </div>
    <div class="chart-wrap">
      <slot name="chart" />
    </div>
    <div class="info-wrap">
      <slot name="info" />
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      slotList: ['title', 'number', 'chart', 'info'],
    };
  },
};
</script>

<style lang="scss" scoped>
.box-card {
  height: 182px;
  margin-bottom: 12px;
  padding: 18px;
  font-size: 14px;
  box-sizing: border-box;
  ::v-deep .el-card__body {
    padding: 0;
    // padding: 20px 24px 8px;
    height: 100%;
    // box-sizing: border-box;
  }
  .title-wrap {
    color: rgba(0, 0, 0, 0.45);
    position: relative;
    > i {
      position: absolute;
      right: 0;
    }
  }
  .info-wrap {
    padding-top: 9px;
    border-top: 1px solid #f0f0f0;
  }
  .chart-wrap {
    margin-bottom: 12px;
    height: 46px;
  }
  .number-wrap {
    font-size: 30px;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
