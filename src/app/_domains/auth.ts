export class Auth {

  constructor(public token: string = null,
              public email: string = null,
              public id: number | string = null) {
  }
}
