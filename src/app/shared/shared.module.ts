import { NgModule } from "@angular/core";
import { DashboardLayoutComponent } from "./components/layouts/dashboard-layout/dashboard-layout.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './components/layouts/header/header.component';

@NgModule({
    declarations: [
        DashboardLayoutComponent,
        SidebarComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports:[
        HeaderComponent,
        SidebarComponent,
        DashboardLayoutComponent
    ]
})

export class SharedModule{}