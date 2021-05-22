import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralService } from '../general.service';

@Injectable()
export class PaymentVerificationService extends GeneralService {

  constructor(http: HttpClient, ) {
    super(`${environment.baseAPIDomain}/verifypayment`, http);
  }
}
