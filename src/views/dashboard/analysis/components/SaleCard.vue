<template>
  <el-card shadow="never">
    <el-tabs v-model="activeName">
      <el-tab-pane label="销售额" name="sales">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
            <sale-table />
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">1111</el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="访问量" name="visits">
        <el-row :gutter="10">
          <el-col :xs="24" :sm="24" :md="12" :lg="16" :xl="16">
            <sale-table />
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
            <rank-list />
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import RankList from './RankList.vue'
import SaleTable from './SaleTable.vue'

export default {
  name: 'SaleCard',
  components: { RankList, SaleTable },
  data() {
    return {
      activeName: 'sales',
    }
  },
}
</script>
