import axios from 'axios'
// 校验是否未初始化
export const getInitInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 300)
  })
}
// 请求ECharts图表数据
export const getChartData = () => {
  return axios.get(
    'https://proapi.azurewebsites.net//api/fake_analysis_chart_data'
  )
}
