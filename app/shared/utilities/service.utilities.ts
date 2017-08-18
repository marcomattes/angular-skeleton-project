import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

import { ToastrService } from '../toastr.service';
import { ErrorResponse } from '../error-handling/error-response';

@Injectable()
export class ServiceUtilities {
  boundMap: any;
  boundMapWithCache: any;
  boundHandleError: any;

  map(response: Response): any {
    let contentTypeHeader: string = response.headers.get('content-type');

    if (contentTypeHeader && contentTypeHeader.match('json')) {
      return response.json();
    } else {
      // this.router.navigate([LoginRoute.url]);
      return '';
    }
  }

  mapWithCache(response: Response, cacheCallback: Function): any {
    let mappedValue: any = this.map(response);
    cacheCallback(mappedValue);
    return mappedValue;
  }

  handleError(error: Response): ErrorObservable<Error> {
    let errorMessage = 'Server Error';
    let errorJson: any = error.json();

    if (errorJson && errorJson.status === ErrorResponse.BAD_REQUEST) {
      return Observable.throw(errorJson);
    } else if (errorJson && errorJson.error) {
      errorMessage = `${errorJson.error}\n${errorJson.exception}\n${errorJson.message}`;
    }

    this.toastr.error('An error occurred accessing the API, please try again later.');
    return Observable.throw(new Error(errorMessage));
  }

  getCommonRequestOptions(headers?: Headers): any {
    let requestOptions: any = {
      withCredentials: true
    };

    if (headers) {
      requestOptions.headers = headers;
    }

    return requestOptions;
  }

  getUrl(serviceUrl: string): string {
    let finalUrl: string = process.env.API_DOMAIN + process.env.API_URL + serviceUrl;
    console.log(`final url : ${finalUrl}`);
    return finalUrl;
  }

  constructor(private router: Router,
    private toastr: ToastrService) {
    this.boundMap = this.map.bind(this);
    this.boundMapWithCache = this.mapWithCache.bind(this);
    this.boundHandleError = this.handleError.bind(this);
  }
}
