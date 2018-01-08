import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ToastrService } from './shared/toastr.service';
import { WelcomeRoute } from './home/routes';
import { EarthquakeRoute } from './earthquake/routes';

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

    expect(mockToastr.setViewContainer).toHaveBeenCalled();
  });

  it(`should be  initialized`, () => {
    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();

    expect(fixture.componentInstance.pageTitle).toBe(AppComponent.Title);

    expect(fixture.componentInstance.welcomeTitle).toBe(WelcomeRoute.title);
    expect(fixture.componentInstance.welcomeUrl).toBe(WelcomeRoute.url);

    expect(fixture.componentInstance.earthquakeTitle).toBe(EarthquakeRoute.title);
    expect(fixture.componentInstance.earthquakeUrl).toBe(EarthquakeRoute.url);
  });
});
