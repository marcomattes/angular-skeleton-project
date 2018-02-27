import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FieldLevelComponent } from './field-level.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FieldLevelService } from './field-level.service';

describe('FieldLevelComponentTests', () => {
    let fixture: ComponentFixture<FieldLevelComponent>;
    let mockFieldLevelService: FieldLevelService;

    beforeEach(() => {
        mockFieldLevelService = jasmine.createSpyObj('mockFieldLevelService', ['doSomething']);

        TestBed.configureTestingModule({
            declarations: [FieldLevelComponent],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(FieldLevelComponent);
        spyOn(fixture.componentInstance, 'getFieldLevelService').and.returnValue(mockFieldLevelService);
    });

    afterEach(() => {
        TestBed.resetTestingModule();
    });

    it('useService should return value from service', () => {
        mockFieldLevelService.doSomething = jasmine.createSpy('mockFieldLevelService.doSomething').and.returnValue(true);

        expect(fixture.componentInstance.useService()).toBeTruthy();

        expect(fixture.componentInstance.getFieldLevelService).toHaveBeenCalled();
        expect(mockFieldLevelService.doSomething).toHaveBeenCalled();
    });
});