const axios = require('axios');
// import { Message } from 'element-ui';
// const {Message}  = require('element-ui')
// const baseURL1 = 'http://localhost:8080/api/'
// const baseURL2 = 'http://localhost/api/'
// const baseURL2 = '/api/'
const instance = axios.create({
  // baseURL: baseURL2,
  timeout: 5000,
  // headers: { "X-Custom-Header": "foobar" },
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

instance.interceptors.response.use(
  function (response) {
    // console.log('response', response);
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
