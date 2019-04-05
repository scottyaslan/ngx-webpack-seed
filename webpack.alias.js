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

module.exports = {
    // Flow Design System
    '@flow-design-system/core': path.resolve(__dirname, 'node_modules/@nifi-fds/core/flow-design-system.module.js'),
    '@flow-design-system/dialogs': path.resolve(__dirname, 'node_modules/@nifi-fds/core/dialogs/fds-dialogs.module.js'),
    '@flow-design-system/dialog-component': path.resolve(__dirname, 'node_modules/@nifi-fds/core/dialogs/fds-dialog.component.js'),
    '@flow-design-system/dialog-service': path.resolve(__dirname, 'node_modules/@nifi-fds/core/dialogs/services/dialog.service.js'),
    '@flow-design-system/confirm-dialog-component': path.resolve(__dirname, 'node_modules/@nifi-fds/core/dialogs/confirm-dialog/confirm-dialog.component.js'),
    '@flow-design-system/snackbars': path.resolve(__dirname, 'node_modules/@nifi-fds/core/snackbars/fds-snackbars.module.js'),
    '@flow-design-system/snackbar-component': path.resolve(__dirname, 'node_modules/@nifi-fds/core/snackbars/fds-snackbar.component.js'),
    '@flow-design-system/snackbar-service': path.resolve(__dirname, 'node_modules/@nifi-fds/core/snackbars/services/snackbar.service.js'),
    '@flow-design-system/coaster-component': path.resolve(__dirname, 'node_modules/@nifi-fds/core/snackbars/coaster/coaster.component.js'),
    '@flow-design-system/common/storage-service': path.resolve(__dirname, 'node_modules/@nifi-fds/core/common/services/fds-storage.service.js'),
    '@flow-design-system/common/animations': path.resolve(__dirname, 'node_modules/@nifi-fds/core/common/fds.animations.js'),

    // Application
    'app.module.ts': path.resolve(__dirname, 'webapp/app.module.ts'),
    'app.routes.js': path.resolve(__dirname, 'webapp/app.routes.js'),
    'app.component.js': path.resolve(__dirname, 'webapp/app.component.js'),

    'services/app.service.js': path.resolve(__dirname, 'webapp/services/app.service.js'),

    'components/app.component.js': path.resolve(__dirname, 'webapp/components/app.component.js'),

    // Node Modules
    'lodash-core': path.resolve(__dirname, 'node_modules/lodash-core/distrib/lodash-core.min.js'),
    '@angular': path.resolve(__dirname, 'node_modules/@angular'),
    '@covalent': path.resolve(__dirname, 'node_modules/@covalent'),
    './foldcode': path.resolve(__dirname, 'platform/flow-designer/codemirror/lib/codemirror-compressed.js'),
    '../../lib/codemirror': path.resolve(__dirname, 'platform/flow-designer/codemirror/lib/codemirror-compressed.js'),
    'codemirror': path.resolve(__dirname, 'platform/flow-designer/codemirror/lib/codemirror-compressed.js'),

    // jquery
    'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.min.js'),
    'jquery-ui-dist': path.resolve(__dirname, 'node_modules/jquery-ui-dist/jquery-ui.js'),

    // d3
    'd3': path.resolve(__dirname, 'node_modules/d3/build/d3.node.js'),
    'd3-array': path.resolve(__dirname, 'node_modules/d3-array/build/d3-array.min.js'),
    'd3-axis': path.resolve(__dirname, 'node_modules/d3-axis/build/d3-axis.min.js'),
    'd3-brush': path.resolve(__dirname, 'node_modules/d3-brush/build/d3-brush.min.js'),
    'd3-chord': path.resolve(__dirname, 'node_modules/d3-chord/build/d3-chord.min.js'),
    'd3-collection': path.resolve(__dirname, 'node_modules/d3-collection/build/d3-collection.min.js'),
    'd3-color': path.resolve(__dirname, 'node_modules/d3-color/build/d3-color.min.js'),
    'd3-dispatch': path.resolve(__dirname, 'node_modules/d3-dispatch/build/d3-dispatch.min.js'),
    'd3-drag': path.resolve(__dirname, 'node_modules/d3-drag/build/d3-drag.min.js'),
    'd3-dsv': path.resolve(__dirname, 'node_modules/d3-dsv/build/d3-dsv.min.js'),
    'd3-ease': path.resolve(__dirname, 'node_modules/d3-ease/build/d3-ease.min.js'),
    'd3-force': path.resolve(__dirname, 'node_modules/d3-force/build/d3-force.min.js'),
    'd3-format': path.resolve(__dirname, 'node_modules/d3-format/build/d3-format.min.js'),
    'd3-geo': path.resolve(__dirname, 'node_modules/d3-geo/build/d3-geo.min.js'),
    'd3-hierarchy': path.resolve(__dirname, 'node_modules/d3-hierarchy/build/d3-hierarchy.min.js'),
    'd3-interpolate': path.resolve(__dirname, 'node_modules/d3-interpolate/build/d3-interpolate.min.js'),
    'd3-path': path.resolve(__dirname, 'node_modules/d3-path/build/d3-path.min.js'),
    'd3-polygon': path.resolve(__dirname, 'node_modules/d3-polygon/build/d3-polygon.min.js'),
    'd3-quadtree': path.resolve(__dirname, 'node_modules/d3-quadtree/build/d3-quadtree.min.js'),
    'd3-queue': path.resolve(__dirname, 'node_modules/d3-queue/build/d3-queue.min.js'),
    'd3-random': path.resolve(__dirname, 'node_modules/d3-random/build/d3-random.min.js'),
    'd3-request': path.resolve(__dirname, 'node_modules/d3-request/build/d3-request.min.js'),
    'd3-scale': path.resolve(__dirname, 'node_modules/d3-scale/build/d3-scale.min.js'),
    'd3-selection': path.resolve(__dirname, 'node_modules/d3-selection/dist/d3-selection.min.js'),
    'd3-selection-multi': path.resolve(__dirname, 'node_modules/d3-selection-multi/build/d3-selection-multi.min.js'),
    'd3-shape': path.resolve(__dirname, 'node_modules/d3-shape/build/d3-shape.min.js'),
    'd3-time': path.resolve(__dirname, 'node_modules/d3-time/build/d3-time.min.js'),
    'd3-time-format': path.resolve(__dirname, 'node_modules/d3-time-format/build/d3-time-format.min.js'),
    'd3-timer': path.resolve(__dirname, 'node_modules/d3-timer/build/d3-timer.min.js'),
    'd3-transition': path.resolve(__dirname, 'node_modules/d3-transition/build/d3-transition.min.js'),
    'd3-voronoi': path.resolve(__dirname, 'node_modules/d3-voronoi/build/d3-voronoi.min.js'),
    'd3-zoom': path.resolve(__dirname, 'node_modules/d3-zoom/build/d3-zoom.min.js'),

    // needed to support gestures for angular material
    'hammerjs': path.resolve(__dirname, 'node_modules/hammerjs/hammer.min.js'),

    // other libraries
    'rxjs': path.resolve(__dirname, 'node_modules/rxjs'),
    'slickgrid': path.resolve(__dirname, 'node_modules/slickgrid'),
    'zone.js': path.resolve(__dirname, 'node_modules/zone.js/dist/zone.js'),
    'core-js': path.resolve(__dirname, 'node_modules/core-js'),
    'superagent': path.resolve(__dirname, 'node_modules/superagent'),
    'querystring': path.resolve(__dirname, 'node_modules/querystring'),
    'tslib': path.resolve(__dirname, 'node_modules/tslib'),
    'qtip2': path.resolve(__dirname, 'node_modules/qtip2/dist/jquery.qtip.min.js')
};
