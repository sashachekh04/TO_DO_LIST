import { NgModule } from "@angular/core";
import { AdminComponent } from "./layout/admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from './admin-routing.module';
import { AddTaskComponent } from "./add-task/add-task.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TaskListComponent } from "../task-list/task-list.component";

@NgModule({
  declarations: [
    AdminComponent,
    AddTaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule {

}
