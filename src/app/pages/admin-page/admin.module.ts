import { NgModule } from "@angular/core";
import { AdminComponent } from "./layout/admin.component";
import { CommonModule } from "@angular/common";
import { AdminRoutingModule } from './admin-routing.module';
import { AddTaskComponent } from "./add-task/add-task.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TaskListComponent } from "../task-list/task-list.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [
    AdminComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
  exports: [
    AdminComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ReactiveFormsModule,
        NgSelectModule,
        FormsModule
    ]
})
export class AdminModule {

}
