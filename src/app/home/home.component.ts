import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  link = {
    description: "Get Started",
    linkUrl: "/login"
  }

  constructor(private authService: AuthService) { }
}
