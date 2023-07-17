<template>
  <el-row class="desc" type="flex" justify="space-between" :gutter="24">
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-card shadow="never">
        <template #header>
          <div class="sale-header">
            <span>线上热门搜索</span>

            <el-icon><MoreFilled /></el-icon>
          </div>
        </template>
        <div>
          <div>

          </div>
          <!--表格-->
          <div>
            <HotSearchTable />

          </div>
        </div>
        <!--<user-table />-->
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
      <el-card class="card" shadow="never">
        <template #header>
          <div class="sale-header">
            <span>销售额类别占比</span>
            <div>
              <el-radio-group v-model="curType" size="small" class="mr-8">
                <el-radio-button v-for="item in salesType" :key="item" :label="item"></el-radio-button>
              </el-radio-group>
              <el-dropdown>
                <span class="el-dropdown-link">
                  <el-icon><el-icon-more /></el-icon>
                </span>
                <template v-slot:dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>操作一</el-dropdown-item>
                    <el-dropdown-item>操作二</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </div>
          </div>
        </template>
        <pie-chart :fromType="curType" />
      </el-card>
    </el-col>
  </el-row>
</template>

<script setup>
import PieChart from './PieChart.vue';
import { ref } from 'vue';
import HotSearchTable from '@/views/dashboard/analysis/components/HotSearchTable.vue';

const curType = ref('全部渠道')
const salesType = ref(['全部渠道', '线上', '门店'])
</script>

<style lang="scss" scoped>
.card {
  position: relative;
}
.desc {
  margin-top: 24px;
}
.sale-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mr-8 {
  margin-right: 8px;
}
</style>
