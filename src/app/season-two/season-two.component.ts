import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'season-two',
  templateUrl: './season-two.component.html',
  styleUrls: ['./season-two.component.scss']
})
export class SeasonTwoComponent implements OnInit {

  getStartedLink = {
    description: "Get Started",
    linkUrl: "/register"
  }

  constructor() { }

  ngOnInit() {
  }

}
