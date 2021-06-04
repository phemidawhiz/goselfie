import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';

@Injectable()
export class TaskSelfiesService extends GeneralService {

  constructor(http: HttpClient ) {
    super(`${environment.baseAPIDomain}/taskselfies`, http);
  }
}
