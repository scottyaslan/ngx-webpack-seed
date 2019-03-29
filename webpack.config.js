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

const path = require('path');
const webpack = require('webpack');

module.exports = {
    target: "web",
    entry: './webapp/app.bootstrap.js',
    output: {
        filename: 'app.bundle.min.js',
        path: path.resolve(__dirname, 'webapp')
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: [".ts", ".tsx", ".js"],
        alias: {
            // Aliases needed to enable @nifi-fds CommonJs modules load properly
            '@flow-design-system/dialogs': '@nifi-fds/core/dialogs/fds-dialogs.module',
            '@flow-design-system/confirm-dialog-component': '@nifi-fds/core/dialogs/confirm-dialog/confirm-dialog.component',
            '@flow-design-system/core': '@nifi-fds/core/flow-design-system.module',
            '@flow-design-system/dialog-component': '@nifi-fds/core/dialogs/fds-dialog.component',
            '@flow-design-system/dialog-service': '@nifi-fds/core/dialogs/services/dialog.service',
            '@flow-design-system/snackbars': '@nifi-fds/core/snackbars/fds-snackbars.module',
            '@flow-design-system/snackbar-component': '@nifi-fds/core/snackbars/fds-snackbar.component',
            '@flow-design-system/snackbar-service': '@nifi-fds/core/snackbars/services/snackbar.service',
            '@flow-design-system/coaster-component': '@nifi-fds/core/snackbars/coaster/coaster.component',
            '@flow-design-system/common/storage-service': '@nifi-fds/core/common/services/fds-storage.service'
        }
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
                use: 'ts-loader'
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
                loader: path.resolve(__dirname, 'systemjs-text-to-html-loader'),
                include: [
                    path.resolve(__dirname, 'node_modules/@nifi-fds/core')
                ],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(html)$/,
                use: {
                  loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        // @nifi-fds/core has a few places it assumes jquery ($) is globally available. Make that so...
        new webpack.ProvidePlugin({
            '$': 'jquery'
        })
    ]
};
