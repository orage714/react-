const path = require('path');
const HTMLWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode: 'development',//指定打包模式
    entry: {//入口文件名
        index:'./src/index.js',
        // index2:'./src/index2.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),//path模块必须（————dirname:当前目录）
        filename:'[name].js'//打包后的文件名
    },
    // devServer:{
    //     contentBase:path.join(__dirname,'dist')
    //     // devServer.contentBase配置DevServer HTTP服务器的文件根目录。默认情况下为当前执行目录，所以一般不必设置它，除非有额外的文件需要被DevServer服务。例如你想把项目根目录下的public目录设置成DevServer服务器的文件根目录：
    //   },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,//引入文件格式
                loader: "url-loader?limit=8192"
            }
            // , {
            //     test: /\.(gif|jpg|png|woff|svg|eot|ttf)$/,
            //     loader: "file-loader"
            // }
            , {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: "babel-loader",
                query: {
                    presets:['es2015','stage-0','react']
                }
                
            }
            
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',//创建新文件
            chunks: ["index"],//引入各自js文件           
            template: __dirname + '/index.tmp.html',//所用模板文件
            hash: true,//消除缓存
            minify: { collapseWhitespace:false }//折叠空白区域
        })
        // , new HTMLWebpackPlugin({
        //     filename: 'index.html',//创建新文件
        //     chunks: ["index"],//引入各自js文件           
        //     template: __dirname + '/index.tmp.html',//所用模板文件
        //     hash: true,//消除缓存
        //     minify: { collapseWhitespace:false }//折叠空白区域
        // })

    ]
    
}