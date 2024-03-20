import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AppRoutingModule } from '../app-routing.module';
import { BuildingsComponent } from './buildings/buildings.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminPageComponent,
    BuildingsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,  AppRoutingModule,ReactiveFormsModule
  ],
  exports: [AdminPageComponent]
})
export class AdminModule { }
