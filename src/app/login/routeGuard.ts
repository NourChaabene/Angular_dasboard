import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';


@Injectable(
  {
    providedIn: 'root'
  }
)
export class CanActivateRouteGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const logged = Boolean( localStorage.getItem('loggedIn'));
    if (!logged) {
      this.router.navigate(['']);
    }
    return logged;
  }
}
