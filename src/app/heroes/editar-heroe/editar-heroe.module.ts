import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditarHeroeComponent } from './editar-heroe.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeroesRoutingModule } from '../heroes-routing.module';



@NgModule({
  declarations: [
    EditarHeroeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HeroesRoutingModule,
  ]
})
export class EditarHeroeModule { }
