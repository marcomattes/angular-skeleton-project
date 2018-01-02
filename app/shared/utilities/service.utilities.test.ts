import { Response, ResponseOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';

import { ServiceUtilities } from './service.utilities';
import { ToastrService } from '../toastr.service';

describe(`ServiceUtilitiesTests`, () => {
  let utils: ServiceUtilities;
  let mockRouter: Router;
  let mockToastr: ToastrService;

  beforeEach(() => {
    mockRouter = jasmine.createSpyObj('', ['']);
    mockToastr = jasmine.createSpyObj('', ['']);

    utils = new ServiceUtilities(mockRouter, mockToastr);
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

    expect(utils.getCommonRequestOptions()).toEqual(expectedOptions);
  });

  it('getCommonRequestOptions should return default options extended with provided headers', () => {
    let headers: Headers = new Headers();
    headers.append('cookie', 'jessionID');

    let expectedOptions: any = {
      withCredentials: true,
      headers: headers
    };

    expect(utils.getCommonRequestOptions(headers)).toEqual(expectedOptions);
  });
});
