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
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const commonConfig = require('./webpack.common');
const loaders = require('./webpack.loader');

module.exports = merge(commonConfig, {
    // Tells webpack to use its built-in optimizations accordingly
    mode: 'production',

    // Source maps
    devtool: 'source-map',

    module: {
        rules: [
            loaders.ts,
            loaders.js
        ]
    },

    optimization: {
        minimizer: [
            // Minify JavaScript
            new TerserJSPlugin({}),

            // Minify CSS
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        // Angular Prod Mode - enableProdMode() will be called based on this setting in webapp/app.bootstrap.js
        new webpack.DefinePlugin({
            APP_PROD_MODE: JSON.stringify(true)
        })
    ]
});
