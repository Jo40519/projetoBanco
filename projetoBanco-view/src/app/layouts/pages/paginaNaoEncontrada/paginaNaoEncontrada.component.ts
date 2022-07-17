import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-paginaNaoEncontrada',
  templateUrl: './paginaNaoEncontrada.component.html',
  styleUrls: ['./paginaNaoEncontrada.component.css']
})
export class PaginaNaoEncontradaComponent implements OnInit {

  constructor(private routerService: Router) { }

  ngOnInit() {
    Swal.fire({
      title: 'Oops',
      text: 'Página não encontrada',
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: '#EA4335'
    }).then(ok => {
      this.routerService.navigate(['./home'])
    })

  }

}
