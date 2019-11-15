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

import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppDemo } from 'components/app-demo/app.demo.component';
import { AppService } from 'services/app.service';
import { RouterModule } from '@angular/router';
import { FdsCoreModule } from '@nifi-fds/core';
import { AppDemoDialog } from 'components/app-demo/dialogs/demo/app.demo-dialog.component';
import { AppRoutes } from './app.routes';
import { App } from './app.component';

@NgModule({
    imports: [
        FdsCoreModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        CommonModule,
        BrowserModule,
        RouterModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        AppRoutes
    ],
    declarations: [
        App,
        AppDemo,
        AppDemoDialog
    ],
    entryComponents: [
        AppDemoDialog
    ],
    providers: [
        AppService
    ],
    bootstrap: [App]
})
export class AppModule {}
