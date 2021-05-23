import { environment } from 'environments/environment';
import { IProfileInfo, ISelfie } from './../common/types';
import { ProfileInfoService } from './../services/usage/profile.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/services/auth.service';


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

  selfies: Array<ISelfie> = [
    {
        "filename": "selfies/d52dC3E3C591-1D04-4F3B-AF71-F40BFA300C69.jpeg",
        "datetime": "2021-01-01 12:54:26",
        "taskid": "45",
        "taskdesc": "TAKE A PICTURE  HOLDING A CARDBOARD WRITTEN HAPPY NEW YEAR TO A NEW NIGERIA",
        "tasktitle": "HAPPY NEW YEAR"
    },
    {
        "filename": "selfies/d83d37CD1B9E-F27D-49C6-B795-17D8A4545D6F.jpeg",
        "datetime": "2020-12-31 15:49:54",
        "taskid": "44",
        "taskdesc": "TAKE A SELFIE OF TWO DIFFERENT ANGLES.....HIGH AND LOW ANGLES",
        "tasktitle": "ANGLES SELFIE SHOT"
    },
    {
        "filename": "selfies/d68dAEADD99E-CC8B-4A6D-B00D-78F6213154AF.jpeg",
        "datetime": "2020-12-29 16:39:06",
        "taskid": "43",
        "taskdesc": "TAKE A PICTURE  PREPARING ANY LOCAL DISH",
        "tasktitle": "LOCAL DISH"
    },
    {
        "filename": "selfies/d86d1FAB3EE0-8B9E-49D5-9A14-A404763F1522.jpeg",
        "datetime": "2020-12-28 15:12:22",
        "taskid": "42",
        "taskdesc": "TAKE A SELFIE IN FOUR DIFFERENT EXPRESSION MOOD",
        "tasktitle": "MOOD"
    },
    {
        "filename": "selfies/d19dD395DDD2-DE05-4EEA-9B85-556F9ACDDC37.jpeg",
        "datetime": "2020-12-26 11:28:47",
        "taskid": "41",
        "taskdesc": "TAKE A PICTURE OF YOURSELF CARRYING OUT ANY FITNESS ACTIVITIES  OR IN A GYM",
        "tasktitle": "FITNESS"
    },
    {
        "filename": "selfies/d50d723A34C2-F645-4C53-B2AC-050CC71064CC.jpeg",
        "datetime": "2020-12-24 17:51:08",
        "taskid": "40",
        "taskdesc": "TAKE A PICTURE WEARING ANY XMAS COSTUME, eg xmas hat, cap etc....",
        "tasktitle": "xmas"
    },
    {
        "filename": "selfies/d29d9724B992-3F6F-4B38-A625-9070BA6C742B.jpeg",
        "datetime": "2020-12-22 15:38:09",
        "taskid": "39",
        "taskdesc": "TAKE A PICTURE HOLDING A CARDBORD HIGHLIGHTING THREE REASONS WHY YOU SHOULD BE THE WINNER OF THE CONTEST",
        "tasktitle": "reasons"
    },
    {
        "filename": "selfies/d42dC283411F-08AD-4990-8521-4340384CD97F.jpeg",
        "datetime": "2020-12-20 16:38:55",
        "taskid": "38",
        "taskdesc": "TAKE A SELFIE OF YOURSELF IN OR STANDING BY A SWIMMING POOL",
        "tasktitle": "SWIMMING POOL"
    },
    {
        "filename": "selfies/d90d4B71680E-7F3C-4998-A234-1A018AEACF83.jpeg",
        "datetime": "2020-12-17 15:26:49",
        "taskid": "37",
        "taskdesc": "TAKE A PICTURE OF YOURSELF IN ANY CULTURAL ATTIRE",
        "tasktitle": "CULTURAL ATTIRE"
    },
    {
        "filename": "selfies/d59d63EAD933-3483-462E-82D9-618C83F3A7DD.jpeg",
        "datetime": "2020-12-16 11:22:58",
        "taskid": "35",
        "taskdesc": "take a picture of yourself standing AKIMBO",
        "tasktitle": "akimo"
    },
    {
        "filename": "selfies/d21d85AB8496-69AD-4FD5-BB88-B5C241234A81.jpeg",
        "datetime": "2020-12-12 09:54:48",
        "taskid": "33",
        "taskdesc": "POST YOUR PICTURE OF YOUR BEFORE AND NOW.. USE PICMIX TO PLACE THE TWO PICTURES TOGETHER.....\\nKEYWORD: PICTURE",
        "tasktitle": "BEFORE AND NOW"
    },
    {
        "filename": "selfies/d50d90053302-BB73-4FAD-92EB-46EE073AD083.jpeg",
        "datetime": "2020-12-11 15:24:15",
        "taskid": "31",
        "taskdesc": "1. TAKE A SELFIE DRINKING OR HOLDING  PEPSI.ON YOUR SOCIAL MEDIA HANDLE TAG PEPSI_NAIJA, WITH THE CAPTION(GOSELFIE SEASON ONE CONTESTDAY10 TASK) .USE THE HASHTAG GOSELFIENG IN THE CAPTION KEYWORD: SEL",
        "tasktitle": "pespsi"
    },
    {
        "filename": "selfies/d27dDE550AC9-012D-4307-97AB-42A1D4C5F1EF.jpeg",
        "datetime": "2020-12-08 12:49:19",
        "taskid": "30",
        "taskdesc": "Take a selfie eating your favourite meal...",
        "tasktitle": "Meal selfie"
    },
    {
        "filename": "selfies/d91d4368D8CB-D6BC-4B32-A596-134B7F5C0F74.jpeg",
        "datetime": "2020-12-06 15:54:24",
        "taskid": "29",
        "taskdesc": "Take a group selfie of maximum of 6 people",
        "tasktitle": "Group selfie"
    },
    {
        "filename": "selfies/d71d3378F57F-754C-4B58-AB14-6BBC161B9B4D.jpeg",
        "datetime": "2020-12-05 10:14:33",
        "taskid": "27",
        "taskdesc": "Take a selfie holding a cardboard written #betterNigeria...",
        "tasktitle": "Better Nigeria"
    },
    {
        "filename": "selfies/d18d0DE0D835-6C0F-4FF8-9072-CA2215CFB3D5.jpeg",
        "datetime": "2020-12-04 09:29:55",
        "taskid": "25",
        "taskdesc": "Take a selfie wearing a covid19 fitting mask (nose mask)",
        "tasktitle": "Hello world"
    },
    {
        "filename": "selfies/d46d945ADD78-F78C-4E95-B724-3E9D3744E72B.jpeg",
        "datetime": "2020-12-02 10:14:32",
        "taskid": "24",
        "taskdesc": "DAY 1:  TASK 1:TAKE A MIRROR SELFIE...\\nYOU HAVE 24 HRS TO DO SO....",
        "tasktitle": "TASK 1"
    }
]

  constructor(private service: ProfileInfoService, private route: ActivatedRoute, public authService: AuthService) { }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    /* const __this = this;
    this.service.getUserDetails()
      .subscribe(profileInfo => {
        __this.profileInfo = profileInfo.data;
        console.log("Tasks: ", __this.profileInfo);
      }); */

  }

}
