import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent  {

  @Input() isLoggedIn: boolean;
  @Input() username: string;
  @Input() about: string;
  @Input() twitterUrl: string;
  @Input() instagramUrl: string;
  @Input() facebookUrl: string;
  @Input() imageSource: string;

  constructor() { }

}
