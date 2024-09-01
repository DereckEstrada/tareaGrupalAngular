import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private _formBuilder=inject(FormBuilder);
  private _router=inject(Router);
  form!:FormGroup;
  correcto:boolean=false;
  usuario={
    usuario:'',
    email:'',
    password:'',
  }
  constructor(){
    this.initForm();
    localStorage.setItem("usuario",JSON.stringify(
      {
        usuario:'DevBootCamp',
        email:'vmtdev@mail.com',
        password:'0123456.',
      }
    ))
  }
  initForm(){
    this.form=this._formBuilder.group(
      {
        usuario:['',[Validators.required]],
        email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")]],
        password:['',[Validators.required]],
      }
    )
  }
  getUsuario(){
    let user:any;
    if(localStorage.getItem("usuario")){
      user=localStorage.getItem('usuario');
    } 
    return JSON.parse(user);
  }
  getInvalid(argument:string){
    return this.form.get(argument)?.invalid && this.form.get(argument)?.touched;
  }
  guardar(){
    if(this.form.invalid){
      return;
    }
    if(this.validar()){
      this.correcto=false;
      this._router.navigateByUrl("/persona")
      return;
    }
    this.correcto=true;
  }
  validar(){
    let validar:boolean=false;
    let userLocal=this.getUsuario();
    if(userLocal.usuario==this.usuario.usuario && userLocal.email==this.usuario.email&& userLocal.password==this.usuario.password){
      validar=true;
    }
    return validar;
  }
}
