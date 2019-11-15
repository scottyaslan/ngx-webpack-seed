/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const webpack = require('webpack');
const path = require('path');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const GitRevisionPlugin = require('git-revision-webpack-plugin');

const gitRevisionPlugin = new GitRevisionPlugin();

const webpackAlias = require('./webpack.alias');
const loaders = require('./webpack.loader');

module.exports = {
    // Deployment target
    target: 'web',

    // Starting point of building the bundles
    entry: {
        // JS files
        'app.bundle.min': path.resolve(__dirname, 'webapp/app.bootstrap.js'),

        // SCSS files
        'app.styles.min': [
            path.resolve(__dirname, 'webapp/theming/app.scss')
        ]
    },

    // Output bundles
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './')
    },

    // Change how modules are resolved
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: webpackAlias
    },

    // Polyfill or mock certain Node.js globals and modules
    node: {
        console: true
    },

    module: {
        rules: [
            loaders.html,

            loaders.scss
        ]
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                // Create a separated file for dependencies
                vendor: {
                    chunks: 'initial',
                    test: path.resolve(__dirname, 'node_modules'),
                    name: 'app.vendor.min',
                    enforce: true
                }
            }
        }
    },

    plugins: [
        // Automatically load modules instead of having to import or require them everywhere
        new webpack.ProvidePlugin({
            '$': 'jquery',
            jQuery: 'jquery'
        }),

        // Fix style only entry generating an extra js file
        new FixStyleOnlyEntriesPlugin(),

        // Create CSS files separately
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),

        // git version information
        gitRevisionPlugin,

        // Create HTML files to serve your webpack bundles
        new HtmlWebpackPlugin({
            template: 'webapp/template.html',
            filename: 'index.html',
            meta: {
                version: gitRevisionPlugin.version(),
                commithash: gitRevisionPlugin.commithash()
            }
        }),

        // Gzip
        new CompressionPlugin({
            test: /\.min.js$|\.min.css$/
        })
    ]
};
