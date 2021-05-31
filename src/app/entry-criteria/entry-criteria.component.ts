import { IEntryCriterion } from './../common/types';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'entry-criteria',
  templateUrl: './entry-criteria.component.html',
  styleUrls: ['./entry-criteria.component.scss']
})
export class EntryCriteriaComponent implements OnInit {

  @Input() isCriteria: boolean = true;
  @Input() entryCriteria: Array<IEntryCriterion>;
  @Input() ethics: Array<IEntryCriterion>;

  constructor() { }

  ngOnInit() {
  }

}
