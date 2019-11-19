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

const fse = require('fs-extra');

// clean up any dev files
fse.removeSync('COMMITHASH');
fse.removeSync('VERSION');
fse.removeSync('app.bundle.min.js');
fse.removeSync('app.bundle.min.js.gz');
fse.removeSync('app.styles.min.css');
fse.removeSync('app.styles.min.css.gz');
fse.removeSync('app.vendor.min.js');
fse.removeSync('app.vendor.min.js.gz');
fse.removeSync('index.html');
fse.removeSync('webapp/css');
fse.removeSync('webapp/app.bundle.min.js');

fse.removeSync('.cache-loader');
fse.removeSync('.cache-loader-coverage');
fse.removeSync('coverage');
