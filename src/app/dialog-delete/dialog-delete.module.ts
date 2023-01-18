import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDeleteComponent } from './dialog-delete.component';
import { MaterialModule } from '../material.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    DialogDeleteComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class DialogDeleteModule { }
