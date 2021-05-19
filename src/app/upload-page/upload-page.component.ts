import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss']
})
export class UploadPageComponent implements OnInit {

  pageInfo: any = {
    title: "Profile Image",
    notice: "Upload Profile Image"
  }
  constructor() { }

  ngOnInit() {
  }

}
