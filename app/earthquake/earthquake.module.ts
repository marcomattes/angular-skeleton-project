import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import SharedModule from '../shared/shared.module';

import EarthquakeRoutes from './routes';
import EarthquakeComponent from './earthquake.component';
import EarthquakeService from './earthquake.service';

@NgModule({
  imports: [
    RouterModule.forChild(EarthquakeRoutes),
    SharedModule,
    BrowserModule
  ],
  declarations: [
    EarthquakeComponent
  ],
  providers: [
    EarthquakeService
  ]
})
export default class EarthquakeModule { }
