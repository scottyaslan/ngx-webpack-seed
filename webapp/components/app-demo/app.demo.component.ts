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

import { AfterViewChecked, Component } from '@angular/core';
import { AppService } from 'services/app.service';

@Component({
    templateUrl: './app.demo.component.html'
})
export class AppDemo implements AfterViewChecked {
    appService: AppService;

    /**
     * AppDemo constructor.
     *
     * @param appService            The app service module.
     * @constructor
     */
    constructor(appService: AppService) {
        this.appService = appService;
    }

    /**
     * Respond after Angular checks the component's views and child views
     */
    ngAfterViewChecked() {
        this.appService.inProgress = false;
    }
}
