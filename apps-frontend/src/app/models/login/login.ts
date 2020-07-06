export class Login {
  idLogin: number = null;
  username: string = null;
  password: string = null;
  constructor()
  constructor(username?: string, password?: string)
  constructor(username?: string, password?: string, idLogin?: number){
    this.idLogin = idLogin;
    this.username = username;
    this.password = password;
  }
}
