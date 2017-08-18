import { Response, ResponseOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { expect } from 'chai';
import { SinonMock, mock } from 'sinon';

import { ServiceUtilities } from './service.utilities';
import { ToastrService } from '../toastr.service';

describe(`ServiceUtilitiesTests`, () => {
  let utils: ServiceUtilities;
  let mockRouter: SinonMock;
  let mockToastr: SinonMock;

  beforeEach(() => {
    let router: Router = new Router(null, null, null, null, null, null, null, []);
    mockRouter = mock(router);

    let toastr: ToastrService = new ToastrService(null);
    mockToastr = mock(toastr);

    utils = new ServiceUtilities(router, toastr);
  });

  it(`map should return json object from body`, () => {
    // create mock data
    let headers: Headers = new Headers();
    headers.append('content-type', 'application/json');

    let response: Response = new Response(new ResponseOptions({
      body: JSON.stringify('someMockData'),
      headers: headers
    }));

    // verify output
  });

  it('getCommonRequestOptions should return object withCredentials equal to true', () => {
    let expectedOptions: any = {
      withCredentials: true
    };

    expect(utils.getCommonRequestOptions()).to.deep.equal(expectedOptions);
  });

  it('getCommonRequestOptions should return default options extended with provided headers', () => {
    let headers: Headers = new Headers();
    headers.append('cookie', 'jessionID');

    let expectedOptions: any = {
      withCredentials: true,
      headers: headers
    };

    expect(utils.getCommonRequestOptions(headers)).to.deep.equal(expectedOptions);
  });
});
