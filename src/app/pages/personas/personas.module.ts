import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonasRoutingModule } from './personas-routing.module';
import { LoginComponent } from './login/login.component';
import { DataPersonaComponent } from './data-persona/data-persona.component';
import { ModalPersonaComponent } from './modal-persona/modal-persona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelefonoPipe } from './telefono.pipe';


@NgModule({
  declarations: [
    LoginComponent,
    DataPersonaComponent,
    ModalPersonaComponent,
    TelefonoPipe
  ],
  imports: [
    CommonModule,
    PersonasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PersonasModule { }
