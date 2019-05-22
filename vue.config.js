
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  devServer: {
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    proxy: {
      '/wx': {
        target: 'http://sp5566.top/wx',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wx': '/'
        }
      }
    } // 配置多个代理
  }
}
