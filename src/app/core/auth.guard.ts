import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) { }
  async canActivate() {
    console.log(this.router.routerState.snapshot.url);
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      console.log('Deny!');
      return false;
    }
    console.log('Allow!');
    return true;
  }
}
