const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
    devServer: {
    // 前端的地址
    port:7070,
    open:true,
    proxy: {
      '/api': {
        // 在这里指定跨域后的后端服务器地址
           target: 'http://localhost:8080',
           changeOrigin: true
      }
    }
  }
})
