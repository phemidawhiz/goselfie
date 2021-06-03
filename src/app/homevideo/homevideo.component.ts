import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homevideo',
  templateUrl: './homevideo.component.html',
  styleUrls: ['./homevideo.component.scss']
})
export class HomevideoComponent implements OnInit {

  showVideo: boolean;
  constructor() { }

  ngOnInit() {
  }

  playVideo = () => {
    this.showVideo = true;
  }

}
