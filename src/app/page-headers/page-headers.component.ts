import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-headers',
  templateUrl: './page-headers.component.html',
  styleUrls: ['./page-headers.component.scss']
})
export class PageHeadersComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
