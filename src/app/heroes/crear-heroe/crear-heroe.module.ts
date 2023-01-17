import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearHeroeComponent } from './crear-heroe.component';
import { MaterialModule } from 'src/app/material.module';
import { HeroesRoutingModule } from '../heroes-routing.module';




@NgModule({
  declarations: [
    CrearHeroeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeroesRoutingModule
  ]
})
export class CrearHeroeModule { }
