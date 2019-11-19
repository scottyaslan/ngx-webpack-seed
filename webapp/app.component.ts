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
    Component, OnInit,
    ViewChild
} from '@angular/core';
import { AppService } from 'services/app.service';
import { FdsDialogService } from '@nifi-fds/core/dialogs/services/dialog.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class App implements OnInit {
    @ViewChild('sidenav', { static: true }) sidenav: any;

    constructor(private appService: AppService, private dialogService: FdsDialogService) {}

    ngOnInit(): void {
        this.appService.sidenav = this.sidenav;
    }

    sayHello(): void {
        this.dialogService.openConfirm({
            message: 'Hello, World!',
            acceptButton: 'Ok'
        });
    }
}
