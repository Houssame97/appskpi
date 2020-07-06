import { Component } from '@angular/core';
import { LoginService } from './services/authentication/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APPS KPIS';
  constructor(private loginService: LoginService){}
  ngOnInit(){
    this.loginService.loadToken();
  }
  isAuthenticated(){
    return this.loginService.isUserLoggedIn();
  }
}
