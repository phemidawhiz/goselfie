import { PublicViewService } from './../services/usage/meminfo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProfileInfo, ISelfie } from 'app/common/types';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-public-view',
  templateUrl: './public-view.component.html',
  styleUrls: ['./public-view.component.scss']
})
export class PublicViewComponent implements OnInit {
  defaultProfileImage: string = `profileimages/person_7.jpg`;
  profileInfo: IProfileInfo;

  selfies: Array<ISelfie>;

  constructor(private service: PublicViewService, private route: ActivatedRoute) { }

  ngOnInit() {
    const username: string = this.route.snapshot.paramMap.get('username');
    console.log("Params ID: ", this.route.snapshot.paramMap.get('username'));
    const __this = this;
    this.service.getMemberInfoFromUsername(username)
      .subscribe(info => {
        __this.profileInfo = info.data;
        console.log("MemberInfo: ", __this.profileInfo);
        if(__this.profileInfo.profileimage === 'none')
          __this.profileInfo.profileimage = __this.defaultProfileImage;
      });

    this.service.getMemberSelfiesFromUsername(username)
    .subscribe(selfies => {
      __this.selfies = selfies.data;
      console.log("Selfies: ", __this.selfies);
    });



  }

}
