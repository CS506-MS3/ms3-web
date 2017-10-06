export class SignUpForm {

  constructor(public email: string,
              public password: string,
              public notification: boolean,
              public phoneNumber?: string) {
  }
}
