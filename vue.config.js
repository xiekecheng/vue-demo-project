module.exports = {
  // 选项...
  devServer: {
    // before,
    proxy: {
      // "/api": {
      //   target: "http://localhost:9999/",
      //   changeOrigin: true,
      // },
      "/api": {
        target: "https://cnodejs.org/",
        changeOrigin: true,
      },
      "/soso": {
        target: "'https://c.y.qq.com'",
        changeOrigin: true,
      },
    },
  },
};
