<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import { PieChart } from 'echarts/charts';
import { LabelLayout } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer, LabelLayout]);
export default {
  mounted() {
    // 获取dom节点
    let chartDom = document.getElementById('main');
    // 初始化echarts
    let myChart = echarts.init(chartDom);
    // 设置echarts数据
    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
    // https://blog.51cto.com/u_15072918/3835560
    option && myChart.setOption(option);
    // 设置图形点击事件
    myChart.on('click', (params) => {
      this.$emit('handleDialogOpen', params.seriesName);
    });
    // 设置图例点击事件
    myChart.on('legendselectchanged', (params) => {
      const option = myChart.getOption();
      const selectedObj = option.legend[0].selected;
      Object.keys(selectedObj).forEach((key) => {
        selectedObj[key] = true;
      });
      myChart.setOption(option);
    });
  },
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 300px;
}
</style>
