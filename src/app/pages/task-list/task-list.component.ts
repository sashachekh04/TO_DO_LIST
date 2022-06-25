import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskDataService } from "../../core/services/task-data.service";
import { Observable } from "rxjs";
import { Task } from "../../core/model/model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  public taskList$!: Observable<Task[]>

  constructor(private taskService: TaskDataService) {
    this.taskList$ = this.taskService.data.asObservable()
  }

  ngOnInit(): void {
  }
  public onDeleteTask(id: number): void {
    this.taskService.deleteTask(id)
  }
}
