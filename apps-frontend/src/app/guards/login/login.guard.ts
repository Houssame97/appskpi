import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public loginService: LoginService, public router: Router) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate(): boolean {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['technologie']);
      return false;
    }
    return true;
  }
}
