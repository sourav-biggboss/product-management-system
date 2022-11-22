import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService,
    private router: Router){}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      var isAuthenticated = this.authService.isLoggedIn();
      if (!isAuthenticated) {
          this.router.navigate(['/auth/login']);
      }
      return isAuthenticated;
  }
  
}
