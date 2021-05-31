import { environment } from 'environments/environment';
import { IProfileInfo, ISelfie } from './../common/types';
import { ProfileInfoService } from './../services/usage/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserSelfieService } from 'app/services/usage/user.selfie';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})


export class ProfilePageComponent implements OnInit {

  defaultProfileImage: string = `profileimages/person_7.jpg`;

  profileInfo: IProfileInfo;

  selfies: Array<ISelfie> = []

  constructor(private service: ProfileInfoService, private selfieService: UserSelfieService, private route: ActivatedRoute, public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    const __this = this;
    this.service.getUserDetails()
      .subscribe(profileInfo => {
        if(profileInfo.status == 200){
          __this.profileInfo = profileInfo.json().data;
          console.log("Profile info: ", __this.profileInfo);
          if(__this.profileInfo.profileimage === "none") {
            this.router.navigate([ '/upload']);
          }
        } else {
          console.log("Unable to get profile info");
        }

      });

      this.selfieService.getUserSelfies()
      .subscribe(selfies => {
        if(selfies.status == 200){
          __this.selfies = selfies.json().data;
          console.log("selfies: ", __this.selfies);
        } else {
          console.log("Unable to get selfies");
        }
      });

  }

}
