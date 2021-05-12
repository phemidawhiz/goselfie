
import { pageTitles, pageInfo } from '../common/utilities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  get pageTitle() {
    return pageTitles.aboutPage;
  }

  get pageInfo() {
    return pageInfo.aboutPage;
  }

  constructor() { }

  ngOnInit() {
  }

}
