import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../models/persona.models';

@Component({
  selector: 'app-modal-persona',
  templateUrl: './modal-persona.component.html',
  styleUrl: './modal-persona.component.css'
})
export class ModalPersonaComponent {
  @Input()textModal:string='';
  @Output() emiter=new EventEmitter<Persona>();
  @Input()persona:Persona=new Persona();
  @Input()idPersona?:string='nuevo'
  private _formBuilder=inject(FormBuilder);
  form!:FormGroup;
  constructor(){
    this.initForm();
  }
  initForm(){
    this.form=this._formBuilder.group(
      {
        nombre:['',[Validators.required]],
        identificacion:['',[Validators.required, Validators.minLength(10)]],
        edad:['',[Validators.required]],
        email:['',[Validators.required, Validators.pattern("[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}")]],
        celular:['',[Validators.minLength(9)]],
      }
    )
  }
  getInvalid(argument:string){
    return this.form.get(argument)?.invalid && this.form.get(argument)?.touched;
  }
  guardar(){
    if( this.form.invalid){
      Object.values(this.form.controls).forEach(controls=>controls.markAsTouched());
      return;
    }
    if(this.idPersona=='nuevo'){
      this.emitirPersona();
      this.reiniciarPersona()
    }
  }
  emitirPersona(){
    this.emiter.emit(this.persona);
    this.formatearFormato();
  } 
  formatearFormato(){
    Object.values(this.form.controls).forEach(controls=>controls.markAsUntouched());
    let btnCerrar=document.getElementById('btnCerrar');
    btnCerrar?.click();
  }
  reiniciarPersona(){
    let persona=new Persona();
    this.persona=persona;    
  }
}
