import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginService } from 'src/app/services/authentication/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public loginService: LoginService, public router: Router) {}
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;
  canActivate(route: ActivatedRouteSnapshot, ): boolean {
    if (!this.loginService.isUserLoggedIn()) {
      this.router.navigate(['login']);
      return false;
    }
    const roles = route.data.roles as Array<string>;
    if (roles.find( r => r == this.loginService.getRole())) {
      return true;
    }
    this.router.navigate(['/technologie']);
    return false;
  }
}

