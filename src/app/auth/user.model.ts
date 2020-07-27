export class User {
  constructor(public email: string,
              public id: string,
              private _TOKEN: string,
              private _TOKEN_EXP_DATE: Date
  ) { }

  get token() {
    if (!this._TOKEN_EXP_DATE || new Date() > this._TOKEN_EXP_DATE) {
      return null;
    }
    return this._TOKEN;
  }
}
