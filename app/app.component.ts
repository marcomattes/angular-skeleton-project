import { Component, ViewContainerRef } from '@angular/core';

import { WelcomeRoute } from './home/routes';
import { EarthquakeRoute } from './earthquake/routes';

import { ToastrService } from './shared/toastr.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  static readonly Title: string = 'Mobile Tech Challenges';
  pageTitle: string = AppComponent.Title;

  welcomeUrl: string = WelcomeRoute.url;
  welcomeTitle: string = WelcomeRoute.title;

  earthquakeUrl: string = EarthquakeRoute.url;
  earthquakeTitle: string = EarthquakeRoute.title;

  constructor(private toastr: ToastrService,
    private viewContainerRef: ViewContainerRef) {
    toastr.setViewContainer(viewContainerRef);
  }
}
