import { NO_ERRORS_SCHEMA } from '@angular/core';
import { getTestBed, TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { EarthquakeComponent } from './earthquake.component';
import { EarthquakeRoute } from './routes';
import { EarthquakeService } from './earthquake.service';
import { Earthquake } from './earthquake';
import { mockEarthquakes } from './earthquake.test.mocks';

import { ToastrService } from '../shared/toastr.service';

describe(`EarthquakeComponentTests`, () => {
  let mockService: EarthquakeService;
  let mockToastr: ToastrService;
  let fixture: ComponentFixture<EarthquakeComponent>;

  beforeEach(async () => {
    mockService = jasmine.createSpyObj('', ['getEarthquakes']);
    mockToastr = jasmine.createSpyObj('', ['success']);

    TestBed.configureTestingModule({
      declarations: [EarthquakeComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: EarthquakeService, useValue: mockService },
        { provide: ToastrService, useValue: mockToastr }
      ]
    });
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be initialized`, () => {
    fixture = TestBed.createComponent(EarthquakeComponent);

    expect(fixture).toBeDefined();
    expect(fixture.componentRef).toBeDefined();
  });

  it('ngOnInit should retrieve earthquakes and store them', () => {
    let earthquakes: Earthquake[] = mockEarthquakes();
    let observable: Observable<Earthquake[]> = Observable.of(earthquakes);
    mockService.getEarthquakes = jasmine.createSpy().and.returnValue(observable);

    fixture = TestBed.createComponent(EarthquakeComponent);
    fixture.componentInstance.loading = false;
    fixture.componentInstance.ngOnInit();

    expect(fixture.componentInstance.earthquakes).toEqual(earthquakes);
    expect(fixture.componentInstance.loading).toBe(false);

    expect(mockService.getEarthquakes).toHaveBeenCalled();
    expect(mockToastr.success).toHaveBeenCalledWith(ToastrService.DATA_LOAD_SUCCESS);
  });
});
