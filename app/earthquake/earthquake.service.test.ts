import { getTestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { TestUtilities } from '../shared/utilities/test.utilities';

import { EarthquakeService } from './earthquake.service';
import { MOCK_EARTHQUAKE_JSON, mockEarthquakes } from './earthquake.test.mocks';

describe(`EarthquakeServiceTests`, () => {
  let service: EarthquakeService;
  let backend: MockBackend;

  beforeEach(() => {
    TestUtilities.configureTestingModuleForMockHttp(getTestBed(), () => {
      return EarthquakeService;
    });

    backend = getTestBed().get(MockBackend);
    service = getTestBed().get(EarthquakeService);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be initialized`, () => {
    expect(service).toBeDefined();
  });

  it('should return mocked data', () => {
    TestUtilities.mockHttpResponse(EarthquakeService.URL, backend, MOCK_EARTHQUAKE_JSON);

    service.getEarthquakes().subscribe((earthquakes) => {
      expect(earthquakes).toEqual(mockEarthquakes());

      expect(TestUtilities.MOCK_URL_CALLED).toBeTruthy();
    });
  });
});
