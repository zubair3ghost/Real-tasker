import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
 
import { LoginComponent } from './authentication/login/login.component';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,AuthenticationModule,AdminModule
  ],
  exports: [
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
