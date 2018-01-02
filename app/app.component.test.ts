import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import AppComponent from './app.component';

import { ToastrService } from './shared/toastr.service';

describe(`AppComponentTests`, () => {
  let mockToastr: ToastrService;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    mockToastr = jasmine.createSpyObj('', ['setViewContainer']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ToastrService, useValue: mockToastr }]
    });

    fixture = TestBed.createComponent(AppComponent);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('should display title', () => {
    fixture.detectChanges();

    const navbar = fixture.debugElement.query(By.css('a.navbar-brand'));
    expect(navbar.nativeElement.textContent).toBe(AppComponent.Title);
  });
});
