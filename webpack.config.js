let miniCss = require('mini-css-extract-plugin')
let htmlPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        // you can specify a publicPath here
                        // by default it uses publicPath in webpackOptions.output
                        publicPath: "../",
                      },
                    },
                    "css-loader",
                  ],
            }
        ]
    },
    plugins: [
        new miniCss({
            filename: "css/[name].css",
            chunkFilename: "[id].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new htmlPlugin({
            template: './src/index.html'
        })
        ]
}