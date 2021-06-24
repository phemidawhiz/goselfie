import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homevideo',
  templateUrl: './homevideo.component.html',
  styleUrls: ['./homevideo.component.scss']
})
export class HomevideoComponent implements OnInit {

  showVideo: boolean;
  constructor() { }

  videoNames: Array<string> = [
    'goselfie.mp4',
    //'goselfie1.mp4',
    //'goselfie2.mp4',
    //'goselfie3.mp4'
  ]

  ngOnInit() {
  }

  playVideo = () => {
    this.showVideo = true;
  }

}
