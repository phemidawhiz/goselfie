import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss']
})
export class PageInfoComponent implements OnInit {

  @Input() title: string;
  @Input() content: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
