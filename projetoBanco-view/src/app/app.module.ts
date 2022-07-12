import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './layouts/pages/paginaNaoEncontrada/paginaNaoEncontrada.component';
import { PaginaSemAutorizacaoComponent } from './layouts/pages/paginaSemAutorizacao/paginaSemAutorizacao.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SidebarComponent } from './layouts/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PaginaNaoEncontradaComponent,
    PaginaSemAutorizacaoComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
