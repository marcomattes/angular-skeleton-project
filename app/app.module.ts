import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import LoginHistoryModule from './login-history/login-history.module';
import EarthquakeModule from './earthquake/earthquake.module';
import SharedModule from './shared/shared.module';

import AppComponent from './app.component';
import WelcomeComponent from './home/welcome.component';

import WelcomeRoutes from './home/routes';

import { ToastrService } from './shared/toastr.service';

@NgModule({
  imports: [BrowserModule,
    LoginHistoryModule,
    EarthquakeModule,
    SharedModule,
    RouterModule.forRoot(WelcomeRoutes, { useHash: true })
  ],
  declarations: [AppComponent, WelcomeComponent],
  bootstrap: [AppComponent],
  providers: [ToastrService]
})
export class AppModule { }
