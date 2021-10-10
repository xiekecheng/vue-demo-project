const axios = require("axios");

const instance = axios.create({
  // baseURL: "https://some-domain.com/api/",
  baseURL: "https://localhost:8080",
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
  }
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports = instance;
