import { getTestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { expect } from 'chai';
import TestingUtilities from "../shared/test.utilities";

import EarthquakeService from './earthquake.service';
import Earthquake from "../earthquake/earthquake";
import { MOCK_EARTHQUAKE_JSON, mockEarthquakes } from "./earthquake.test.mocks";

describe(`EarthquakeServiceTests`, () => {
  let service: EarthquakeService
  let backend: MockBackend

  beforeEach(() => {
    TestingUtilities.configureTestingModuleForMockHttp(getTestBed(), function () {
      return EarthquakeService
    });

    backend = getTestBed().get(MockBackend);
    service = getTestBed().get(EarthquakeService);
  });

  afterEach(() => {
    getTestBed().resetTestingModule();
  });

  it(`should be  initialized`, () => {
    expect(service).to.exist;
  });

  it('should return mocked data', () => {
    TestingUtilities.mockHttpResponse(EarthquakeService.URL, backend, MOCK_EARTHQUAKE_JSON);

    service.getEarthquakes().subscribe((earthquakes) => {
      expect(earthquakes).to.deep.equal(mockEarthquakes());
    });
  });
});
