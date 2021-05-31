import { environment } from 'environments/environment';
import { IProfileInfo, ISelfie } from './../common/types';
import { ProfileInfoService } from './../services/usage/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { UserSelfieService } from 'app/services/usage/user.selfie';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})


export class ProfilePageComponent implements OnInit {

  defaultProfileImage: string = `profileimages/person_7.jpg`;

  profileInfo: IProfileInfo = {
    firstname: "ENIADE",
    lastname: "OLANIYI",
    phonenumber: "07064734198",
    email: "eniadegold@gmail.com",
    activated: "1",
    datetime: "2020-10-31 09:27:13",
    votecount: "0",
    screened: "0",
    mop: "paystack",
    username: "Eniade Gold",
    gender: "male",
    about: "I am a product of God’s grace, I am an artiste, a cinematographer, a model, content creator and also a blogger, I was born in Ibadan , Oyo state, I would love to be a well known personality.",
    age: "22",
    profileimage: "profileimages/d478293B99415D1-67BB-48E5-A486-D1A6CAA9163F.jpeg",
    twitter: null,
    instagram: null,
    facebook: null
  };

  selfies: Array<ISelfie> = []

  constructor(private service: ProfileInfoService, private selfieService: UserSelfieService, private route: ActivatedRoute, public authService: AuthService) { }

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
