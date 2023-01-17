import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogDeleteComponent } from './dialog-delete.component';
import { MaterialModule } from '../material.module';



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
