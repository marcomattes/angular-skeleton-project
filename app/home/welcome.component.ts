import { Component } from '@angular/core';

import { WelcomeRoute } from './routes';

@Component({
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent {
  public pageTitle: string = WelcomeRoute.title;
}
