import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskDataService } from "../../../core/services/task-data.service";
import { Observable } from "rxjs";
import { Task } from "../../../core/model/model";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent implements OnInit {
  @Input() isAdminList: boolean = true;

  public taskList$!: Observable<Task[]>
  public taskListLength!: number;

  constructor(private taskService: TaskDataService) {
    this.taskList$ = this.taskService.data.asObservable()
    this.taskList$.subscribe(el => this.taskListLength = el.length)
  }

  ngOnInit(): void {
  }
  public onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
  public onChangeTask(t: Task): void {
    this.taskService.setChangedTask(t);
  }
}
