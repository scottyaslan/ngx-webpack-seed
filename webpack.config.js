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
const webpackAlias = require('./webpack.alias');

module.exports = {
    mode: 'development',

    target: 'web',

    devtool: 'eval-source-map',

    entry: path.resolve(__dirname, 'webapp/app.bootstrap.js'),

    output: {
        filename: 'app.bundle.min.js',
        path: path.resolve(__dirname, '')
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: webpackAlias
    },

    node: {
        console: true
    },
    module: {
        rules: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            {
                test: /\.tsx?$/,
                include: [
                    path.resolve(__dirname, 'webapp')
                ],
                use: ['cache-loader', 'ts-loader']
            },
            {
                /*
                * Send all js files from @nifi-fds through a custom loader that replaces its usage of inline systemjs text loading
                * of html files like:
                *     require('./confirm-dialog.component.html!text')
                *
                * with normal require calls that are subsequently loaded via webpack's html-loader like:
                *     require('./confirm-dialog.component.html')
                */
                test: /\.js$/,
                loader: ['cache-loader', path.resolve(__dirname, 'systemjs-text-to-html-loader')],
                include: [
                    path.resolve(__dirname, 'node_modules/@nifi-fds/core')
                ],
            },
            {
                /*
                * Send all js files from webapp/ and platform/ through a custom loader that replaces its usage of  templateUrl or styleUrl properties like:
                *     templateUrl: './confirm-dialog.component.html'
                *
                * with NodeJS `require` calls for loading of html files that are subsequently loaded via webpack's html-loader like:
                *     template: require('./confirm-dialog.component.html')
                */
                test: /\.js$/,
                loader: ['cache-loader', path.resolve(__dirname, 'angular-url-loader')],
                include: [
                    path.resolve(__dirname, 'webapp'),
                    path.resolve(__dirname, 'platform')
                ]
            },
            {
                /*
                * Send all ts files from webapp/ and platform/ through a custom loader that replaces its usage of  templateUrl or styleUrl properties like:
                *     templateUrl: './confirm-dialog.component.html'
                *
                * with NodeJS `require` calls for loading of html files that are subsequently loaded via webpack's html-loader like:
                *     template: require('./confirm-dialog.component.html')
                */
                test: /\.tsx?$/,
                loader: ['cache-loader', path.resolve(__dirname, 'angular-url-loader')],
                include: [
                    path.resolve(__dirname, 'webapp'),
                    path.resolve(__dirname, 'platform')
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: 'cache-loader'
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: ['cache-loader', 'html-loader']
            }
        ]
    },
    plugins: [
        // @nifi-fds/core has a few places it assumes jquery ($) is globally available. Make that so...
        new webpack.ProvidePlugin({
            '$': 'jquery',
            jQuery: 'jquery'
        })
    ]
};
