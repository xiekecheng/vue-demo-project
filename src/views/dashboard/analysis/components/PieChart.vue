<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { getChartData } from '@/api/account.js'
echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
])
export default {
  props: {
    fromType: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      chartData: {},
      myChart: null,
    }
  },
  computed: {},
  watch: {
    fromType() {
      this.setChartOption()
    },
  },
  async created() {
    await this.getChartData()
    this.$nextTick(() => {
      this.initialChart()
    })
  },
  methods: {
    // 获取图表数据
    getChartData() {
      return getChartData().then((res) => {
        this.chartData = res.data.data
      })
    },
    // 初始化图表
    initialChart() {
      // 获取dom节点
      const chartDom = document.getElementById('main')
      // 初始化echarts
      this.myChart = echarts.init(chartDom)
      // 设置echarts数据
      this.setChartOption()
      // 设置图形点击事件
      this.myChart.on('click', (params) => {})
      // 设置图例点击事件
      this.myChart.on('legendselectchanged', () => {
        const option = this.myChart.getOption()
        const selectedObj = option.legend[0].selected
        Object.keys(selectedObj).forEach((key) => {
          selectedObj[key] = true
        })
        this.myChart.setOption(option)
      })
    },
    setChartOption() {
      const mapType = {
        全部渠道: 'salesTypeData',
        线上: 'salesTypeDataOnline',
        门店: 'salesTypeDataOffline',
      }
      const data = this.chartData[mapType[this.fromType]].map((item) => {
        return {
          name: `${item.x}:${item.y}`,
          value: item.y,
        }
      })
      const option = {
        title: {
          text: '销售额',
          left: 'left',
        },
        tooltip: {
          trigger: 'item',
        },
        series: [
          {
            type: 'pie',
            radius: ['60%', '100%'],
            data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ],
      }
      // https://blog.51cto.com/u_15072918/3835560
      this.myChart.setOption(option)
    },
  },
}
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 300px;
}
</style>
