import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { TestBed } from '@angular/core/testing';

import { ServiceUtilities } from './service.utilities';
import { StringUtilities } from './string.utilities';
import { ToastrService } from '../toastr.service';

export class TestUtilities {
  static MOCK_URL_CALLED: boolean = false;

  static configureTestingModuleForMockHttp(testbed: TestBed, getServiceFunction: Function): void {
    let toastr: ToastrService = new ToastrService(null);

    testbed.configureTestingModule({
      providers: [
        ServiceUtilities,
        StringUtilities,
        BaseRequestOptions,
        MockBackend,
        { provide: Router, useValue: new Router(null, null, null, null, null, null, null, []) },
        { provide: ToastrService, useValue: toastr },
        getServiceFunction(),
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          }
        }
      ]
    });
  }

  static mockHttpResponse(serviceUrl: string, backend: MockBackend, data: string): void {
    let options: ResponseOptions = TestUtilities.getOptions(data);

    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url === `${process.env.API_DOMAIN}${process.env.API_URL}${serviceUrl}`) {
        const response = new Response(options);
        connection.mockRespond(response);
        TestUtilities.MOCK_URL_CALLED = true;
      } else {
        TestUtilities.MOCK_URL_CALLED = false;
      }
    });
  }

  private static getOptions(data: string): ResponseOptions {
    let headers: Headers = new Headers();
    headers.append('content-type', 'application/json');

    return new ResponseOptions({
      body: JSON.parse(data),
      status: 200,
      headers: headers
    });
  }
}
