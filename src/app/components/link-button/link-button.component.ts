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
  @Input() bottomRadius: boolean = true;
  @Input() normalLink: boolean;

  constructor(private route: ActivatedRoute, private router: Router) { }

  navigate() {

    if(this.normalLink) {
      window.location.assign(this.linkUrl);
    } else {
      this.router.navigate([this.linkUrl])
    }
  }

}
