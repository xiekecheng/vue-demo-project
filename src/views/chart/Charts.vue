<template>
  <div>
    <h1>Echarts图表</h1>
    <div id="main"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
// var myChart = echarts.init(document.getElementById("main"));
export default {
  data() {
    return {};
  },
  watch: {
    // $route: function (newVal, oldVal) {
    //   console.log("newVal, oldVal", newVal, oldVal);
    // },
    // question: function (newQuestion, oldQuestion) {
    //   this.answer = "Waiting for you to stop typing...";
    //   this.debouncedGetAnswer();
    // },
  },
  mounted() {
    // console.log(this.$route);
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("main"));
    // // 绘制图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 400px;
}
</style>
