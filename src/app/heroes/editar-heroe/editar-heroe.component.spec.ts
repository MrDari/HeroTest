import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EditarHeroeComponent } from './editar-heroe.component';
import { HeroesService } from 'src/app/shared/heroes.service';
import { HeroesServiceMock } from '../heroes.service.mock';

describe('EditarHeroeComponent', () => {
  let component: EditarHeroeComponent;
  let fixture: ComponentFixture<EditarHeroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        AppRoutingModule,
      ],
      providers: [{ provide: HeroesService, useClass: HeroesServiceMock }],
      declarations: [EditarHeroeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario invalido', () => {
    const fixture = TestBed.createComponent(EditarHeroeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges(); //TODO: <---------------

    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Black Panther');
    const company = component.heroForm.controls['companyFormControl'];
    company.setValue(undefined);

    expect(component.heroForm.invalid).toBeTrue(); //TODO: ✔
  });

  it('Debe retornar formulario valido', () => {
    const fixture = TestBed.createComponent(EditarHeroeComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const nombre = component.heroForm.controls['nameFormControl'];
    nombre.setValue('Black Panther');
    const company = component.heroForm.controls['companyFormControl'];
    company.setValue('Marvel');

    expect(component.heroForm.invalid).toBeFalse(); //TODO: ✔
  });

  it('El formulario invalido pone disabled el botón crear', () => {
    const btnEl = fixture.debugElement.query(By.css('button.m-1'));
    const nombre = component.heroForm.controls['nameFormControl'];
    const company = component.heroForm.controls['companyFormControl'];
    company.setValue(undefined);
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


  it('Deberia obtener los heroes al iniciar el componente', () => {
    const expected = {
      id: 1,
      nombre: 'Spiderman',
      company: 'DC',
    };

    expect(component.hero).toEqual(expected);
  });
});
