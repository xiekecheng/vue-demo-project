module.exports = {
  // 选项...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
      },
    },
    // proxy: 'http://127.0.0.1:7001/',
  },
  // devtool: 'source-map',
};
