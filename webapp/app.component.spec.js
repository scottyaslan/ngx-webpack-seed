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

import {TestBed} from '@angular/core/testing';
import {
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import {RouterModule} from '@angular/router';
import { MatButtonModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_BASE_HREF} from '@angular/common';

import { FdsDialogsModule } from '@nifi-fds/core';
import {AppRoutes} from './app.routes';
import {App} from './app.component';
import {AppDemo} from './components/app-demo/app.demo.component';
import {AppService} from './services/app.service';

describe('app component spec', () => {
    let comp;
    let fixture;

    const initTestBed = ({ providers } = { providers: [] }) => {
        TestBed.resetTestEnvironment();

        TestBed.initTestEnvironment(
            BrowserDynamicTestingModule,
            platformBrowserDynamicTesting()
        );

        const testBedConfigured = TestBed.configureTestingModule({
            imports: [
                RouterModule,
                MatSidenavModule,
                MatToolbarModule,
                MatButtonModule,
                BrowserAnimationsModule,
                AppRoutes,
                FdsDialogsModule
            ],
            declarations: [
                App,
                AppDemo
            ],
            providers: [
                AppService,
                {provide: APP_BASE_HREF, useValue: '/' },
                ...providers
            ]
        });
        return testBedConfigured.compileComponents();
    };

    beforeEach((done) => {
        initTestBed()
            .then(() => {
                fixture = TestBed.createComponent(App);
                fixture.detectChanges();
                comp = fixture.componentInstance;

                done();
            });
    });

    it('should create component', () => {
        //assertions
        expect(comp).toBeDefined();
    });
});
