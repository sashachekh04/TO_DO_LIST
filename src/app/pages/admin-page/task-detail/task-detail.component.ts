import { Component, OnInit } from '@angular/core';
import { TaskDataService } from "../../../core/services/task-data.service";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

  public task: any;
  public priority!: Array<number>;
  public taskDetailForm: UntypedFormGroup;

  constructor(private dataService: TaskDataService,
              public fb: UntypedFormBuilder) {
    this.task = dataService.taskForChange
    this.priority = this.getPriorities()
    this.taskDetailForm = this.fb.group({
      task: [this.task.text, Validators.required],
      priority: [this.task.priority, Validators.required]
    })
  }

  ngOnInit(): void {
  }
  public getPriorities(): Array<number> {
    return [1,2,3,4,5,6,7,8,9,10]
  }

  public saveTask(): void {
    this.dataService.saveChangedTask(
      this.task,
      this.task.text = this.taskDetailForm.get('task')?.value,
      this.task.priority = this.taskDetailForm.get('priority')?.value)
  }

}
