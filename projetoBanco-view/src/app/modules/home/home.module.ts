import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/layouts/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes),
    SidebarModule
  ],
  declarations: [
    HomeComponent  ]
})
export class HomeModule { }
