import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.scss']
})
export class AmbassadorComponent implements OnInit {

  readMoreLink = {
    linkUrl: "/",
    description: "Read More"
  }

  constructor() { }

  ngOnInit() {
  }

}
