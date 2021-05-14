import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() title: string;
  @Input() isImageLeft: boolean;
  @Input() content: Array<string>;
  @Input() imageSource: string;
  @Input() isGreyBackground?: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
