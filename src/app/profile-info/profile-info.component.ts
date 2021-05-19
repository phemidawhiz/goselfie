import { Component, Input } from '@angular/core';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent  {

  baseDomain: string = environment.baseAPIDomain;
  @Input() isLoggedIn: boolean = false;
  @Input() username: string;
  @Input() about: string;
  @Input() twitterUrl: string;
  @Input() instagramUrl: string;
  @Input() facebookUrl: string;
  @Input() imageSource: string;

  constructor() { }

}
