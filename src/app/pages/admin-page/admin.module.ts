import { NgModule } from "@angular/core";
import { AdminComponent } from "./layout/admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from './admin-routing.module';
import { AddTaskComponent } from "./add-task/add-task.component";
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskListModule } from "../task-list/task-list.module";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AdminComponent,
    AddTaskComponent,
    TaskDetailComponent
  ],
  exports: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    TaskListModule,
    NgSelectModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule {

}
