import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { AdminPageComponent } from './admin/admin-page/admin-page.component';
import { DashboardLayoutComponent } from './shared/components/layouts/dashboard-layout/dashboard-layout.component';
import { HeaderComponent } from './shared/components/layouts/header/header.component';
import { BuildingsComponent } from './admin/buildings/buildings.component';
import { ContactsComponent } from './admin/contacts/contacts.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
 

const routes: Routes = [
  {
    path:'login',component: LoginComponent
  } ,
  {
    path:'sidebar',component: SidebarComponent, data: { showHeader: true }
  } ,
  {
    path:'',
    component: DashboardLayoutComponent,
 
    children:[
      {
        path:'',
        component: AdminPageComponent,
        data: { title: 'Admin Managemen' }
       
      },
      {
        path:'header',
        component: HeaderComponent,
      // this is for header hide for login
        data: { showHeader: true }
       
      },
      {
        path:'buildings',
        component: BuildingsComponent,
        data: { title: 'buildings' }//this is for building
      },
      {
        path:'contact',
         component:ContactsComponent,
         data: { title: 'Contact Us' }
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
