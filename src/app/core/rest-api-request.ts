import {API} from './api-endpoints.constant';
import {Headers, RequestOptionsArgs} from '@angular/http';
import {environment} from '../../environments/environment';

export class RestApiRequest {
  private _request: RequestOptionsArgs;

  constructor(private _requestTemplate: RequestOptionsArgs) {
    this._request = _requestTemplate;
    this._request.url = environment.API_ENDPOINT.SERVER + this._request.url;
    this._request.headers = new Headers();
  }

  setHeader(header: string, value: string) {
    this._request.headers.append(header, value);
  }

  setBody(body: any) {
    this._request.body = JSON.stringify(body);
    this.setHeader('Content-Type', 'application/json');
  }

  setUrlParams(params: any) {
    this._request.params = params;
  }

  setPathParams(params: any) {
    this._request.url = this.replacePathParams(this._request.url, params);
  }

  toRequestOptions() {

    return this._request;
  }

  private buildUrl(request: RequestOptionsArgs, pathParams): string {

    return this.replacePathParams(request.url, pathParams);
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
}
