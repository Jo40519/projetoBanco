import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { loginRoutes } from './login.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoutes),
    ReactiveFormsModule,
    SweetAlert2Module
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
