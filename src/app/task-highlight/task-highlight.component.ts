import { ITaskPage } from './../common/types';

import { Component, OnInit } from '@angular/core';
import { environment } from 'environments/environment';
import previousTasks from './tasks';

@Component({
  selector: 'task-highlight',
  templateUrl: './task-highlight.component.html',
  styleUrls: ['./task-highlight.component.scss']
})
export class TaskHighlightComponent implements OnInit {

  taskHighlightDetails: any = {
    description: "View Task Highlight",
    linkUrl: "/tasks",
    tasks: previousTasks
  }

  pages: Array<ITaskPage> = [
    {page: previousTasks.slice(0, 5), id: 1},
    {page: previousTasks.slice(5, 10), id: 2},
    {page: previousTasks.slice(10, 15), id: 3},
    {page: previousTasks.slice(15, 20), id: 4}
  ];

  currentTaskPage: any = this.pages[0];
  currentPageId: number = 1;


  getTaskImageUrl = (imageName: string): string => {
    return `${environment.baseAPIDomain}/selfies/${imageName}`;
  }

  getCurrentTask(id) {
    this.currentTaskPage = this.pages[id].page;
    this.currentPageId = this.pages[id].id;
  }

  constructor() { }

  ngOnInit() {
    this.currentTaskPage = this.pages[0].page;
  }

}
