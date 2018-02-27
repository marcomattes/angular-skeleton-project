import { Component } from '@angular/core';

import { FieldLevelService } from './field-level.service';

@Component({
    templateUrl: 'field-level.component.html'
})
export class FieldLevelComponent {
    private _fieldLevelService: FieldLevelService;

    constructor() { }

    useService(): boolean {
        return this.getFieldLevelService().doSomething();
    }

    getFieldLevelService(): FieldLevelService {
        return new FieldLevelService();
    }
}