export class Token {

  constructor(private _token: string = null) {
  }

  public getToken(): string {

    return this._token;
  }
}
