const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
var path = require("path");
var distEnv = new webpack.DefinePlugin({
    'NODE_ENV': '"sit"',
});
module.exports = {
    entry: {
        index: "./src/index/index.js",
        success: "./src/success/index.js"
    }, //引用生成好的配置
    output: {
        path: path.resolve(__dirname, "./dist"),
        // 给js css 图片等在html引入中添加前缀
        publicPath: "/",
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { url: false }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                    ]
                // 使css独立，但是不能自动更新css
                // use:[MiniCssExtractPlugin.loader,
                //     {
                //         loader: "css-loader",
                //         options: {
                //             minimize: false
                //         }
                //     },
                //     ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\??.*$/,
                loader: "url-loader?limit=8192&name=img/[name][hash].[ext]"
            }
        ]
    },
    plugins: [
        distEnv,
        new HtmlWebpackPlugin({
            //根据模板插入css/js等生成最终HTML
            filename: "index.html", //生成的html存放路径，相对于 path
            chunks: ["common.js", "index"],
            template: "./src/index/index.html", //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true //为静态资源生成hash值
        }),
        new HtmlWebpackPlugin({
            //根据模板插入css/js等生成最终HTML
            filename: "success.html", //生成的html存放路径，相对于 path
            chunks: ["common.js", "success"],
            template: "./src/success/index.html", //html模板路径
            inject: true, //允许插件修改哪些内容，包括head与body
            hash: true //为静态资源生成hash值
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jQuery",
            "window.$": "$"
        }),
        new webpack.ProvidePlugin({
            avalon: "avalon2",
            "window.avalon": "avalon"
        })
    ],
    devServer: {
        // contentBase: './dll',
        disableHostCheck: true,
        hot: false,
        inline: false,
        proxy:{
            "/insurance/*":{
                target:"http://192.168.199.120:3000",
                changeOrigin:true,
            }
        }
    }
};


var getIpAddress = function () {
    var interfaces = require('os').networkInterfaces();
    for (var devName in interfaces) {
        var iface = interfaces[devName];
        for (var i = 0; i < iface.length; i++) {
            var alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
};