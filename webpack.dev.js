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
const merge = require('webpack-merge');

const commonConfig = require('./webpack.common');
const loaders = require('./webpack.loader');

module.exports = merge(commonConfig, {
    // Tells webpack to use its built-in optimizations accordingly
    mode: 'development',

    // Source maps
    devtool: 'inline-source-map',

    module: {
        rules: [
            loaders.jsFds,

            loaders.ts,
            loaders.js
        ]
    },

    // "webpack-dev-server" configuration
    devServer: {
        // Open the browser after server had been started
        open: true,

        // The bundled files will be available in the browser under this path.
        publicPath: '/',

        // Enable gzip compression for everything served
        compress: true,

        // Tell the server where to serve content from
        contentBase: [
            path.join(__dirname, './')
        ],

        // Enable Hot Module Replacement feature
        hot: true,

        // The filename that is considered the index file.
        index: path.join(__dirname, 'index.html'),

        // Specify a port number to listen for requests on
        port: 18888,

        // Proxying URLs
        proxy: {}
    },

    plugins: [
        // Hot Module Replacement
        new webpack.HotModuleReplacementPlugin(),

        // Angular Dev Mode - enableProdMode() won't be called based on this setting in webapp/app.bootstrap.js
        new webpack.DefinePlugin({
            APP_PROD_MODE: JSON.stringify(false)
        })
    ]
});
