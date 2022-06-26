import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { TaskDataService } from "../../../core/services/task-data.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public priority!: Array<number>;
  public addTaskForm: UntypedFormGroup = this.fb.group({
    task: ['', Validators.required],
    priority: [null, Validators.required]
  })

  constructor(private dataService: TaskDataService,
              public fb: UntypedFormBuilder) {
    this.priority = this.getPriorities()
  }

  ngOnInit(): void {
  }
  public addTask(): void {
    if(this.addTaskForm.valid) {
      this.dataService.addTask(
        this.addTaskForm.get('task')?.value,
        this.addTaskForm.get('priority')?.value
      )
      this.addTaskForm.reset()
    }
  }

  public getPriorities(): Array<number> {
    return [1,2,3,4,5,6,7,8,9,10]
  }
}
