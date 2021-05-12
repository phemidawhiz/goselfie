import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  getStartedLink = {
    description: "Get Started",
    linkUrl: "/register"
  }

  emailSubLink = {
    description: ">",
    linkUrl: "/register"
  }

  constructor() { }

  ngOnInit() {
  }

}
