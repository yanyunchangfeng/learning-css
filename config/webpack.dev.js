const commonConfig = require('./webpack.common');
const postcssEnvFunction = require('postcss-env-function');
const path = require('path')
const merge = require('webpack-merge');
module.exports = merge(commonConfig, {
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.scss|css$/,
                exclude: [path.join(process.cwd(), 'src/index.scss'), /node_modules/],
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader", options: {
                            modules: true,
                            context: path.join(process.cwd(), 'src/components'),
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: "postcss-loader", options: {
                            ident: 'postcss',
                            plugins: () => [
                                postcssEnvFunction({
                                    importFrom: [
                                    //   'and/then/this.json', // { "environment-variables": { "--branding-padding": "20px" } }
                                      {
                                        environmentVariables: { '--branding-padding': '20px' }
                                      },
                                      () => {
                                        const environmentVariables = { '--branding-padding': '20px' };
                                   
                                        return { environmentVariables };
                                      }
                                    ]
                                  })
                            ]
                        }
                    },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.scss|css$/,
                include: [path.join(process.cwd(), 'src/index.scss'), /node_modules/],
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "postcss-loader",options: {
                        ident: 'postcss',
                        plugins: () => [
                            postcssEnvFunction({
                                importFrom: [
                                'css-env-variables.json', // { "environment-variables": { "--branding-padding": "20px" } }
                                  {
                                    environmentVariables: { '--branding-padding': '20px' }
                                  },
                                  () => {
                                    const environmentVariables = { '--branding-padding': '20px' };
                               
                                    return { environmentVariables };
                                  }
                                ]
                              })
                        ]}
                    },
                    { loader: "sass-loader" }
                ]
            }
        ]
    },
    devServer: {
        port: 3001,
        open: true,
        contentBase: path.join(process.cwd(), 'dist')
    }
})
