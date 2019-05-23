
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vant' : '/',
  // outputDir: 在npm run build时 生成文件的目录 type:string, default:'dist'
  // outputDir: 'dist',
  // pages:{ type:Object,Default:undfind }
  devServer: {
    disableHostCheck: true, // 花生壳显示Invalid Host header让其不检查hostname。
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 配置跨域处理,只有一个代理
    // port: 80,
    // host: 'wxtest.com',
    proxy: {
      '/wx': {
        target: 'http://sp5566.top/wx',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/wx': '/'
        }
      },
      '/public': {
        target: 'http://applet.meitu.com/public',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/public': '/'
        }
      }
    } // 配置多个代理,
  }
}
