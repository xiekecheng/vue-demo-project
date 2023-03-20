<template>
  <div>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <info-card>
          <template #title> 总销售额</template>
          <template #number>¥ 126,560</template>
          <template #chart> 总销售额</template>
          <template #info>日销售额 ￥12,423</template>
        </info-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <info-card>
          <template #title> 访问量</template>
          <template #number>8,846</template>
          <template #chart> 总销售额</template>
          <template #info>日访问量 1,234</template>
        </info-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <info-card>
          <template #title> 支付笔数</template>
          <template #number>6,560</template>
          <template #chart> 总销售额</template>
          <template #info>转化率 60%</template>
        </info-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="6">
        <info-card>
          <template #title> 运营活动效果</template>
          <template #number>78%</template>
          <template #chart> 总销售额</template>
          <template #info>周同比 12% 日同比 11%</template>
        </info-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import InfoCard from './InfoCard.vue';

export default {
  name: 'AnalyzeCard',
  components: { InfoCard },
};
</script>
