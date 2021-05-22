import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';

@Injectable()
export class TaskInfoService extends GeneralService {

  constructor(http: HttpClient, ) {
    super(`${environment.baseAPIDomain}/taskinfo`, http);
  }
}
