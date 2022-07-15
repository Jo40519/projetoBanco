import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarContasComponent } from './consultarContas/consultarContas.component';
import { RouterModule } from '@angular/router';
import { contaRouter } from './conta.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(contaRouter)
  ],
  declarations: [ConsultarContasComponent]
})
export class ContaModule { }
