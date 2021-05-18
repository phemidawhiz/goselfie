import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selfies',
  templateUrl: './selfies.component.html',
  styleUrls: ['./selfies.component.scss']
})
export class SelfiesComponent {

  @Input() images: Array<string>;

  constructor() { }


}
