import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GeneralService } from '../general.service';

@Injectable()
export class PinUsageService extends GeneralService {

  constructor(http: HttpClient ) {
    super(`${environment.baseAPIDomain}/accesspin`, http);
  }
}
