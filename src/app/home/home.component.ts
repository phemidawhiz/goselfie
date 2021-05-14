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

  aboutDetails = {
    title: "About us",
    content: ["Goselfie is a selfie contest platform where participants can register and partake in the Goselfie tasks with their phones and stand a chance of becoming a star.",  "Since selfies is another thing that connects everyone besides music, our priority is to connect everyone together with the sole purpose of bringing out their talent, building their confidence, improve the way they look at themselves and positioning them for future global opportunities."],
    imageSource: "../../assets/images/woman_laptop.png",
    isImageLeft: true
  }

  constructor(private authService: AuthService) { }
}
