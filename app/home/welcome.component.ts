import { Component } from '@angular/core';

import { WelcomeRoute } from './routes';

@Component({
  templateUrl: 'welcome.component.html'
})
export default class WelcomeComponent {
    public pageTitle: string = WelcomeRoute.title;
}
