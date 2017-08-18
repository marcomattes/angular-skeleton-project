import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from '../shared/shared.module';

import LoginHistoryRoutes from './routes';
import LoginHistoryComponent from './login-history.component';
import LoginHistoryService from './login-history.service';

@NgModule({
  imports: [
    RouterModule.forChild(LoginHistoryRoutes),
    SharedModule
  ],
  declarations: [
    LoginHistoryComponent
  ],
  providers: [LoginHistoryService]
})
export default class LoginHistoryModule { }
