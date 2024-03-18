import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
 

const routes: Routes = [
  {
    path:'login',component: LoginComponent
  } ,
  {
    path:'sidebar',
    component: SidebarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
