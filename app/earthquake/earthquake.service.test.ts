import { EarthquakeService } from './earthquake.service';
import { MOCK_EARTHQUAKE_JSON, mockEarthquakes } from './earthquake.test.mocks';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { EarthquakeFeature } from './earthquake-feature';

describe(`EarthquakeServiceTests`, () => {
  let service: EarthquakeService;
  let mockHttp: Http;
  let mockResponse: Response;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get']);
    mockResponse = jasmine.createSpyObj('mockResponse', ['json']);

    service = new EarthquakeService(mockHttp);
  });

  it(`should be initialized`, () => {
    expect(service).toBeDefined();
  });

  it('getEarthquakes should return mocked data', (done) => {
    // TestUtilities.mockHttpResponse(EarthquakeService.URL, backend, MOCK_EARTHQUAKE_JSON);
    let expectedResponse = 'expectedResponse';
    mockHttp.get = jasmine.createSpy('mockHttp.get').and.returnValue(Observable.of(expectedResponse));

    spyOn(service, '_mapEarthquakes').and.returnValue(mockEarthquakes());

    service.getEarthquakes().subscribe((earthquakes) => {
      expect(earthquakes).toEqual(mockEarthquakes());
      expect(mockHttp.get).toHaveBeenCalledWith(EarthquakeService.URL);
      expect(service._mapEarthquakes).toHaveBeenCalledWith(expectedResponse, 0);
      done();
    });
  });

  describe('_mapEarthquakes', () => {
    afterEach(() => {
      expect(mockResponse.json).toHaveBeenCalled();
    });

    it('should map earthquake data back to Earthquake objects', () => {
      let earthquakeFeatures: EarthquakeFeature[] = [mockEarthquakeFeature()];

      mockResponse.json = jasmine.createSpy('mockResponse.json').and.returnValue({
        features: earthquakeFeatures
      });

      expect(service._mapEarthquakes(mockResponse, -1)).toEqual([{
        usgsTitle: earthquakeFeatures[0].properties.title,
        time: earthquakeFeatures[0].properties.time,
        latitude: earthquakeFeatures[0].geometry[0],
        longitude: earthquakeFeatures[0].geometry[1],
        magnitude: earthquakeFeatures[0].properties.mag,
        url: earthquakeFeatures[0].properties.url
      }]);
    });

    it('should map multiple earthquake data back to Earthquake objects', () => {
      let earthquakeFeatures: EarthquakeFeature[] = [
        mockEarthquakeFeature(),
        {
          geometry: [6, 12], properties: {
            mag: 18,
            title: 'title2',
            time: 24,
            url: 'url2'
          }
        },
        {
          geometry: [7, 14], properties: {
            mag: 21,
            title: 'title3',
            time: 28,
            url: 'url3'
          }
        }
      ];

      mockResponse.json = jasmine.createSpy('mockResponse.json').and.returnValue({
        features: earthquakeFeatures
      });

      expect(service._mapEarthquakes(mockResponse, -1)).toEqual([
        {
          usgsTitle: earthquakeFeatures[0].properties.title,
          time: earthquakeFeatures[0].properties.time,
          latitude: earthquakeFeatures[0].geometry[0],
          longitude: earthquakeFeatures[0].geometry[1],
          magnitude: earthquakeFeatures[0].properties.mag,
          url: earthquakeFeatures[0].properties.url
        },
        {
          usgsTitle: earthquakeFeatures[1].properties.title,
          time: earthquakeFeatures[1].properties.time,
          latitude: earthquakeFeatures[1].geometry[0],
          longitude: earthquakeFeatures[1].geometry[1],
          magnitude: earthquakeFeatures[1].properties.mag,
          url: earthquakeFeatures[1].properties.url
        },
        {
          usgsTitle: earthquakeFeatures[2].properties.title,
          time: earthquakeFeatures[2].properties.time,
          latitude: earthquakeFeatures[2].geometry[0],
          longitude: earthquakeFeatures[2].geometry[1],
          magnitude: earthquakeFeatures[2].properties.mag,
          url: earthquakeFeatures[2].properties.url
        }
      ]);
    });

    it('should map earthquake data back to Earthquake objects and limit number returned', () => {
      let earthquakeFeatures: EarthquakeFeature[] = [
        mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(),
        mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(),
        mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(),
        mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(), mockEarthquakeFeature(),
        mockEarthquakeFeature()
      ];

      mockResponse.json = jasmine.createSpy('mockResponse.json').and.returnValue({
        features: earthquakeFeatures
      });

      expect(service._mapEarthquakes(mockResponse, -1).length).toBe(EarthquakeService.NUMBER_TO_DISPLAY);
    });

    function mockEarthquakeFeature(): EarthquakeFeature {
      return {
        geometry: [5, 10], properties: {
          mag: 15,
          title: 'title',
          time: 20,
          url: 'url'
        }
      };
    }
  });
});
