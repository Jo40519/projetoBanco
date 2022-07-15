import { Router, Routes } from "@angular/router";
import { ConsultarContasComponent } from "./consultarContas/consultarContas.component";

export const contaRouter : Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ConsultarContasComponent
      }
    ]
  }
]
