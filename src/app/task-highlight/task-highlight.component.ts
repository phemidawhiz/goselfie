
import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import previousTasks from './tasks';

@Component({
  selector: 'task-highlight',
  templateUrl: './task-highlight.component.html',
  styleUrls: ['./task-highlight.component.scss']
})
export class TaskHighlightComponent implements OnInit {

  taskHighlightDetails = {
    description: "View Task Highlight",
    linkUrl: "/register",
    tasks: previousTasks
  }

  getTaskImageUrl = (imageName: string): string => {
    return `${environment.baseDomain}/api/selfies/${imageName}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
