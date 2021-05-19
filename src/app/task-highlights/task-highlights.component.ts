import { ITask } from './../common/types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/services/usage/tasks.services';

@Component({
  selector: 'app-task-highlights',
  templateUrl: './task-highlights.component.html',
  styleUrls: ['./task-highlights.component.scss']
})
export class TaskHighlightsComponent implements OnInit {
  tasks: Array<ITask>;

  constructor(private service: TaskService, private route: ActivatedRoute) { }

  //constructor() { }

  ngOnInit() {
    const __this = this;
    this.service.getAllTasks()
      .subscribe(tasks => {
        __this.tasks = tasks.data;
        console.log("Tasks: ", __this.tasks);
      });

  }

}
