import { Component, Input } from '@angular/core';
//import 'lazysizes';
// import a plugin
//import 'lazysizes/plugins/parent-fit/ls.parent-fit';


@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent {

  @Input() isBlack: boolean;
  constructor() { }



}
