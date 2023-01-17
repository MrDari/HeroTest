import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    HeroesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,

  ]
})
export class HeroesModule { }
