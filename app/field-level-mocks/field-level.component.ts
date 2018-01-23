import { Injectable } from '@angular/core';

import { FieldLevelService } from './field-level.service';

@Injectable()
export class FieldLevelComponent {
    fieldLevelService: FieldLevelService = new FieldLevelService();

    constructor() { }

    useService(): boolean {
        return this.fieldLevelService.doSomething();
    }
}