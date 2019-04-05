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

import {Component} from '@angular/core';
import {
    MatDialogRef,
    MAT_DIALOG_DATA
} from '@angular/material';

/**
 * AppDemoDialog constructor.
 *
 * @param matDialogRef          The angular material dialog ref.
 * @param data                  The data passed into this component.
 * @constructor
 */
function AppDemoDialog(matDialogRef, data) {
    // Services
    this.dialogRef = matDialogRef;
    this.data = data;
};

AppDemoDialog.prototype = {
    constructor: AppDemoDialog,

    /**
     * Cancel creation of a new policy and close dialog.
     */
    cancel: function () {
        this.dialogRef.close();
    }
};

AppDemoDialog.annotations = [
    new Component({
        templateUrl: './app.demo-dialog.component.html'
    })
];

AppDemoDialog.parameters = [
    MatDialogRef,
    MAT_DIALOG_DATA
];

export {AppDemoDialog};
