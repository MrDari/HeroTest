import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';

import { DialogDeleteComponent } from './dialog-delete.component';

describe('DialogDeleteComponent', () => {

  let component: DialogDeleteComponent;
  let fixture: ComponentFixture<DialogDeleteComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MaterialModule,
        MatCardModule,
      ],
      providers: [ { provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: {} } ],
      declarations: [ DialogDeleteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('El boton activa el metodo enviarDatos', () => {
    const btnEl = fixture.debugElement.query(By.css('button.m-2'));
    const spy =  spyOn(component, 'enviarDatos');
    fixture.detectChanges();
    btnEl.nativeElement.click()
    expect(spy).toHaveBeenCalled();
   });
});
