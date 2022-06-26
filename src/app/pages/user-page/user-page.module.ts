import { NgModule } from "@angular/core";
import { UserComponent } from "./layout/user.component";
import { TaskListModule } from "../../shared/task-list/task-list.module";
import { UserRoutingModule } from "./user-page-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    TaskListModule
  ]
})

export class UserPageModule {

}
