<template>
  <div class="analysis">
    <div>
      <el-row :gutter="24">
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <info-card>
            <template #title> 总销售额 </template>
            <template #number>¥ 126,560</template>
            <template #chart> 总销售额 </template>
            <template #info>日销售额 ￥12,423</template>
          </info-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <info-card>
            <template #title> 访问量 </template>
            <template #number>8,846</template>
            <template #chart> 总销售额 </template>
            <template #info>日访问量 1,234</template>
          </info-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <info-card>
            <template #title> 支付笔数 </template>
            <template #number>6,560</template>
            <template #chart> 总销售额 </template>
            <template #info>转化率 60%</template>
          </info-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
          <info-card>
            <template #title> 运营活动效果 </template>
            <template #number>78%</template>
            <template #chart> 总销售额 </template>
            <template #info>周同比 12% 日同比 11%</template>
          </info-card></el-col
        >
      </el-row>
    </div>

    <el-card shadow="never">
      <el-tabs v-model="activeName" @tab-click="handleClick">
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
    <el-row class="desc" type="flex" justify="space-between" :gutter="24">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card shadow="never">
          <template #header class="clearfix">
            <span>线上热门搜索</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </template>
          <user-table />
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <el-card class="card" shadow="never">
          <template #header class="clearfix">
            <div class="sale-header">
              <span>销售额类别占比</span>
              <div>
                <el-radio-group v-model="curType" size="small" class="mr-8">
                  <el-radio-button v-for="item in salesType" :key="item" :label="item"></el-radio-button>
                </el-radio-group>
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>操作一</el-dropdown-item>
                    <el-dropdown-item>操作二</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </template>
          <pie-chart :fromType="curType" @handleDialogOpen="handleDialogOpen" />
        </el-card>
      </el-col>
    </el-row>
    <div id="saleTable">
      <el-card class="box-card">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
            我的行程
          </el-tab-pane>
          <el-tab-pane label="消息中心">消息中心</el-tab-pane>
          <el-tab-pane label="角色管理">角色管理</el-tab-pane>
          <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
    <data-dialog ref="dataDialog" />
  </div>
</template>

<script>
import DataDialog from './components/DataDialog.vue';
import RankList from './components/RankList.vue';
import SaleTable from './components/SaleTable.vue';
import PieChart from './components/PieChart.vue';
import UserTable from './components/UserTable.vue';
import InfoCard from './components/InfoCard.vue';
export default {
  components: { SaleTable, PieChart, UserTable, DataDialog, RankList, InfoCard },
  data() {
    return {
      activeName: 'sales',
      curType: '全部渠道',
      salesType: ['全部渠道', '线上', '门店'],
    };
  },
  mounted() {},
  methods: {
    handleClick(tab, event) {},
    handleDialogOpen(type) {
      // 开启对话窗
      this.$refs.dataDialog.handleOpen(type);
    },
  },
};
</script>

<style lang="scss" scoped>
.analysis {
  .desc {
    margin-top: 24px;
  }
}
.card {
  position: relative;
}
.selectRadio {
  position: absolute;
  right: 80px;
  top: 12px;
}
#seaTable {
  width: 400px;
  height: 400px;
}
.box-card {
  height: 182px;
  padding: 18px;
  box-sizing: border-box;
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
.sale-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.mr-8{
  margin-right: 8px;
}
</style>

SaleTable
