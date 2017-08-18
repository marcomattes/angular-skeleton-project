import { Component, OnInit } from '@angular/core';

import EarthquakeService from './earthquake.service';
import { EarthquakeRoute } from './routes';
import Earthquake from './earthquake';

import { ToastrService } from '../shared/toastr.service';

@Component({
  templateUrl: 'earthquake.component.html',
  styleUrls: []
})
export default class EarthquakeComponent implements OnInit {
  pageTitle: string = EarthquakeRoute.title;
  earthquakes: Array<Earthquake>;
  errorMessage: string;
  loading: boolean = true;

  ngOnInit(): void {
    console.log('retrieving earthquake data');
    this.earthquakeService.getEarthquakes().subscribe(
      earthquakes => {
        this.earthquakes = earthquakes;
        this.loading = false;
        this.toastr.success('Data retrieved successfully!');
      },
      error => {
        this.errorMessage = <any>error;
        this.loading = false;
        this.toastr.error(`Sorry, an error occurred retrieving the data: ${error}`);
      });
  }

  constructor(private earthquakeService: EarthquakeService, private toastr: ToastrService) { }
}
