import { Injectable } from '@angular/core';
import { SessionStorage } from 'ng2-webstorage';

// user can be any TS object

@Injectable()
export class Session {
  @SessionStorage('authUser') private authUser: string;

  // objects are intentionally wrapped to allow mocking of session
  getAuthUser() {
    return this.authUser;
  }

  setAuthUser(authUser: string) {
    this.authUser = authUser;
  }
}
