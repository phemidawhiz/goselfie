import { environment } from './../../environments/environment';
import { DataService } from './data.service';
import { JwtHelper, tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AuthService extends DataService {
  [x: string]: any;
  constructor(private router: Router, authHttp: AuthHttp, http: Http) {
    super(environment.baseAPIDomain + '/login', authHttp, http);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return tokenNotExpired(); // Angular short cut.

    // WHAT IS REALLY HAPPENING UNDER THE HOOD.
    /* const jwtHelper = new JwtHelper();
    const token = localStorage.getItem('token');
    if (!token) {
      return false;
    }
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);
    console.log("Token expiration date: ", expirationDate);
    return !isExpired; */
  }

  get currentUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      return null;
    }

    const userData = new JwtHelper().decodeToken(token);

    return userData;
  }
}

