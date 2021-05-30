import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { IEntryCriterion } from 'app/common/types';

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

  entryCriteria: Array<IEntryCriterion> = [
    {
      id: "01",
      criterion: "Participation is open to both male and female aged 16 and above"
    },
    {
      id: "02",
      criterion: "All entrants must purchase the form via the dedecated website."
    },
    {
      id: "03",
      criterion: "Ask are to be submitted in form of pictures only (Jpeg or PNG not more than 1mb)."
    },
    {
      id: "04",
      criterion: "Contestant are to follow Goselfie on all social media platforms."
    },
    {
      id: "05",
      criterion: "Participation is open to everyone from any part of the country"
    }
  ]

  aboutDetails = {
    title: "About us",
    content: ["Goselfie is a selfie contest platform where participants can register and partake in the Goselfie tasks with their phones and stand a chance of becoming a star.",  "Since selfies is another thing that connects everyone besides music, our priority is to connect everyone together with the sole purpose of bringing out their talent, building their confidence, improve the way they look at themselves and positioning them for future global opportunities."],
    imageSource: "../../assets/images/woman_laptop.png",
    isImageLeft: true
  }

  constructor(private authService: AuthService) { }
}
