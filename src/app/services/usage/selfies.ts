import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { DataService } from '../data.service';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';

@Injectable()
export class PublicSelfieService extends GeneralService {

  constructor(http: HttpClient, username: string) {
    super(`${environment.baseAPIDomain}/pselfies?type=selfies&username=${username}`, http);
  }
}
