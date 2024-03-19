import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { DashboardLayoutComponent } from './shared/components/layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './shared/components/layouts/header/header.component';
 

const routes: Routes = [
  {
    path:'login',component: LoginComponent
  } ,
  {
    path:'sidebar',
    component: DashboardLayoutComponent,
    children:[
      {
        path:'admin-page',
        component: AdminPageComponent
      },{
        path:'header',
        component: HeaderComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
