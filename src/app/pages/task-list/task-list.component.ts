import { Component, OnInit } from '@angular/core';
import { TaskDataService } from "../../core/services/task-data.service";
import {Subject} from "rxjs";
import { Task } from "../../core/model/model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public taskList$!: Subject<Task[]>

  constructor(private taskService: TaskDataService) {
    this.taskList$ = this.taskService.data
  }

  ngOnInit(): void {
  }

}