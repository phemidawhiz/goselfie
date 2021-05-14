import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-item',
  templateUrl: './faq-item.component.html',
  styleUrls: ['./faq-item.component.scss']
})
export class FaqItemComponent implements OnInit {

  @Input() title: string;
  @Input() content?: Array<string>;

  clicked: boolean = false;

  constructor() { }

  expandCollapse() {
    this.clicked = !this.clicked;
  }

  ngOnInit() {
  }

}
