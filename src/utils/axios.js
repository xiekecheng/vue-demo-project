/*
 * @Author: github.com/xiekecheng
 * @Date: 2022-05-02 23:40:58
 * @LastEditors: github.com/xiekecheng
 * @LastEditTime: 2022-05-02 23:54:26
 * @FilePath: /vue-demo-project/src/utils/axios.js
 * @Description: 配置axios
 * 
 */

// http://1.12.227.95:7001/api/getSearchList
const axios = require('axios');
const baseURL = 'http://1.12.227.95:7001/api/'
const instance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);
// 响应拦截
instance.interceptors.response.use(
  function (response) {
    const res = response.data
    if(res.status!=='SUCCESS'){
      // Message({
      //   message: res.errMsg || 'Error',
      //   type: 'error',
      //   duration: 5 * 1000
      // })
    }
    return res
    
  },
  function (error) {
    return Promise.reject(error);
  },
);

module.exports = instance;
