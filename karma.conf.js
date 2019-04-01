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

module.exports = function (config) {

    var appBase = 'webapp/';       // app JS and map files

    config.set({
        basePath: './',
        browserNoActivityTimeout: 9999999, //default 10000
        browserDisconnectTimeout: 999999, // default 2000
        browserDisconnectTolerance: 1, // default 0
        captureTimeout: 999999,
        frameworks: ['jasmine'],
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-spec-reporter'),
            require('karma-coverage'),
            require('karma-webpack')
        ],

        client: {
            builtPaths: [appBase], // add more spec base paths as needed
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        files: [
            // Polyfills
            'node_modules/core-js/client/shim.js',

            // zone.js
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/long-stack-trace-zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // others
            'node_modules/hammerjs/hammer.js',
            'node_modules/tslib/tslib.js',

            // RxJs
            {pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false},

            // Paths loaded via module imports:
            {pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false},
            {pattern: 'node_modules/@covalent/**/*.css', included: false, watched: false},
            {pattern: 'node_modules/@covalent/**/*.js', included: false, watched: false},
            {pattern: 'node_modules/@covalent/**/*.js.map', included: false, watched: false},
            {pattern: 'node_modules/jquery/**/*.js', included: false, watched: false},

            {pattern: 'karma-test-context.js', watched: false},

            // Include the styles
            {
                pattern: 'webapp/css/*.css',
                included: true,
                watched: true
            },

            // Include the templates
            {
                pattern: 'webapp/**/*.html',
                included: true,
                watched: true,
                served: true
            },

            // Include the images
            {pattern: '**/*.svg', watched: false, included: true, served: true},

            // Paths for debugging with source maps in dev tools
            {pattern: appBase + '**/*.css.map', included: false, watched: false},

            // include js files and test specs
            {pattern: appBase + '**/*.js', included: false, watched: false}
        ],

        exclude: [],
        preprocessors: {
            'karma-test-context.js': ['webpack'],
            'webapp/**/!(*spec|*mock|*stub|*config|*extras|).js': 'coverage'
        },
        webpack: {
            mode: 'development',
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
            watch: true,

            plugins: [
                // @nifi-fds/core has a few places it assumes jquery ($) is globally available. Make that so...
                new webpack.ProvidePlugin({
                    '$': 'jquery'
                })
            ]
        },
        webpackServer: {
            noInfo: true
        },
        reporters: ['kjhtml', 'spec', 'coverage'],
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        specReporter: {
            failFast: false
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false
    });

    if (process.env.TRAVIS) {
        config.set({
            browsers: ['Chrome_travis_ci']
        });

        // Override base config
        config.set({
            singleRun: true,
            autoWatch: false,
            reporters: ['spec', 'coverage'],
            specReporter: {
                failFast: true
            }
        });
    }
}
