<template>
  <div ref="sale-table" class="sale-table"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);
export default {
  mounted() {
    let chartDom = this.$refs['sale-table'];
    let myChart = echarts.init(chartDom);
    let option;

    option = {
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [294, 705, 150, 80, 70, 110, 130, 391, 883, 437, 406, 943],
          type: 'bar',
        },
      ],
    };

    option && myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.sale-table {
  width: 100%;
  height: 300px;
}
</style>
