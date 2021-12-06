<template>
  <div class="analysis">
    <el-row type="flex" :gutter="24" class="row-bg" justify="space-between">
      <el-col><el-card class="box-card" shadow="hover">总销售额</el-card></el-col>
      <el-col><el-card class="box-card" shadow="hover">访问量 </el-card> </el-col>
      <el-col><el-card class="box-card" shadow="hover">支付笔数</el-card> </el-col>
      <el-col><el-card class="box-card" shadow="hover">运营活动效果</el-card></el-col>
    </el-row>
    <el-card class="sale">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="销售额" name="first">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16"><SaleTable /></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">1111</el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="访问量" name="second">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16"><SaleTable /></el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">1111</el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-card>
    <el-row class="desc" type="flex" justify="space-between" :gutter="24">
      <el-col>
        <el-card>
          <template #header class="clearfix">
          <span>线上热门搜索</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col>
        <el-card>
          <template #header class="clearfix">
          <span>销售额类别占比</span>
          <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
    <div id="saleTable"></div>
  </div>
</template>

<script>
import SaleTable from './components/SaleTable.vue';
// import Charts from '@/views/chart/Charts';
// import * as echarts from 'echarts/core';

export default {
  components: { SaleTable },
  data() {
    return {
      activeName: 'first',
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style lang="scss" scoped>
.analysis {
  .sale {
    margin-top: 24px;
  }
  .desc {
    margin-top: 24px;
  }
}
#seaTable {
  width: 400px;
  height: 400px;
}
.row-bg {
  // padding: 10px 0;
  // background-color: #f9fafc;
}
.box-card {
  height: 182px;
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

SaleTable
