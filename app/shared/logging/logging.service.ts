import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { ApplicationLog } from './application-log';

import { ServiceUtilities } from '../utilities/service.utilities';
import { Session } from '../session/session';

@Injectable()
export class LoggingService {
  static readonly ERROR_URL: string = '/applogs/error';

  logError(feature: string, message: string): Observable<any> {
    let log: ApplicationLog = new ApplicationLog();
    log.feature = feature;
    log.message = message;
    log.appUserName = this.session.getAuthUser() ? this.session.getAuthUser() : 'N/A';

    return this.http.post(this.serviceUtilities.getUrl(LoggingService.ERROR_URL), log,
      this.serviceUtilities.getCommonRequestOptions())
      .catch(this.serviceUtilities.boundHandleError);
  }

  constructor(private http: Http,
    private serviceUtilities: ServiceUtilities,
    private session: Session) { }
}
