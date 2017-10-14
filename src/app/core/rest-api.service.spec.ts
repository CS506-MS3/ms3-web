import {TestBed, inject} from '@angular/core/testing';

import {RestApiService} from './rest-api.service';
import {RestApiRequest} from './rest-api-request';
import {API} from './api-endpoints.constant';
import {Headers, HttpModule, XHRBackend, Request, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {HttpStatus} from './http-status.enum';
import {AuthService} from '../auth/auth.service';
import {Observable} from 'rxjs/Observable';
import {Auth} from '../_domains/auth';
import 'rxjs/add/Observable/of';

describe('RestApiService', () => {
  let testRequest: RestApiRequest;
  let testCredentials;
  let mockAuthService;

  class ErrorResponse extends Response implements Error {
    name: any;
    message: any;
  }

  class MockAuthService {
    public auth$ = Observable.of(new Auth());

    setAuth(auth: Auth) {
      this.auth$ = Observable.of(auth);
    }
  }

  beforeEach(() => {
    testCredentials = {
      email: 'test@email.com',
      password: 'testPassword'
    };
    testRequest = new RestApiRequest(API.AUTH.SIGN_IN);
    testRequest.setBody(testCredentials);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        {provide: XHRBackend, useClass: MockBackend},
        {provide: AuthService, useClass: MockAuthService},
        RestApiService
      ]
    });

    mockAuthService = TestBed.get(AuthService);
  });

  it('should be created', inject([XHRBackend, RestApiService], (mockBackend, service) => {
    expect(service).toBeTruthy();
  }));

  describe('request', () => {
    it('should send http request', inject([XHRBackend, RestApiService], (mockBackend, service) => {
      const expectedHeaders = new Headers({
        'Content-Type': 'application/json'
      });
      const expectedRequest = new Request({
        method: 'POST',
        url: API.AUTH.SIGN_IN.url,
        headers: expectedHeaders,
        body: JSON.stringify(testCredentials)
      });

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.toJSON()).toEqual(expectedRequest.headers.toJSON());
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: {
              test: 'response'
            }
          })
        ));
      });

      service.request(testRequest).subscribe((res) => {
        expect(res.test).toEqual('response');
      });
    }));

    describe('request with Auth', () => {
      const token = 'testToken';
      beforeEach(() => {
        mockAuthService.setAuth(new Auth(token));
      });

      it('should add token if available', inject([XHRBackend, RestApiService], (mockBackend, service) => {
        const expectedHeaders = new Headers({
          'Authorization': token,
          'Content-Type': 'application/json'
        });
        const expectedRequest = new Request({
          method: 'POST',
          url: API.AUTH.SIGN_IN.url,
          headers: expectedHeaders,
          body: JSON.stringify(testCredentials)
        });

        mockBackend.connections.subscribe((connection: MockConnection) => {
          expect(connection.request).toEqual(expectedRequest);
          expect(connection.request.headers.toJSON()).toEqual(expectedRequest.headers.toJSON());
          connection.mockRespond(new Response(
            new ResponseOptions({
              body: {
                test: 'response'
              }
            })
          ));
        });

        service.request(testRequest).subscribe((res) => {
          expect(res.test).toEqual('response');
        });
      }));
    });
    
    it('should throw response error if request returns an error', inject([XHRBackend, RestApiService], (mockBackend, service) => {
      const expectedHeaders = new Headers({
        'Content-Type': 'application/json'
      });
      const expectedRequest = new Request({
        method: 'POST',
        url: API.AUTH.SIGN_IN.url,
        headers: expectedHeaders,
        body: JSON.stringify(testCredentials)
      });

      mockBackend.connections.subscribe((connection: MockConnection) => {
        expect(connection.request.headers.toJSON()).toEqual(expectedRequest.headers.toJSON());
        connection.mockError(new ErrorResponse(
          new ResponseOptions({
            body: {
              alert_msg: 'error'
            },
            status: HttpStatus.BAD_REQUEST
          })
        ));
      });

      service.request(testRequest).catch((error) => {
        expect(error.error).toEqual('[400 BAD_REQUEST] error');
      });
    }));
  });
});
