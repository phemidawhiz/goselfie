import { DataService } from '../data.service';
import { environment } from 'environments/environment';
import { AuthHttp } from 'angular2-jwt';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class SelfieImageUploadService extends DataService {

  constructor(authHttp: AuthHttp) {
    super(environment.baseAPIDomain + '/selfie', authHttp);
  }
}
