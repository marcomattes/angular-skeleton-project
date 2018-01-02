import { Component, ViewContainerRef } from '@angular/core';

import { WelcomeRoute } from './home/routes';

import { ToastrService } from './shared/toastr.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export default class AppComponent {
  static readonly Title: string = 'Mobile Tech Challenges';
  pageTitle: string = AppComponent.Title;

  welcomeUrl: string = WelcomeRoute.url;
  welcomeTitle: string = WelcomeRoute.title;

  constructor(private toastr: ToastrService, viewContainerRef: ViewContainerRef) {
    toastr.setViewContainer(viewContainerRef);
  }
}
