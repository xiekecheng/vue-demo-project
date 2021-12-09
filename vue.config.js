module.exports = {
  // 选项...
  devServer: {
    // before,
    proxy: {
      "/api": {
        target: "http://localhost:7001/",
        changeOrigin: true,
      },
      // '/api': {
      //   target: 'https://cnodejs.org/',
      //   changeOrigin: true,
      // },
      // '/soso': {
      //   target: "'https://c.y.qq.com'",
      //   changeOrigin: true,
      // },
    },
  },
  // devtool: 'source-map',
};
