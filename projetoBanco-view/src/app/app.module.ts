import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './layouts/pages/paginaNaoEncontrada/paginaNaoEncontrada.component';
import { PaginaSemAutorizacaoComponent } from './layouts/pages/paginaSemAutorizacao/paginaSemAutorizacao.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SidebarComponent } from './layouts/components/sidebar/sidebar.component';
import { NavBarComponent } from './layouts/components/navBar/navBar.component';
import { FooterComponent } from './layouts/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent,
    PaginaSemAutorizacaoComponent,
    SidebarComponent,
    NavBarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    NgxMaskModule.forRoot(),
    SweetAlert2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
