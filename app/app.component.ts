import { Component, ViewContainerRef } from '@angular/core';

import { WelcomeRoute } from "./home/routes";
import { LoginHistoryRoute } from "./login-history/routes";
import { EarthquakeRoute } from "./earthquake/routes";

import { ToastrService } from "./shared/toastr.service";

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export default class AppComponent {
  static readonly Title: string = "Mobile Tech Challenges";
  pageTitle: string = AppComponent.Title;

  welcomeUrl: string = WelcomeRoute.url;
  welcomeTitle: string = WelcomeRoute.title;

  loginHistoryUrl: string = LoginHistoryRoute.url;
  loginHistoryTitle: string = LoginHistoryRoute.title;

  earthquakeUrl: string = EarthquakeRoute.url;
  earthquakeTitle: string = EarthquakeRoute.title;

  constructor(private toastr: ToastrService, viewContainerRef: ViewContainerRef) {
    toastr.setViewContainer(viewContainerRef);
  }
}
