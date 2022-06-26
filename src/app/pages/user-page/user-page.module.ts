import { NgModule } from "@angular/core";
import { UserComponent } from "./layout/user.component";
import { TaskListModule } from "../task-list/task-list.module";
import { UserRoutingModule } from "./user-page-routing.module";

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [
    UserRoutingModule,
    TaskListModule
  ]
})

export class UserPageModule {

}
