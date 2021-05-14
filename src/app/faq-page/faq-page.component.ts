import { faqs } from './../common/utilities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.scss']
})
export class FaqPageComponent implements OnInit {

  get faqs() {
    return faqs;
  }

  constructor() { }

  ngOnInit() {
  }

}
