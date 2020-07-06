import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import { environment } from '../../../../environments/environment';
import { Login } from 'src/app/models/login/login';

const apiUrl = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;
  username: string;
  expiresAt: any;
  role: string;
  user = new Array<string>(4);

  constructor(private http: HttpClient) { }

  authenticate(login: Login) {
    return this.http.post(apiUrl + "login", login, {observe: 'response'});
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
    this.parseJWT();
  }

  // get data from token by auth0 library
  parseJWT() {
    const jwtHelper = new JwtHelperService();
    this.parseUser(jwtHelper.decodeToken(this.token).user);
    this.role = jwtHelper.decodeToken(this.token).roles;
    this.username = jwtHelper.decodeToken(this.token).obj;
    this.expiresAt = moment().add(jwtHelper.decodeToken(this.token).exp, 'second');
  }

  parseUser(user: Array<string>[]) {
    this.user['idUser'] = user[0];
    this.user['nomUser'] = user[1];
    this.user['prenomUser'] = user[2];
    this.user['nomPoste'] = user[3];
    console.log(this.user);
  }

  isUserLoggedIn() {
    if (this.expiresAt) {
      return moment().isBefore(moment(this.expiresAt));
    }
    return false;
  }

  loadToken() {
    this.token = localStorage.getItem('token');
    if(this.token){
      this.parseJWT();
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.initializeParams();
  }

  initializeParams() {
    this.token = null;
    this.username = null;
    this.expiresAt = null;
    this.role = null;
    this.user = new Array<string>(4);
  }

  getRole() {
    return this.role;
  }

  getUser() {
    return this.user;
  }
}
