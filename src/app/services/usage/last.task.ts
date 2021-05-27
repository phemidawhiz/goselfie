import { DataService } from './../data.service';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class LastTaskService extends DataService {

  constructor(authHttp: AuthHttp ) {
    super(`${environment.baseAPIDomain}/user?reqtype=ltinfo&token=${localStorage.getItem('token')}`, authHttp);
  }
}
