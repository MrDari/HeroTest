import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesComponent } from './heroes.component';
import { HeroesService } from '../shared/heroes.service';
import { HeroesServiceMock } from './heroes.service.mock';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[
        AppRoutingModule,
        HttpClientTestingModule,
        MaterialModule,
        MatDialogModule,
        MatCardModule,
        BrowserAnimationsModule,
      ],
      providers: [ {provide: HeroesService, useClass: HeroesServiceMock}, {provide: MAT_DIALOG_DATA, useValue : {}}],
      declarations: [ HeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia obtener los heroes al iniciar el componente', () => {
    const expected = [
      {
        "id": 1,
        "nombre": "Spiderman",
        "company": "DC"
      },
      {
        "nombre": "IronMan",
        "company": "Marvel",
        "id": 2
      },
      {
        "nombre": "Aquaman",
        "company": "DC",
        "id": 3
      },
      {
        "nombre": "Batman",
        "company": "DC",
        "id": 4
      },
      {
        "nombre": "AntMan",
        "company": "Marvel",
        "id": 5
      },
      {
        "id": 6,
        "nombre": "Hulk",
        "company": "DC"
      }
    ];


    expect(component.dataSource.data).toEqual(expected);

  });
  it('deberia abrir el Dialog', () => {

    const heroes = fixture.componentInstance;
    heroes.deleteHero(1);
    fixture.detectChanges();
    const dialogMessage = document.getElementsByTagName('strong')[0] as HTMLHeadElement;
    expect(dialogMessage.innerText).toEqual('Está seguro que desea eliminar?');

  })
});
