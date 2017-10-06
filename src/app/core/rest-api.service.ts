import {Injectable} from '@angular/core';
import {Http, Headers, Request, Response, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {HttpStatus} from './http-status.enum';
import {environment} from '../../environments/environment';
import {RequestArgs} from '@angular/http/src/interfaces';
import {Auth} from '../_domains/auth';
import {Store} from '@ngrx/store';

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

  request(options: RequestOptionsArgs, pathParams?, searchParams?): Observable<any> {
    options.headers = new Headers();
    options.url = this.buildUrl(options.url, pathParams);

    if (searchParams) {
      options.search = searchParams;
    }

    if (this._token) {
      options.headers['Authorization'] = this._token;
    }

    if (options.body) {
      options = this.setOptions(options);
      options.headers.append('Content-Type', 'application/json');
    }

    return this.http.request(new Request(<RequestArgs>options))
      .map((res: Response) => res.json())
      .catch(this.throwResponseError);
  }

  private buildUrl(request: RequestOptionsArgs, pathParams): string {
    let url = environment.API_ENDPOINT.SERVER;
    url += this.replacePathParams(request.url, pathParams);

    return url;
  }

  private replacePathParams(path: string, pathParams): string {
    let url = '';

    const matchedPathParams = path.match(/(${[a-zA-Z]*})/g);
    matchedPathParams.forEach((match: string) => {
      const key = match.substr(2, match.length - 2);
      const value = pathParams[key];

      if (!value) {

        throw new Error(`parameter ${key} was not provided`);
      }

      url = path.replace(match, encodeURIComponent(value));
    });

    return url;
  }

  private setOptions = (options: RequestOptionsArgs) =>
    options.body !== 'string' ? JSON.stringify(options.body) : options.body

  private throwResponseError(error: any) {
    const errorBody = error.json();
    const errorMessage = `[${error.status} ${HttpStatus[error.status]}] ${errorBody.message || 'Unknown Error'}`;

    return Observable.throw({
      status: error.status,
      error: errorMessage
    });
  }
}
