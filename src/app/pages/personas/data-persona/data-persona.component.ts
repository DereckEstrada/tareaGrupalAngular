import { Component } from '@angular/core';
import { Persona } from '../../models/persona.models';

@Component({
  selector: 'app-data-persona',
  templateUrl: './data-persona.component.html',
  styleUrl: './data-persona.component.css'
})
export class DataPersonaComponent {
  personaList:Persona[]=[];
  usuario:string='';
  constructor(){
    this.usuario=this.getUsuario().usuario
  }
  getUsuario(){
    let user:any;
    if(localStorage.getItem('usuario')!=null){
      user=localStorage.getItem('usuario');
    }
    return JSON.parse(user);
  }
  guardar(persona:Persona){
    persona.id=this.personaList.length;
    this.personaList.push(persona);
  }
  removePerson(index:number){
    console.log(index);
    this.personaList=this.personaList.filter(person=>person.id!=index);
  }
}
