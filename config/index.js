'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      // target: 'http://10.120.203.64:8443/', //陈澄IP
      // target: 'http://10.120.78.76:8081/', //陆阳洋IP
      // target: 'http://10.141.1.206:8443/shareshopDM/',//服务器IP  
      //target: 'http://10.120.203.1:8080/shareshopDM/', //王启论IP
      target: 'https://112.74.165.55:8443/shareshopDM/',  //阿里云
      changeOrigin: true,
      // pathRewrite: {  
      //     '^/api': '/', //这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://m.kugou.com/rank/info/?rankid=23784&page=1&json=true'，直接写‘/api/rank/info/?rankid=23784&page=1&json=true’即可  
      //   } 
      secure: false,
      //添加内容！！！！！！！！！！！！！！！！！！！！！！！！
      // headers: {
      //   Referer: 'https://10.141.1.206:8081/shareshopDM/'
      // }

    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    // devtool: 'cheap-module-eval-source-map',
    devtool: 'source-map',  //调试工具让改的。

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    // cacheBusting: true,  
    cacheBusting: false,  //调试工具让改的  修改这两项是为了vscode中的断点能够正确定位到行

    cssSourceMap: true
  },

 // http换成https
  // devServer: {
  //   https: true
  // },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: 'source-map',  //调试工具让改的。 修改这两项是为了vscode中的断点能够正确定位到行
    //devtool: '#source-map',  

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
