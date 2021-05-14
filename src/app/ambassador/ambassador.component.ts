import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.scss']
})
export class AmbassadorComponent implements OnInit {

  @Input() isBrandPage: boolean;

  readMoreLink = {
    linkUrl: "/ambassador",
    description: "Read More"
  }

  constructor() { }

  ngOnInit() {
  }

}
