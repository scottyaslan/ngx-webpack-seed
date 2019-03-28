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

import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {
    CovalentCommonModule,
    CovalentChipsModule,
    CovalentDataTableModule,
    CovalentDialogsModule,
    CovalentExpansionPanelModule,
    CovalentLoadingModule,
    CovalentMenuModule,
    CovalentNotificationsModule,
    CovalentPagingModule,
    CovalentSearchModule,
    CovalentStepsModule
} from '@covalent/core';

import {App} from './app';
import {AppRoutes} from './app.routes';
import {AppDemo} from './components/app-demo/app-demo';
import {AppDemoDialog} from './components/app-demo/dialogs/demo/app-demo-dialog';
import {AppService} from './services/app.service';

function AppModule() {
};

AppModule.prototype = {
    constructor: AppModule
};

AppModule.annotations = [
    new NgModule({
        imports: [
            FlexLayoutModule,
            BrowserAnimationsModule,
            CommonModule,
            BrowserModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatButtonToggleModule,
            MatCardModule,
            MatCheckboxModule,
            MatChipsModule,
            MatDatepickerModule,
            MatDialogModule,
            MatExpansionModule,
            MatFormFieldModule,
            MatGridListModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            MatMenuModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRadioModule,
            MatSelectModule,
            MatSlideToggleModule,
            MatSliderModule,
            MatSidenavModule,
            MatSnackBarModule,
            MatStepperModule,
            MatTabsModule,
            MatToolbarModule,
            MatTooltipModule,
            MatPaginatorModule,
            MatSortModule,
            MatTableModule,
            CovalentCommonModule,
            CovalentChipsModule,
            CovalentDataTableModule,
            CovalentDialogsModule,
            CovalentExpansionPanelModule,
            CovalentLoadingModule,
            CovalentMenuModule,
            CovalentNotificationsModule,
            CovalentPagingModule,
            CovalentSearchModule,
            CovalentStepsModule,
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
];

export { AppModule };