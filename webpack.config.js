/* global __dirname process */
// const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin');

const LIBRARY_NAME = "bpjsclientlib";

const common_settings = {
    entry: {
        bpjsclientlib: './src/index.js',
    },
    target: 'web',

    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: '[name].min.js',
        chunkFilename: '[name].bundle.js',
        library: LIBRARY_NAME,
        libraryTarget: "var",
        libraryExport: 'default',
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    output: {
                        semicolons: false
                    },
                    // mangle: false,
                    keep_fnames: true,
                    keep_classnames: true
                }
            })
        ]
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },           
        ]
    },
    externals: {
        // jquery: 'jQuery',
    }
};

const dev_settings = merge(common_settings, {
    mode: 'development',   // production, none
    devtool: 'cheap-module-eval-source-map',      // original source

    output: {
        filename: 'bpjsclientlib/[name].min.js',
    },
});

const prod_settings = merge(common_settings, {
    mode: 'production',
    devtool: 'source-map',

    output: {
        filename: 'bpjsclientlib/[name].[contenthash].min.js',
    },
});


module.exports = process.env.DKBUILD_TYPE === 'PRODUCTION' ? prod_settings : dev_settings;
