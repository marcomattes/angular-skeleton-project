import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from "rxjs";

import { expect } from 'chai';
import { mock, SinonMock } from "sinon";

import EarthquakeComponent from './earthquake.component';
import { EarthquakeRoute } from './routes';
import EarthquakeService from "./earthquake.service";
import Earthquake from "./earthquake"

import { ToastrService } from "../shared/toastr.service";

import TestUtilities from "../shared/test.utilities";
import { mockEarthquakes } from "./earthquake.test.mocks";

describe(`EarthquakeComponentTests`, () => {
  let mockService: SinonMock
  let mockToastr: SinonMock

  beforeEach(() => {
    let earthquakeService: EarthquakeService = new EarthquakeService(null);
    mockService = mock(earthquakeService);

    let toastrService: ToastrService = new ToastrService(null);
    mockToastr = mock(toastrService);

    TestBed.configureTestingModule({
      declarations: [EarthquakeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: EarthquakeService, useValue: earthquakeService },
        { provide: ToastrService, useValue: toastrService }
      ]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    const fixture = TestBed.createComponent(EarthquakeComponent);

    expect(fixture).to.exist;
    expect(fixture.componentRef).to.exist;
  });

  it('should display title', () => {
    let observable: Observable<Array<Earthquake>> = Observable.of([]);

    mockService.expects("getEarthquakes").returns(observable);
    mockToastr.expects("success");

    const fixture = TestBed.createComponent(EarthquakeComponent);
    fixture.componentInstance.loading = false;

    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('div.container > h3'));
    expect(header.nativeElement.textContent).to.equal(EarthquakeRoute.title);

    TestUtilities.verifySinonMocks(mockService, mockToastr);
  });

  it("should create table with earthquakes from service", () => {
    let observable: Observable<Array<Earthquake>> = Observable.of(mockEarthquakes());

    mockService.expects("getEarthquakes").returns(observable);
    mockToastr.expects("success");

    const fixture = TestBed.createComponent(EarthquakeComponent);

    fixture.detectChanges();

    const tableBody = fixture.debugElement.query(By.css("div.container > table.table > tbody"));
    expect(tableBody.children.length).to.be.equal(2);

    TestUtilities.verifySinonMocks(mockService, mockToastr);
  });
});
