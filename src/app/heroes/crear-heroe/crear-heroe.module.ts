import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrearHeroeComponent } from './crear-heroe.component';
import { MaterialModule } from 'src/app/material.module';
import { HeroesRoutingModule } from '../heroes-routing.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    CrearHeroeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HeroesRoutingModule,
    RouterModule
  ]
})
export class CrearHeroeModule { }
