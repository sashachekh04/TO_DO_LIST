import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskDataService } from "../../../core/services/task-data.service";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  public taskText: string = '';
  public addTaskForm: FormGroup = this.fb.group({
    task: ['', Validators.required]
  })

  constructor(private dataService: TaskDataService,
              public fb: FormBuilder) { }

  ngOnInit(): void {
  }
  public addTask(): void {
    if(this.addTaskForm.valid) {
      this.addTaskForm.reset()
    }
  }
}
