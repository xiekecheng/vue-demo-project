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
    let chartDom = document.getElementById('main');
    let myChart = echarts.init(chartDom);
    let option;

    option = {
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
    myChart.on('click', (params) => {
      console.log('click params', params);
      this.$emit('handleDialogOpen', params.seriesName);
    });
    // legendselectchanged
    // myChart.on('legendselectchanged', (params) => {
    //   console.log('legendselectchanged', params);
    // });

    myChart.on('legendselectchanged', function (params) {
      let option = this.getOption();
      console.log('option',option);
      console.log('params',params);
      let select_key = Object.keys(params.selected);
      // if (!params.selected[params.name]) {
        
      //   select_key.map((res) => {
      //     option.legend[0].selected[res] = !params.selected[res];
      //   });
      // } else {
      //   select_key.map((res) => {
      //     option.legend[0].selected[res] = false;
      //   });
      //   option.legend[0].selected[params.name] = true;
      // }
              select_key.map((res) => {
          option.legend[0].selected[res] = true;
        });
      this.setOption(option);
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
