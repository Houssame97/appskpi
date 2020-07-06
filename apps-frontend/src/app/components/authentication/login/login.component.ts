import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/authentication/login/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login/login';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isInvalidLogin = false;
  LoginForm = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
  });

  constructor(public loginService: LoginService, private http: HttpClient, private router: Router) { }
  onLogin(){
    this.loginService.authenticate(new Login(this.LoginForm.get("username").value, this.LoginForm.get("password").value))
     .subscribe(
      res => {
        this.loginService.saveToken(res.headers.get('Authorization'));
        this.router.navigate(['/technologie']);
        this.isInvalidLogin = false;
      },
      err => {
        console.log(err);
        this.isInvalidLogin = true;
      }
    );
  }
}
