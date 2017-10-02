export class Token {

  constructor(private _token: string) {
  }

  public getToken(): string {

    return this._token;
  }
}
