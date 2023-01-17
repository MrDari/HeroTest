import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { CrearHeroeComponent } from './heroes/crear-heroe/crear-heroe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarHeroeComponent } from './heroes/editar-heroe/editar-heroe.component';
import { HeroesModule } from './heroes/heroes.module';
import { CrearHeroeModule } from './heroes/crear-heroe/crear-heroe.module';
import { EditarHeroeModule } from './heroes/editar-heroe/editar-heroe.module';
import { DialogDeleteModule } from './dialog-delete/dialog-delete.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HeroesModule,
    DialogDeleteModule,
    CrearHeroeModule,
    EditarHeroeModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
