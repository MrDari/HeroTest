import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { HeroesService } from 'src/app/shared/heroes.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CrearHeroeComponent } from './crear-heroe.component';
import { HeroesServiceMock } from '../heroes.service.mock';

describe('Test del componente CrearHeroeComponent', () => {
  let component: CrearHeroeComponent;
  let fixture: ComponentFixture<CrearHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
      ],
      providers: [{ provide: HeroesService, useClass: HeroesServiceMock }],
      declarations: [CrearHeroeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe existir el CrearHeroeComponent', () => {
    fixture = TestBed.createComponent(CrearHeroeComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(CrearHeroeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges(); //TODO: <---------------

    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Black Panther');

    expect(component.heroForm.invalid).toBeTrue(); //TODO: ✔
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(CrearHeroeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Black Panther');
    let company = component.heroForm.controls['companyFormControl'];
    company.setValue('Marvel');

    expect(component.heroForm.invalid).toBeFalse(); //TODO: ✔
  });

  it('El formulario invalido pone disabled el botón crear', () => {
    const btnEl = fixture.debugElement.query(By.css('button.m-1'));
    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Black Panther');
    fixture.detectChanges();
    expect(btnEl.nativeElement.disabled).toBeTruthy();
  });

  it('El formulario valido quita disabled el botón crear', () => {
    const btnEl = fixture.debugElement.query(By.css('button.m-1'));
    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Black Panther');
    let company = component.heroForm.controls['companyFormControl'];
    company.setValue('Marvel');
    fixture.detectChanges();
    expect(btnEl.nativeElement.disabled).toBeFalsy();
  });

  it('Deberia añadir un nuevo heroe al hacer click en el boton', () => {
    const expected = {
      id: 3,
      nombre: 'Thor',
      company: 'Marvel',
    };
    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Thor');
    let company = component.heroForm.controls['companyFormControl'];
    company.setValue('Marvel');
    fixture.detectChanges();
    const btnAddHeroe = fixture.debugElement.query(By.css('button.m-1'));
      btnAddHeroe.nativeElement.click();
    expect(component.heroTest).toEqual(expected);


  });
});
