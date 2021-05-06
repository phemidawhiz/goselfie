import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'linkbutton',
  templateUrl: './link-button.component.html',
  styleUrls: ['./link-button.component.scss']
})
export class LinkButtonComponent {

  @Input() description: string;
  @Input() linkUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  navigate() {
    this.router.navigate([this.linkUrl])
  }

}
