/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-02 23:40:58
 * @LastEditors: github.com/xiekecheng
 * @LastEditTime: 2022-05-02 23:54:26
 * @FilePath: /vue-demo-project/src-old/utils/axios.js
 * @Description: 配置axios
 *
 */

import axios from 'axios'
import { getToken } from '@/utils/auth'
const baseURL = 'http://localhost:8088'
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log('config', config)
    const token = getToken()
    if (!token) {
      //   token不存在,跳转到登录页
    }
    // TODO 在请求头中添加token
    config.headers.Authorization = token
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
// 响应拦截
instance.interceptors.response.use(
  function (response) {
    const data = response.data
    if (data.code !== 200) {
      console.log('拦截')
      // Message({
      //   message: data.errMsg || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
      return
    }
    return data
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default instance
