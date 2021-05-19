import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ProfileGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService) { }

  canActivate() {
    const user = this.authService.currentUser;
    if (user) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
