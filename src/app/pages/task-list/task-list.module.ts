import { NgModule } from "@angular/core";
import { TaskListComponent } from "./layout/task-list.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TaskListComponent],
  exports: [TaskListComponent],
  imports: [RouterModule, CommonModule]
})

export class TaskListModule {

}
