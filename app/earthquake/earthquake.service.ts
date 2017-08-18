import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

import Earthquake from "./earthquake"

@Injectable()
export default class EarthquakeService {
  static readonly URL: string = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";
  private static readonly NUMBER_TO_DISPLAY: number = 20;

  constructor(private http: Http) { }

  getEarthquakes(): Observable<Earthquake[]> {
    return this.http.get(EarthquakeService.URL)
      .map(this.mapEarthquakes)
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error || "Server Error");
  }

  private mapEarthquakes(response: Response): Array<Earthquake> {
    let earthquakeFeatures: Array<{}> = response.json().features;
    var earthquakes: Array<Earthquake> = []
    let displayTotal: number = earthquakeFeatures.length < EarthquakeService.NUMBER_TO_DISPLAY ?
      earthquakeFeatures.length :
      EarthquakeService.NUMBER_TO_DISPLAY;

    for (let count = 0; count < displayTotal; count++) {
      let earthquakeProperties: {} = earthquakeFeatures[count]["properties"];
      let earthquakeCoordinates: Array<number> = earthquakeFeatures[count]["geometry"]["coordinates"];

      let earthquake: Earthquake = new Earthquake(
        earthquakeProperties["title"],
        earthquakeProperties["time"],
        earthquakeProperties["mag"],
        earthquakeProperties["url"],
        earthquakeCoordinates[0],
        earthquakeCoordinates[1]
      );

      earthquakes.push(earthquake);
    }

    return earthquakes;
  }
}
