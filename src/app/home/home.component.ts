import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  contactLink = {
    description: "Contact Us",
    linkUrl: "/login"
  }

  constructor(private authService: AuthService) { }
}
