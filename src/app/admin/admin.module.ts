import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,  AppRoutingModule
  ],
  exports: [AdminPageComponent]
})
export class AdminModule { }
