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

import {
    Component,
    ViewChild
} from '@angular/core';
import {AppService} from './services/app.service';
import {FdsDialogService} from '@nifi-fds/core/dialogs/services/dialog.service'

/**
 * App constructor.
 *
 * @param appService            The app service.
 * @constructor
 */
function App(appService, dialogService) {
    this.appService = appService;
    this.dialogService = dialogService;
};

App.prototype = {
    constructor: App,

    /**
     * Initialize the component
     */
    ngOnInit: function () {
        var self = this;
        this.appService.sidenav = this.sidenav; //ViewChild
    },

    sayHello: function() {
        this.dialogService.openConfirm({
            message: 'Hello, World!',
            acceptButton: 'Ok'
        });
    }
};

App.annotations = [
    new Component({
        selector: 'app',
        template: require('./app.component.html'),
        queries: {
            sidenav: new ViewChild('sidenav')
        }
    })
];

App.parameters = [
    AppService,
    FdsDialogService
];

export {App};
