import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Earthquake } from './earthquake';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { EarthquakeFeature } from './earthquake-feature';

@Injectable()
export class EarthquakeService {
  static readonly URL: string = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson';
  static readonly NUMBER_TO_DISPLAY: number = 20;

  constructor(private http: Http) { }

  getEarthquakes(): Observable<Earthquake[]> {
    return this.http.get(EarthquakeService.URL).map(this._mapEarthquakes).catch(this.handleError);
  }

  _mapEarthquakes(response: Response, index: number): Array<Earthquake> {
    let earthquakeFeatures: Array<EarthquakeFeature> = response.json().features;
    let earthquakes: Array<Earthquake> = [];

    earthquakeFeatures.forEach((earthquakeFeature, index) => {
      if (index === EarthquakeService.NUMBER_TO_DISPLAY) {
        return;
      }

      let earthquake: Earthquake = {
        usgsTitle: earthquakeFeature.properties.title,
        time: earthquakeFeature.properties.time,
        magnitude: earthquakeFeature.properties.mag,
        url: earthquakeFeature.properties.url,
        latitude: earthquakeFeature.geometry[0],
        longitude: earthquakeFeature.geometry[1]
      };

      earthquakes.push(earthquake);
    });

    return earthquakes;
  }

  private handleError(error: Response): ErrorObservable {
    return Observable.throw(error || 'Server Error');
  }
}
