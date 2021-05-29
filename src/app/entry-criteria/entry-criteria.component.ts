import { IEntryCriterion } from './../common/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'entry-criteria',
  templateUrl: './entry-criteria.component.html',
  styleUrls: ['./entry-criteria.component.scss']
})
export class EntryCriteriaComponent implements OnInit {

  @Input() isCriteria: boolean = true;

  constructor() { }

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

  ngOnInit() {
  }

}
