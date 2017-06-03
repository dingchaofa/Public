var webpack = require('webpack');

var UglifyJSPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
  entry:  __dirname + "/js/main.js",//入口文件
  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },
  externals: {
    jquery: 'window.$'
},
plugins: [
    new UglifyJSPlugin(),//压缩css失败
  ],
   module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//使用es6语法
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devServer: {
        contentBase: "./dist",//本地服务器所加载的页面所在的目录
        //colors:true,//中断中输出结果为彩色
        historyApiFallback:true,//不跳转
        inline: true //实时刷新
    }
}