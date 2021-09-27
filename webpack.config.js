const path = require('path');
  
module.exports = {
    entry: ["babel-polyfill", "./app/app.jsx"],
    devtool: "inline-source-map",
    mode: "development",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    devServer: {
     historyApiFallback: true,
     port: 8081,
     open: true
   },
   optimization: {
       minimize: false
   },
    module:{
        rules:[   //загрузчик для jsx
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets:["@babel/preset-env", "@babel/preset-react"]
                }
            },
            { //загрузчик стилей
                test: /\.css?$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
        ]
    }
}