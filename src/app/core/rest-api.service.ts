import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpStatus} from './http-status.enum';
import {RequestArgs} from '@angular/http/src/interfaces';
import {Auth} from '../_domains/auth';
import {Store} from '@ngrx/store';
import {RestApiRequest} from './rest-api-request';

@Injectable()
export class RestApiService {
  private _auth$;
  private _token: string;

  constructor(private http: Http, private _store: Store<any>) {
    this._auth$ = this._store.select('auth');
    this._auth$.subscribe((auth: Auth) => {

      this._token = auth.token;
    });
  }

  request(request: RestApiRequest): Observable<any> {
    if (this._token) {
      request.setHeader('Authorization', this._token);
    }

    const options = request.toRequestOptions();
    return this.http.request(new Request(<RequestArgs>options))
      .map((res: Response) => res.json())
      .catch(this.throwResponseError);
  }

  private throwResponseError(error: any) {
    const errorBody = error.json();
    const errorMessage = `[${error.status} ${HttpStatus[error.status]}] ${errorBody.message || 'Unknown Error'}`;

    return Observable.throw({
      status: error.status,
      error: errorMessage
    });
  }
}
