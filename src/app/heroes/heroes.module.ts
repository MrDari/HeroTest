import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { MatCardModule } from '@angular/material/card';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatCardModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
