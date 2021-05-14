
import { pageTitles, pageInfo } from '../common/utilities';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  aboutDetails = {
    title: "Our Mission",
    content: ["Goselfie is on a mission of rewarding people and making them a star with their selfies. As the internet has been part of our lives, different social medias have emerge to keep us connected together but less people get recognize on these platforms because they are either not a celebrity or a social media influencer this where Goselfie comes in. Goselfie is trying to celebrate everybody for being part of this global village called the internet through their selfies or pictures."],
    imageSource: "../../assets/images/mission.png",
    isImageLeft: true
  }

  visionStatement = {
    title: "Vision Statement",
    content: ["We are bent to bring to an end the era of taking pictures and selfies just for social media likes, comments and shares but to make you a celebrity or star."],
    imageSource: "../../assets/images/vision.png",
    isImageLeft: false
  }

  missionStatement = {
    title: "Mission Statement",
    content: ["To design an approach where individuals are given tasks in forms of pictures and selfies thereby show casing their artistry by unleashing their potentials for global opportunies."],
    imageSource: "../../assets/images/mission_statement.png",
    isImageLeft: true
  }

  howItWorks = {
    title: "How it works",
    content: ["Entrants are required to register on the website with a certain amount of money where task will be given in form of pictures or selfie where creativity and adherence decides who the next star would be."]
  }

  get pageTitle() {
    return pageTitles.aboutPage;
  }

  get pageInfo() {
    return pageInfo.aboutPage;
  }

  constructor() { }

  ngOnInit() {
  }

}
