import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidebarComponent } from 'src/app/layouts/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent  ]
})
export class HomeModule { }
