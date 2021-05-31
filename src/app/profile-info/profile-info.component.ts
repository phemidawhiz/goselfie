import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LastTaskService } from 'app/services/usage/last.task';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit  {

  baseDomain: string = environment.baseAPIDomain;
  @Input() isLoggedIn: boolean = false;
  @Input() username: string;
  @Input() about: string;
  @Input() twitterUrl: string;
  @Input() instagramUrl: string;
  @Input() facebookUrl: string;
  @Input() imageSource: string;
  @Input() taskid: string;

  constructor(private route: ActivatedRoute, private service: LastTaskService) { }

  ngOnInit() {


      // info id of last task created
      let __this = this;
    this.service.getLastTaskInfo()
      .subscribe(info => {
        if(info.status === 200) {
          __this.taskid = info.json().data.id;
          console.log("info: ", info.json());
        }

      });

  }

}
