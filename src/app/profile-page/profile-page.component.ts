import { IProfileInfo } from './../common/types';
import { ProfileInfoService } from './../services/usage/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})


export class ProfilePageComponent implements OnInit {

  profileInfo: IProfileInfo;

  constructor(private service: ProfileInfoService, private route: ActivatedRoute) { }

  ngOnInit() {
    const __this = this;
    this.service.getUserDetails()
      .subscribe(profileInfo => {
        __this.profileInfo = profileInfo.data;
        console.log("Tasks: ", __this.profileInfo);
      });
  }

}
