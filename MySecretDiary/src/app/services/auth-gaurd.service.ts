import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  constructor(private as : AuthenticationServiceService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.as.isUserLoggedIn())
      return true;

    this.router.navigate(['/']);
    return false;

  }
}
