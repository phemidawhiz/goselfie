import { ISelfie } from './../common/types';
import { Component, Input } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-selfies',
  templateUrl: './selfies.component.html',
  styleUrls: ['./selfies.component.scss']
})
export class SelfiesComponent {

  baseDomain: string = `${environment.baseAPIDomain}/`;

  @Input() images: Array<ISelfie>;

  constructor() { }


}
