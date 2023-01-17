import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarHeroeComponent } from './editar-heroe.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditarHeroeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EditarHeroeModule { }
