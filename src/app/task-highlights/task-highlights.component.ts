import { TaskSelfiesService } from './../services/usage/task.selfies';
import { TaskInfoService } from './../services/usage/task.info';
import { ITask, ITaskSekfies } from './../common/types';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'app/services/usage/tasks.services';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-task-highlights',
  templateUrl: './task-highlights.component.html',
  styleUrls: ['./task-highlights.component.scss']
})
export class TaskHighlightsComponent implements OnInit {
  tasks: Array<ITask>;
  taskId: string = "";
  taskSelfies: Array<ITaskSekfies>;
  title: string;
  description: string;

  constructor(private service: TaskService, private taskInfoService: TaskInfoService, private taskSelfieService: TaskSelfiesService, private route: ActivatedRoute) { }

  getTaskImageUrl = (imageName: string): string => {
    return `${environment.baseAPIDomain}/selfies/${imageName}.jpg` || `${environment.baseAPIDomain}/selfies/Turisky_d50zjrgabaqaaaqab.jpg`;
  }

  getSelfieImageUrl = (imageName: string): string => {
    return `${environment.baseAPIDomain}/${imageName}` || `${environment.baseAPIDomain}/selfies/Turisky_d50zjrgabaqaaaqab.jpg`;
  }

  ngOnInit() {
    const __this = this;
    if(this.route.snapshot.paramMap.get('id')) {
      this.taskId = this.route.snapshot.paramMap.get('id');


     // get task information
     this.taskInfoService.getTaskInfo(this.taskId)
      .subscribe(info => {
        __this.title = info && info.data.title;
        __this.description = info && info.data.description;
        console.log("Task info: ", info);
        __this.taskSelfieService.getSelfiesByTaskID(this.taskId)
        .subscribe(selfies => {
          __this.taskSelfies = selfies && selfies.data;
          console.log("Task selfies: ", __this.taskSelfies);
        });
      });

    } else {
      this.title = "Tasks Highlight";
      this.description = "Click on a task of your choice to see participants and subsequently their detailed profile.";

      this.service.getAllTasks()
      .subscribe(tasks => {
        __this.tasks = tasks && tasks.data;

      });
    }

  }

}
