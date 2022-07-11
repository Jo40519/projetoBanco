import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public formLogin!: FormGroup


  get name () {return this.formLogin.get('name')}
  get password () {return this.formLogin.get('password')}
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formLogin = this.formBuilder.group({
      name: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  validarCamposObrigatorios() {
    if(!this.name?.value
      || !this.password?.value) {
        return false
      }
      return true
  }

  login() {
    if(!this.validarCamposObrigatorios()) {
      alert('Campos obrigatórios não preenchidos')
    }
  }
}
