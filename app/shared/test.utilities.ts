import { TestBed } from '@angular/core/testing';
import { BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { SinonMock } from "sinon";

export default class TestUtilities {
  static configureTestingModuleForMockHttp(testbed: TestBed, getServiceFunction: Function) {
    testbed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
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

  static mockHttpResponse(url: string, backend: MockBackend, data: string) {
    let options: ResponseOptions = TestUtilities.getOptions(data);

    backend.connections.subscribe((connection: MockConnection) => {
      if (connection.request.url === url) {
        const response = new Response(options);
        connection.mockRespond(response);
      }
    });
  }

  private static getOptions(data: string): ResponseOptions {
    return new ResponseOptions({
      body: JSON.parse(data),
      status: 200
    });
  }

  static verifySinonMocks(...mocks: Array<SinonMock>) {
    for(var count = 0; count < mocks.length; count++) {
      let mock:SinonMock = mocks[count];
      mock.verify();
    }
  }
}
