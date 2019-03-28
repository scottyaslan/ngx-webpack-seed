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
var webpackConfig = require('./webpack.config.js');
var url = require('url');
var proxy = require('proxy-middleware');

var proxyOptions = url.parse('http://localhost:10080/efm/api');
proxyOptions.route = '/api';
proxyOptions.headers = {
    'X-Forwarded-Host': 'localhost',
    'X-Forwarded-Port': '8080'
};

module.exports = function (grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            theme: {
                files: [
                    'webapp/theming/**/*.scss'
                ],
                tasks: ['compile-web-ui-styles']
            },
            webapp: {
                files: [
                    'webapp/**/*.js',
                    'webapp/**/*.html'
                ],
                tasks: ['dev-bundle-web-ui']
            }
        },
        webpack: {
            prod: Object.assign({mode: 'production'}, webpackConfig),
            dev: Object.assign({
                mode: 'development',
                devtool: "inline-source-map"
            }, webpackConfig)
        },
        sass: {
            options: {
                outputStyle: 'compressed',
                sourceMap: true
            },
            minifyWebUi: {
                files: [{
                    './webapp/css/app-demo.min.css': ['./webapp/theming/app-demo.scss']
                }]
            }
        },
        browserSync: {
            bsFiles: {
                src: [
                    // JS files
                    'webapp/**/*.js',

                    // CSS files
                    'webapp/css/*.css',

                    // HTML files
                    'webapp/**/*.html',
                    './*.html'
                ]
            },
            options: {
                port: 8080,
                watchTask: true,
                server: {
                    baseDir: './',
                    middleware: [proxy(proxyOptions)]
                }
            }
        }
    });
    grunt.registerTask('compile-web-ui-styles', ['sass:minifyWebUi']);
    grunt.registerTask('dev-bundle-web-ui', ['webpack:dev']);
    grunt.registerTask('prod-bundle-web-ui', ['webpack:prod']);
    grunt.registerTask('default', ['compile-web-ui-styles', 'dev-bundle-web-ui', 'browserSync', 'watch']);
};
