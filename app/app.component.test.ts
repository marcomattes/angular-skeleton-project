import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { expect } from 'chai';
import { mock, SinonMock } from "sinon";

import AppComponent from './app.component';

import { ToastrService } from "./shared/toastr.service";

describe(`AppComponentTests`, () => {
  let mockToastr: SinonMock

  beforeEach(() => {
    let toastrService: ToastrService = new ToastrService(null);
    mockToastr = mock(toastrService);
    mockToastr.expects("setViewContainer");

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ToastrService, useValue: toastrService }]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture).to.exist;
    expect(fixture.componentRef).to.exist;
  });

  it('should display title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const navbar = fixture.debugElement.query(By.css('a.navbar-brand'));
    expect(navbar.nativeElement.textContent).to.equal(AppComponent.Title);
  });
});
