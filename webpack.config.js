//项目配置项
const webpack = require('webpack');
const path=require("path");
module.exports={
    entry:{
        index:path.resolve("./dev/index/index.jsx"),
        contactUs:path.resolve("./dev/index/contactUs.jsx"),
        aboutUs:path.resolve("./dev/index/aboutUs.jsx"),
        list_news:path.resolve("./dev/index/list_news.jsx"),
        list_upkeep:path.resolve("./dev/index/list_upkeep.jsx"),
        list_food:path.resolve("./dev/index/list_food.jsx"),
        list_product:path.resolve("./dev/index/list_product.jsx"),
        show:path.resolve("./dev/index/show.jsx"),
        show_product:path.resolve("./dev/index/show_product.jsx"),
        login:path.resolve("./dev/admin/login.jsx"),
        admin:path.resolve('./dev/admin/admin.jsx'),
        admin_user:path.resolve('./dev/admin/admin_user.jsx'),
        admin_food:path.resolve('./dev/admin/admin_food.jsx'),
        admin_product:path.resolve('./dev/admin/admin_product.jsx'),
        admin_news:path.resolve('./dev/admin/admin_news.jsx'),
        admin_upkeep:path.resolve('./dev/admin/admin_upkeep.jsx'),
        admin_banner:path.resolve('./dev/admin/admin_banner.jsx'),
        admin_video:path.resolve('./dev/admin/admin_video.jsx'),
        admin_detail:path.resolve('./dev/admin/admin_detail.jsx')
    },
    output:{path:path.resolve("./www/public/js"),filename:"[name].js"},
    module:{
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};