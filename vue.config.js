module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
	? '/vue-demo-project/'
	: '/',
	devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
      },
      '/api2': {
        target: 'http://107.150.101.14',
        changeOrigin: true,
      },
      '/api3': {
        target: 'http://www.tanuuu.com',
        changeOrigin: true,
      },

      
    },
  },
  lintOnSave:false,
  runtimeCompiler: true
};
