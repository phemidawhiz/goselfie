import { AuthService } from 'app/services/auth.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProfileInfoService extends DataService {

  constructor(authHttp: AuthHttp, authService: AuthService) {
    super(`${environment.baseAPIDomain}/user?reqtype=info&username=${authService.currentUser.data.username}`, authHttp);
  }
}
