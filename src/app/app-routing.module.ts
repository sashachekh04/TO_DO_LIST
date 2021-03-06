import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationPageComponent } from "./pages/authorization-page/authorization-page.component";

const routes: Routes = [
  {
    path: '',
    component: AuthorizationPageComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin-page/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./pages/user-page/user-page.module').then(m => m.UserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
